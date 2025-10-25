"use client";

import { ChartContainer } from "@/components/ui/chart";
import * as Recharts from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
  { name: "Tech...", value: 145000, color: "var(--color-chart-1)" },
  { name: "Office...", value: 89000, color: "var(--color-chart-2)" },
  { name: "Marketing...", value: 72000, color: "var(--color-chart-3)" },
  { name: "Facility...", value: 58000, color: "var(--color-chart-4)" },
  { name: "Legal...", value: 45000, color: "var(--color-chart-5)" },
];

export function PieChartClient() {
  const chartConfig = {
    amount: {
      label: "Amount",
    },
    tech: {
      label: "Tech...",
      theme: {
        light: "oklch(0.646 0.222 41.116)",
        dark: "oklch(0.488 0.243 264.376)",
      },
    },
    office: {
      label: "Office...",
      theme: {
        light: "oklch(0.6 0.118 184.704)",
        dark: "oklch(0.696 0.17 162.48)",
      },
    },
    marketing: {
      label: "Marketing...",
      theme: {
        light: "oklch(0.398 0.07 227.392)",
        dark: "oklch(0.769 0.188 70.08)",
      },
    },
    facility: {
      label: "Facility...",
      theme: {
        light: "oklch(0.828 0.189 84.429)",
        dark: "oklch(0.627 0.265 303.9)",
      },
    },
    legal: {
      label: "Legal...",
      theme: {
        light: "oklch(0.769 0.188 70.08)",
        dark: "oklch(0.645 0.246 16.439)",
      },
    },
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Distribution by Amount</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-center">
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
          <Recharts.PieChart>
            <Recharts.Pie
              data={data}
              dataKey="value"
              nameKey="name"
              innerRadius={60}
              outerRadius={80}
              strokeWidth={2}
            >
              {data.map((entry, index) => (
                <Recharts.Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Recharts.Pie>
            <Recharts.Tooltip cursor={{ strokeDasharray: "10 10" }} />
          </Recharts.PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
