/**
 * Canonical contact information for GI NET
 * This is the single source of truth for all company details
 */
export const CANONICAL = {
  company: {
    name: "GI NET Pty Ltd",
    displayName: "GiNet",
    abn: {
      formatted: "71 608 672 608",
      normalized: "71608672608",
      regex: /(?:ABN\s*)?71\s*608\s*672\s*608/i
    }
  },
  address: {
    street: "12 Stelvio Close",
    suburb: "Lynbrook",
    state: "VIC",
    postcode: "3975",
    country: "Australia",
    full: "12 Stelvio Close, Lynbrook VIC 3975",
    formatted: "12 Stelvio Close, Lynbrook VIC 3975, Australia"
  },
  contact: {
    phone: {
      display: "03 8797 3795",
      normalized: "+61387973795",
      international: "+61 3 8797 3795",
      variants: ["03 8797 3795", "(03) 8797 3795", "+61 3 8797 3795"]
    },
    email: {
      support: "support@ginet.au",
      privacy: "privacy@ginet.au",
      domain: "ginet.au"
    },
    website: {
      domain: "ginet.au",
      url: "https://ginet.au"
    }
  }
} as const;

/**
 * Normalize ABN by removing all spaces and non-digits
 */
export function normalizeABN(abn: string): string {
  return abn.replace(/\D/g, '');
}

/**
 * Validate ABN checksum using ATO algorithm
 */
export function validateABNChecksum(abn: string): boolean {
  const normalized = normalizeABN(abn);
  if (normalized.length !== 11) return false;
  
  const weights = [10, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
  const digits = normalized.split('').map(Number);
  
  // Subtract 1 from first digit
  digits[0] -= 1;
  
  // Calculate weighted sum
  const sum = digits.reduce((acc, digit, idx) => acc + (digit * weights[idx]), 0);
  
  // Check if divisible by 89
  return sum % 89 === 0;
}

/**
 * Normalize phone number to international format
 */
export function normalizePhone(phone: string): string {
  // Remove all non-digits
  const digits = phone.replace(/\D/g, '');
  
  // Convert 03 to +613
  if (digits.startsWith('03')) {
    return '+61' + digits.substring(1);
  }
  
  // Already has country code
  if (digits.startsWith('61')) {
    return '+' + digits;
  }
  
  return '+61' + digits;
}

/**
 * Normalize address for comparison
 */
export function normalizeAddress(address: string): string {
  return address
    .toLowerCase()
    .replace(/[,.\s]+/g, ' ')
    .trim();
}

/**
 * Check if email is from canonical domain
 */
export function isCanonicalEmail(email: string): boolean {
  return email.toLowerCase().endsWith('@' + CANONICAL.contact.email.domain);
}
