"use client";

import * as React from "react";

import { Label, Pie, PieChart } from "recharts";

import { CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A donut chart with text";

// age segmentation
const chartData = [
  { ageGroup: "18-24", customers: 1400, fill: "var(--color-chart-1)" },
  { ageGroup: "25-34", customers: 1200, fill: "var(--color-chart-2)" },
  { ageGroup: "35-44", customers: 645, fill: "var(--color-chart-4)" },
];

const chartConfig = {
  customers: {
    label: "Customers",
  },
  "18-24": {
    label: "18-24",
    color: "var(--chart-1)",
  },
  "25-34": {
    label: "25-34",
    color: "var(--chart-2)",
  },
  "35-44": {
    label: "35-44",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig;

function CustomerAgeRangeChart() {
  const totalCustomers = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.customers, 0);
  }, []);

  return (
    <>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="customers"
              nameKey="ageGroup"
              innerRadius={60}
              outerRadius={80}
              strokeWidth={10}
              className="m-23"
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalCustomers.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Customers
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
            {/* <ChartLegend
              content={<ChartLegendContent nameKey="ageGroup" />}
              className=" flex-wrap gap-2 *:basis-1/4 *:justify-center "
            /> */}
          </PieChart>
        </ChartContainer>
      </CardContent>
    </>
  );
}

export default CustomerAgeRangeChart;
