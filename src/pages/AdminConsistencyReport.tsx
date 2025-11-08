import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertCircle, CheckCircle2, AlertTriangle, Copy, RefreshCw } from "lucide-react";
import { toast } from "sonner";
import { CANONICAL } from "@/config/canonical";

interface Issue {
  file: string;
  line: number;
  field: string;
  found: string;
  expected: string;
  severity: "fail" | "warn" | "ok";
  message: string;
}

interface Report {
  timestamp: string;
  canonical: typeof CANONICAL;
  summary: {
    totalFiles: number;
    totalIssues: number;
    failCount: number;
    warnCount: number;
  };
  issues: Issue[];
}

const AdminConsistencyReport = () => {
  const [report, setReport] = useState<Report | null>(null);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<"all" | "fail" | "warn" | "ok">("all");

  useEffect(() => {
    loadReport();
  }, []);

  const loadReport = async () => {
    try {
      setLoading(true);
      const response = await fetch('/consistency-report.json');
      if (response.ok) {
        const data = await response.json();
        setReport(data);
      } else {
        toast.error("No report found. Run 'yarn audit:consistency' first.");
      }
    } catch (error) {
      console.error('Error loading report:', error);
      toast.error("Failed to load consistency report");
    } finally {
      setLoading(false);
    }
  };

  const copyCanonical = (value: string) => {
    navigator.clipboard.writeText(value);
    toast.success("Copied to clipboard");
  };

  const filteredIssues = report?.issues.filter(issue => 
    filter === "all" ? true : issue.severity === filter
  ) || [];

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case "fail":
        return <Badge variant="destructive" className="gap-1"><AlertCircle className="w-3 h-3" /> Fail</Badge>;
      case "warn":
        return <Badge variant="outline" className="gap-1 border-yellow-500 text-yellow-600"><AlertTriangle className="w-3 h-3" /> Warn</Badge>;
      default:
        return <Badge variant="outline" className="gap-1 border-green-500 text-green-600"><CheckCircle2 className="w-3 h-3" /> OK</Badge>;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="w-8 h-8 animate-spin mx-auto mb-4 text-primary" />
          <p className="text-muted-foreground">Loading consistency report...</p>
        </div>
      </div>
    );
  }

  if (!report) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 container mx-auto px-6 py-20">
          <Card>
            <CardHeader>
              <CardTitle>No Report Available</CardTitle>
              <CardDescription>
                Run the consistency audit to generate a report
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Execute the following command to generate a report:
              </p>
              <code className="block bg-muted p-4 rounded text-sm">
                yarn audit:consistency
              </code>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Consistency Report - GI NET Admin</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <Navbar />

      <main className="flex-1 container mx-auto px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Consistency Report</h1>
            <p className="text-muted-foreground">
              Last updated: {new Date(report.timestamp).toLocaleString()}
            </p>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Files Scanned</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{report.summary.totalFiles}</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Total Issues</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{report.summary.totalIssues}</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Failures</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-destructive">{report.summary.failCount}</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Warnings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-yellow-600">{report.summary.warnCount}</div>
              </CardContent>
            </Card>
          </div>

          {/* Canonical Values */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Canonical Values</CardTitle>
              <CardDescription>Single source of truth for company details</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium mb-1">Company Name</p>
                  <div className="flex items-center gap-2">
                    <code className="text-sm bg-muted px-2 py-1 rounded flex-1">
                      {CANONICAL.company.name}
                    </code>
                    <Button size="sm" variant="ghost" onClick={() => copyCanonical(CANONICAL.company.name)}>
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium mb-1">ABN</p>
                  <div className="flex items-center gap-2">
                    <code className="text-sm bg-muted px-2 py-1 rounded flex-1">
                      {CANONICAL.company.abn.formatted}
                    </code>
                    <Button size="sm" variant="ghost" onClick={() => copyCanonical(CANONICAL.company.abn.formatted)}>
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium mb-1">Address</p>
                  <div className="flex items-center gap-2">
                    <code className="text-sm bg-muted px-2 py-1 rounded flex-1">
                      {CANONICAL.address.full}
                    </code>
                    <Button size="sm" variant="ghost" onClick={() => copyCanonical(CANONICAL.address.full)}>
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium mb-1">Phone</p>
                  <div className="flex items-center gap-2">
                    <code className="text-sm bg-muted px-2 py-1 rounded flex-1">
                      {CANONICAL.contact.phone.display}
                    </code>
                    <Button size="sm" variant="ghost" onClick={() => copyCanonical(CANONICAL.contact.phone.display)}>
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium mb-1">Support Email</p>
                  <div className="flex items-center gap-2">
                    <code className="text-sm bg-muted px-2 py-1 rounded flex-1">
                      {CANONICAL.contact.email.support}
                    </code>
                    <Button size="sm" variant="ghost" onClick={() => copyCanonical(CANONICAL.contact.email.support)}>
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium mb-1">Privacy Email</p>
                  <div className="flex items-center gap-2">
                    <code className="text-sm bg-muted px-2 py-1 rounded flex-1">
                      {CANONICAL.contact.email.privacy}
                    </code>
                    <Button size="sm" variant="ghost" onClick={() => copyCanonical(CANONICAL.contact.email.privacy)}>
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Issues Table */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Issues Detected</CardTitle>
                  <CardDescription>
                    {filteredIssues.length} issue{filteredIssues.length !== 1 ? 's' : ''} found
                  </CardDescription>
                </div>
                <Button variant="outline" size="sm" onClick={loadReport}>
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Refresh
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs value={filter} onValueChange={(v) => setFilter(v as any)} className="mb-4">
                <TabsList>
                  <TabsTrigger value="all">All ({report.summary.totalIssues})</TabsTrigger>
                  <TabsTrigger value="fail">Failures ({report.summary.failCount})</TabsTrigger>
                  <TabsTrigger value="warn">Warnings ({report.summary.warnCount})</TabsTrigger>
                </TabsList>
              </Tabs>

              {filteredIssues.length === 0 ? (
                <div className="text-center py-12">
                  <CheckCircle2 className="w-12 h-12 mx-auto mb-4 text-green-500" />
                  <p className="text-lg font-medium">No issues found!</p>
                  <p className="text-muted-foreground">All consistency checks passed.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {filteredIssues.map((issue, idx) => (
                    <div key={idx} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            {getSeverityBadge(issue.severity)}
                            <Badge variant="outline">{issue.field}</Badge>
                          </div>
                          <p className="text-sm font-mono text-muted-foreground">
                            {issue.file}:{issue.line}
                          </p>
                        </div>
                      </div>
                      <p className="text-sm mb-2">{issue.message}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                        <div>
                          <span className="font-medium">Found:</span>
                          <code className="ml-2 bg-destructive/10 px-2 py-1 rounded text-destructive">
                            {issue.found}
                          </code>
                        </div>
                        <div>
                          <span className="font-medium">Expected:</span>
                          <code className="ml-2 bg-green-500/10 px-2 py-1 rounded text-green-600">
                            {issue.expected}
                          </code>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AdminConsistencyReport;
