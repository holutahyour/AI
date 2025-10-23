"use client"

import * as React from "react"
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

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
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const pieData = [
  { name: "Technology", value: 400, color: "hsl(var(--chart-1))" },
  { name: "Manufacturing", value: 300, color: "hsl(var(--chart-2))" },
  { name: "Services", value: 300, color: "hsl(var(--chart-3))" },
  { name: "Healthcare", value: 200, color: "hsl(var(--chart-4))" },
  { name: "Other", value: 100, color: "hsl(var(--chart-5))" },
]

const barData = [
  { vendor: "TechCorp", amount: 450000 },
  { vendor: "Manufacturing Inc", amount: 320000 },
  { vendor: "ServicePro", amount: 280000 },
  { vendor: "HealthSys", amount: 180000 },
  { vendor: "Other Vendors", amount: 120000 },
]

const chartConfig = {
  value: {
    label: "Amount",
  },
  amount: {
    label: "Amount",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig

export function VendorPerformanceCard() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Distribution by Amount</CardTitle>
          <CardDescription>
            Vendor spending distribution for current period
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="hsl(var(--chart-1))"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Outstanding Amounts</CardTitle>
          <CardDescription>
            Top vendors by outstanding invoice amounts
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="vendor" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="amount" fill="var(--color-amount)" />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}
