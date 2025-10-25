"use client";

import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";
import * as Recharts from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
  { name: "Tech...", total: 145000, color: "var(--color-chart-1)" },
  { name: "Office...", total: 89000, color: "var(--color-chart-2)" },
  { name: "Marketing...", total: 72000, color: "var(--color-chart-3)" },
  { name: "Facility...", total: 58000, color: "var(--color-chart-4)" },
  { name: "Legal...", total: 45000, color: "var(--color-chart-5)" },
];

export function BarChartClient() {
  const chartConfig = {
    total: {
      label: "Total",
      theme: {
        light: "oklch(0.646 0.222 41.116)",
        dark: "oklch(0.488 0.243 264.376)",
      },
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
        <CardTitle>Outstanding Amounts</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
          <Recharts.BarChart accessibilityLayer data={data}>
            <Recharts.CartesianGrid vertical={false} />
            <Recharts.XAxis
              dataKey="name"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 6)}
            />
            <Recharts.YAxis
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => `$${value / 1000}K`}
            />
            <Recharts.Tooltip cursor={false} content={<ChartTooltipContent />} />
            <Recharts.Bar dataKey="total" radius={8}>
              {data.map((entry, index) => (
                <Recharts.Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Recharts.Bar>
          </Recharts.BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
