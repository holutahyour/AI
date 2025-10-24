"use client"

import * as React from "react"
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
} from "@/components/ui/chart"
import { VendorDetailsList } from "@/components/vendor-details-list"

const pieData = [
  { name: "Tech", value: 145000, color: "hsl(var(--chart-1))" },
  { name: "Office", value: 89000, color: "hsl(var(--chart-2))" },
  { name: "Marketing", value: 72000, color: "hsl(var(--chart-3))" },
  { name: "Facility", value: 58000, color: "hsl(var(--chart-4))" },
  { name: "Legal", value: 45000, color: "hsl(var(--chart-5))" },
]

const barData = [
  { vendor: "Tech", amount: 145000 },
  { vendor: "Office", amount: 89000 },
  { vendor: "Marketing", amount: 72000 },
  { vendor: "Facility", amount: 58000 },
  { vendor: "Legal", amount: 45000 },
]

const chartConfig = {
  amount: {
    label: "Amount",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig

export function VendorAnalysisCard() {
  return (
    <Card className="p-4">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Vendor Performance Analysis</CardTitle>
            <CardDescription>
              Comprehensive vendor performance metrics and payment analytics
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div>
          <h3 className="text-lg font-semibold">Top 5 Vendors</h3>
          <p className="text-sm text-muted-foreground">
            Highest outstanding amounts by vendor - Total: $409,000
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h4 className="text-md mb-2 font-semibold">
              Distribution by Amount
            </h4>
            <ChartContainer
              config={chartConfig}
              className="mx-auto aspect-square max-h-[300px]"
            >
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="hsl(var(--chart-1))"
                    dataKey="value"
                    label={({ name, value }) =>
                      `${name}: $${(value / 1000).toFixed(0)}K`
                    }
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
          <div>
            <h4 className="text-md mb-2 font-semibold">Outstanding Amounts</h4>
            <ChartContainer config={chartConfig}>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={barData}>
                  <CartesianGrid vertical={false} />
                  <XAxis dataKey="vendor" tickLine={false} tickMargin={10} axisLine={false} />
                  <YAxis
                    tickFormatter={(value) => `$${Number(value) / 1000}K`}
                  />
                  <Tooltip />
                  <Bar dataKey="amount" fill="hsl(var(--chart-1))" radius={4} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
        </div>
        <VendorDetailsList />
      </CardContent>
    </Card>
  )
}
