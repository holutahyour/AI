"use client";

import dynamic from "next/dynamic";
import { Chart } from "@/components/ui/chart";
import * as RechartsPrimitive from "recharts";

const DynamicPieChartComponent = dynamic(
  () => Promise.resolve(RechartsPrimitive.PieChart),
  {
    ssr: false,
  }
);

interface PieChartData {
  name: string;
  value: number;
  fill: string;
}

export function PieChartClient({ data }: { data: PieChartData[] }) {
  return (
    <Chart.Container
      config={{
        tech: { label: "Tech...", color: "hsl(var(--chart-1))" },
        office: { label: "Office...", color: "hsl(var(--chart-2))" },
        marketing: { label: "Marketing...", color: "hsl(var(--chart-3))" },
        facility: { label: "Facility...", color: "hsl(var(--chart-4))" },
        legal: { label: "Legal...", color: "hsl(var(--chart-5))" },
      }}
      className="aspect-square"
    >
      <DynamicPieChartComponent
        data={data}
        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
      >
        <RechartsPrimitive.Pie
          dataKey="value"
          nameKey="name"
          innerRadius={60}
          outerRadius={80}
          className="[&_.recharts-pie-label-text]:fill-foreground"
        >
          <RechartsPrimitive.LabelList
            dataKey="name"
            className="fill-foreground"
            stroke="none"
            fontSize={12}
            formatter={(value: string, entry: { value: number }) =>
              `${value}: $${entry.value.toLocaleString()}`
            }
          />
        </RechartsPrimitive.Pie>
        <Chart.Tooltip cursor={false} content={<Chart.TooltipContent hideLabel />} />
      </DynamicPieChartComponent>
    </Chart.Container>
  );
}
