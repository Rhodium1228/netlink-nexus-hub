#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { glob } from 'glob';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Canonical values
const CANONICAL = {
  company: {
    name: "GI NET Pty Ltd",
    displayName: "GiNet",
    abn: {
      formatted: "71 608 672 608",
      normalized: "71608672608"
    }
  },
  address: {
    full: "12 Stelvio Close, Lynbrook VIC 3975"
  },
  contact: {
    phone: {
      display: "03 8797 3795",
      normalized: "+61387973795"
    },
    email: {
      support: "support@ginet.au",
      privacy: "privacy@ginet.au",
      domain: "ginet.au"
    },
    website: {
      url: "https://ginet.au"
    }
  }
};

// Helpers
function normalizeABN(abn) {
  return abn.replace(/\D/g, '');
}

function normalizePhone(phone) {
  const digits = phone.replace(/\D/g, '');
  if (digits.startsWith('03')) {
    return '+61' + digits.substring(1);
  }
  if (digits.startsWith('61')) {
    return '+' + digits;
  }
  return '+61' + digits;
}

function normalizeAddress(address) {
  return address.toLowerCase().replace(/[,.\s]+/g, ' ').trim();
}

// Scan file for issues
function scanFile(filePath, content) {
  const issues = [];
  const lines = content.split('\n');

  // Check ABN
  const abnRegex = /ABN[:\s]*(\d[\s\d]{10,})/gi;
  let match;
  while ((match = abnRegex.exec(content)) !== null) {
    const found = match[1];
    const normalized = normalizeABN(found);
    if (normalized !== CANONICAL.company.abn.normalized) {
      const lineNum = content.substring(0, match.index).split('\n').length;
      issues.push({
        file: filePath,
        line: lineNum,
        field: 'ABN',
        found: found,
        expected: CANONICAL.company.abn.formatted,
        severity: 'fail',
        message: `ABN mismatch: found "${found}", expected "${CANONICAL.company.abn.formatted}"`
      });
    }
  }

  // Check phone numbers
  const phoneRegex = /(?:\+61|0)[\s\d()]{9,15}/g;
  while ((match = phoneRegex.exec(content)) !== null) {
    const found = match[0];
    try {
      const normalized = normalizePhone(found);
      if (normalized !== CANONICAL.contact.phone.normalized) {
        const lineNum = content.substring(0, match.index).split('\n').length;
        issues.push({
          file: filePath,
          line: lineNum,
          field: 'Phone',
          found: found,
          expected: CANONICAL.contact.phone.display,
          severity: 'warn',
          message: `Phone format inconsistent: found "${found}", expected "${CANONICAL.contact.phone.display}"`
        });
      }
    } catch (e) {
      // Skip invalid phone numbers
    }
  }

  // Check emails
  const emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/gi;
  while ((match = emailRegex.exec(content)) !== null) {
    const found = match[0].toLowerCase();
    if (!found.endsWith('@' + CANONICAL.contact.email.domain)) {
      const lineNum = content.substring(0, match.index).split('\n').length;
      issues.push({
        file: filePath,
        line: lineNum,
        field: 'Email',
        found: found,
        expected: `*@${CANONICAL.contact.email.domain}`,
        severity: 'fail',
        message: `Non-canonical email domain: found "${found}", must use @${CANONICAL.contact.email.domain}`
      });
    }
  }

  // Check for address components
  if (content.toLowerCase().includes('stelvio')) {
    const addressRegex = /\d+\s+Stelvio\s+Close[^,]*,\s*Lynbrook\s+VIC\s+\d{4}/gi;
    if ((match = addressRegex.exec(content)) !== null) {
      const found = match[0];
      const normalized = normalizeAddress(found);
      const expected = normalizeAddress(CANONICAL.address.full);
      if (normalized !== expected) {
        const lineNum = content.substring(0, match.index).split('\n').length;
        issues.push({
          file: filePath,
          line: lineNum,
          field: 'Address',
          found: found,
          expected: CANONICAL.address.full,
          severity: 'fail',
          message: `Address mismatch: found "${found}", expected "${CANONICAL.address.full}"`
        });
      }
    }
  }

  // Check for placeholders
  const placeholders = ['TBC', 'XXX-XXXX', 'TODO', 'FIXME', '123 456 789'];
  placeholders.forEach(placeholder => {
    if (content.includes(placeholder)) {
      const index = content.indexOf(placeholder);
      const lineNum = content.substring(0, index).split('\n').length;
      issues.push({
        file: filePath,
        line: lineNum,
        field: 'Placeholder',
        found: placeholder,
        expected: '(complete value)',
        severity: 'fail',
        message: `Placeholder detected: "${placeholder}" needs to be replaced`
      });
    }
  });

  return issues;
}

// Main audit function
async function auditConsistency() {
  console.log('🔍 GI NET Consistency Auditor\n');
  console.log('Scanning files...\n');

  const files = await glob('src/**/*.{ts,tsx,js,jsx}', {
    ignore: ['**/node_modules/**', '**/dist/**', '**/*.test.*']
  });

  const allIssues = [];

  for (const file of files) {
    try {
      const content = fs.readFileSync(file, 'utf-8');
      const issues = scanFile(file, content);
      allIssues.push(...issues);
    } catch (error) {
      console.error(`Error reading ${file}:`, error.message);
    }
  }

  // Generate report
  const report = {
    timestamp: new Date().toISOString(),
    canonical: CANONICAL,
    summary: {
      totalFiles: files.length,
      totalIssues: allIssues.length,
      failCount: allIssues.filter(i => i.severity === 'fail').length,
      warnCount: allIssues.filter(i => i.severity === 'warn').length
    },
    issues: allIssues
  };

  // Write JSON report
  const reportPath = path.join(__dirname, '../public/consistency-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

  // Console output
  console.log('📊 Summary:');
  console.log(`   Files scanned: ${report.summary.totalFiles}`);
  console.log(`   Total issues: ${report.summary.totalIssues}`);
  console.log(`   Failures: ${report.summary.failCount}`);
  console.log(`   Warnings: ${report.summary.warnCount}\n`);

  if (allIssues.length > 0) {
    console.log('❌ Top 10 Critical Issues:\n');
    const criticalIssues = allIssues
      .filter(i => i.severity === 'fail')
      .slice(0, 10);
    
    criticalIssues.forEach((issue, idx) => {
      console.log(`${idx + 1}. ${issue.file}:${issue.line}`);
      console.log(`   ${issue.message}`);
      console.log(`   Found: "${issue.found}"`);
      console.log(`   Expected: "${issue.expected}"\n`);
    });
  }

  console.log(`\n📄 Full report written to: ${reportPath}`);
  console.log(`   View at: http://localhost:8080/consistency-report.json\n`);

  // Exit code
  const hasFailures = report.summary.failCount > 0;
  if (hasFailures) {
    console.log('❌ Audit FAILED: Critical inconsistencies detected\n');
    process.exit(1);
  } else if (report.summary.warnCount > 0) {
    console.log('⚠️  Audit PASSED with warnings\n');
    process.exit(0);
  } else {
    console.log('✅ Audit PASSED: All checks OK\n');
    process.exit(0);
  }
}

// Run audit
auditConsistency().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
