import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PieChartClient } from "@/components/charts/pie-chart-client";
import { BarChartClient } from "@/components/charts/bar-chart-client";
import { VendorDetailsList } from "@/components/vendor-details-list";

export default function DashboardPage() {
  console.log("DashboardPage rendering");
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Accounts Payable</h1>
          <p className="text-muted-foreground">
            Comprehensive vendor performance metrics and payment analytics.
          </p>
        </div>
        <Badge color="green">Live Data</Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Vendor Performance Analysis</CardTitle>
          <CardDescription>
            An overview of your vendor expenses and payment statuses.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold">Top 5 Vendors</h3>
              <p className="text-sm text-muted-foreground">
                Highest outstanding amounts by vendor - Total: $409,000
              </p>
              <div className="h-[200px]">
                {/* Pie Chart */}
                <PieChartClient
                  data={[
                    { name: "Tech...", value: 145000, fill: "var(--color-tech)" },
                    { name: "Office...", value: 89000, fill: "var(--color-office)" },
                    { name: "Marketing...", value: 72000, fill: "var(--color-marketing)" },
                    { name: "Facility...", value: 58000, fill: "var(--color-facility)" },
                    { name: "Legal...", value: 45000, fill: "var(--color-legal)" },
                  ]}
                />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Outstanding Amounts</h3>
              <div className="h-[200px]">
                {/* Bar Chart */}
                <BarChartClient
                  data={[
                    { name: "Tech...", amount: 145000 },
                    { name: "Office...", amount: 89000 },
                    { name: "Marketing...", amount: 72000 },
                    { name: "Facility...", amount: 58000 },
                    { name: "Legal...", amount: 45000 },
                  ]}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Vendor Details</CardTitle>
        </CardHeader>
        <CardContent>
          <VendorDetailsList />
        </CardContent>
      </Card>
    </div>
  );
}
