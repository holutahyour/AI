"use client";

import dynamic from "next/dynamic";
import { Chart } from "@/components/ui/chart";
import * as RechartsPrimitive from "recharts";

const DynamicBarChartComponent = dynamic(
  () => Promise.resolve(RechartsPrimitive.BarChart),
  {
    ssr: false,
  }
);

interface BarChartData {
  name: string;
  amount: number;
}

export function BarChartClient({ data }: { data: BarChartData[] }) {
  return (
    <Chart.Container
      config={{
        amount: { label: "Amount", color: "hsl(var(--chart-1))" },
      }}
    >
      <DynamicBarChartComponent layout="vertical" data={data}>
        <RechartsPrimitive.XAxis type="number" hide />
        <RechartsPrimitive.YAxis
          type="category"
          dataKey="name"
          hide
          axisLine={false}
          tickLine={false}
        />
        <RechartsPrimitive.Bar
          dataKey="amount"
          barSize={12}
          radius={[4, 4, 0, 0]}
          className="fill-[var(--color-amount)]"
        />
        <Chart.Tooltip cursor={false} content={<Chart.TooltipContent />} />
      </DynamicBarChartComponent>
    </Chart.Container>
  );
}
