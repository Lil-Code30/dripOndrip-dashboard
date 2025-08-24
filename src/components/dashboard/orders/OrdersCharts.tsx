"use client";

import { Line, LineChart } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function OrdersChart({
  chartData,
  status,
}: {
  chartData: { month: string; desktop: number }[];
  status: string;
}) {
  console.log(chartData);

  return (
    <ChartContainer config={chartConfig} className="min-h-auto w-full">
      <LineChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 12,
          right: 12,
          top: 12,
        }}
      >
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Line
          dataKey="desktop"
          type="natural"
          stroke={status === "up" ? "var(--chart-2)" : "var(--chart-1)"}
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ChartContainer>
  );
}
export default OrdersChart;
