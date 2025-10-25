"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LayoutDashboard, LineChart } from "lucide-react";
import { PieChartClient } from "@/components/charts/pie-chart-client";
import { BarChartClient } from "@/components/charts/bar-chart-client";
import { VendorDetailsList } from "@/components/vendor-details-list";

export default function DashboardPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Accounts Payable</h2>
        <div className="flex items-center space-x-2">
          {/* Add any dashboard specific actions here */}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Vendor Performance Analysis
            </CardTitle>
            <LineChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">
              Comprehensive vendor performance metrics and payment analytics
            </p>
          </CardContent>
        </Card>

        <div className="col-span-4 grid gap-4 md:grid-cols-2 lg:grid-cols-2">
          <PieChartClient />
          <BarChartClient />
        </div>

        <Card className="col-span-7">
          <VendorDetailsList />
        </Card>
      </div>
    </div>
  );
}
