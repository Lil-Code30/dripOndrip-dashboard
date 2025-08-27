"use client";

import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";

import { CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A bar chart with a label";

// const chartData = [
//   { month: "January", desktop: 186 },
//   { month: "February", desktop: 305 },
//   { month: "March", desktop: 237 },
//   { month: "April", desktop: 73 },
//   { month: "May", desktop: 209 },
//   { month: "June", desktop: 214 },
// ];
// Customer growth
const chartData = [
  { day: "Sunday", customers: 7 },
  { day: "Monday", customers: 8 },
  { day: "Tuesday", customers: 9 },
  { day: "Wednesday", customers: 10 },
  { day: "Thursday", customers: 13 },
  { day: "Friday", customers: 9 },
  { day: "Saturday", customers: 8 },
];
const chartConfig = {
  customers: {
    label: "Customers",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

function CustomerWeeklyGrowthChart() {
  return (
    <>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="customers" fill="var(--color-completed)" radius={8}>
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </>
  );
}

export default CustomerWeeklyGrowthChart;
