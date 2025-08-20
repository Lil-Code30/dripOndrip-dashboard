"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const description = "An interactive area chart";

const chartData = [
  { date: "2024-04-01", revenu: 222, sales: 150 },
  { date: "2024-04-02", revenu: 97, sales: 180 },
  { date: "2024-04-03", revenu: 167, sales: 120 },
  { date: "2024-04-04", revenu: 242, sales: 260 },
  { date: "2024-04-05", revenu: 373, sales: 290 },
  { date: "2024-04-06", revenu: 301, sales: 340 },
  { date: "2024-04-07", revenu: 245, sales: 180 },
  { date: "2024-04-08", revenu: 409, sales: 320 },
  { date: "2024-04-09", revenu: 59, sales: 110 },
  { date: "2024-04-10", revenu: 261, sales: 190 },
  { date: "2024-04-11", revenu: 327, sales: 350 },
  { date: "2024-04-12", revenu: 292, sales: 210 },
  { date: "2024-04-13", revenu: 342, sales: 380 },
  { date: "2024-04-14", revenu: 137, sales: 220 },
  { date: "2024-04-15", revenu: 120, sales: 170 },
  { date: "2024-04-16", revenu: 138, sales: 190 },
  { date: "2024-04-17", revenu: 446, sales: 360 },
  { date: "2024-04-18", revenu: 364, sales: 410 },
  { date: "2024-04-19", revenu: 243, sales: 180 },
  { date: "2024-04-20", revenu: 89, sales: 150 },
  { date: "2024-04-21", revenu: 137, sales: 200 },
  { date: "2024-04-22", revenu: 224, sales: 170 },
  { date: "2024-04-23", revenu: 138, sales: 230 },
  { date: "2024-04-24", revenu: 387, sales: 290 },
  { date: "2024-04-25", revenu: 215, sales: 250 },
  { date: "2024-04-26", revenu: 75, sales: 130 },
  { date: "2024-04-27", revenu: 383, sales: 420 },
  { date: "2024-04-28", revenu: 122, sales: 180 },
  { date: "2024-04-29", revenu: 315, sales: 240 },
  { date: "2024-04-30", revenu: 454, sales: 380 },
  { date: "2024-05-01", revenu: 165, sales: 220 },
  { date: "2024-05-02", revenu: 293, sales: 310 },
  { date: "2024-05-03", revenu: 247, sales: 190 },
  { date: "2024-05-04", revenu: 385, sales: 420 },
  { date: "2024-05-05", revenu: 481, sales: 390 },
  { date: "2024-05-06", revenu: 498, sales: 520 },
  { date: "2024-05-07", revenu: 388, sales: 300 },
  { date: "2024-05-08", revenu: 149, sales: 210 },
  { date: "2024-05-09", revenu: 227, sales: 180 },
  { date: "2024-05-10", revenu: 293, sales: 330 },
  { date: "2024-05-11", revenu: 335, sales: 270 },
  { date: "2024-05-12", revenu: 197, sales: 240 },
  { date: "2024-05-13", revenu: 197, sales: 160 },
  { date: "2024-05-14", revenu: 448, sales: 490 },
  { date: "2024-05-15", revenu: 473, sales: 380 },
  { date: "2024-05-16", revenu: 338, sales: 400 },
  { date: "2024-05-17", revenu: 499, sales: 420 },
  { date: "2024-05-18", revenu: 315, sales: 350 },
  { date: "2024-05-19", revenu: 235, sales: 180 },
  { date: "2024-05-20", revenu: 177, sales: 230 },
  { date: "2024-05-21", revenu: 82, sales: 140 },
  { date: "2024-05-22", revenu: 81, sales: 120 },
  { date: "2024-05-23", revenu: 252, sales: 290 },
  { date: "2024-05-24", revenu: 294, sales: 220 },
  { date: "2024-05-25", revenu: 201, sales: 250 },
  { date: "2024-05-26", revenu: 213, sales: 170 },
  { date: "2024-05-27", revenu: 420, sales: 460 },
  { date: "2024-05-28", revenu: 233, sales: 190 },
  { date: "2024-05-29", revenu: 78, sales: 130 },
  { date: "2024-05-30", revenu: 340, sales: 280 },
  { date: "2024-05-31", revenu: 178, sales: 230 },
  { date: "2024-06-01", revenu: 178, sales: 200 },
  { date: "2024-06-02", revenu: 470, sales: 410 },
  { date: "2024-06-03", revenu: 103, sales: 160 },
  { date: "2024-06-04", revenu: 439, sales: 380 },
  { date: "2024-06-05", revenu: 88, sales: 140 },
  { date: "2024-06-06", revenu: 294, sales: 250 },
  { date: "2024-06-07", revenu: 323, sales: 370 },
  { date: "2024-06-08", revenu: 385, sales: 320 },
  { date: "2024-06-09", revenu: 438, sales: 480 },
  { date: "2024-06-10", revenu: 155, sales: 200 },
  { date: "2024-06-11", revenu: 92, sales: 150 },
  { date: "2024-06-12", revenu: 492, sales: 420 },
  { date: "2024-06-13", revenu: 81, sales: 130 },
  { date: "2024-06-14", revenu: 426, sales: 380 },
  { date: "2024-06-15", revenu: 307, sales: 350 },
  { date: "2024-06-16", revenu: 371, sales: 310 },
  { date: "2024-06-17", revenu: 475, sales: 520 },
  { date: "2024-06-18", revenu: 107, sales: 170 },
  { date: "2024-06-19", revenu: 341, sales: 290 },
  { date: "2024-06-20", revenu: 408, sales: 450 },
  { date: "2024-06-21", revenu: 169, sales: 210 },
  { date: "2024-06-22", revenu: 317, sales: 270 },
  { date: "2024-06-23", revenu: 480, sales: 530 },
  { date: "2024-06-24", revenu: 132, sales: 180 },
  { date: "2024-06-25", revenu: 141, sales: 190 },
  { date: "2024-06-26", revenu: 434, sales: 380 },
  { date: "2024-06-27", revenu: 448, sales: 490 },
  { date: "2024-06-28", revenu: 149, sales: 200 },
  { date: "2024-06-29", revenu: 103, sales: 160 },
  { date: "2024-06-30", revenu: 446, sales: 400 },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  revenu: {
    label: "Revenu",
    color: "var(--chart-1)",
  },
  sales: {
    label: "Sales",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

function RevenueVsSalesChart() {
  const [timeRange, setTimeRange] = React.useState("90d");

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = new Date("2024-06-30");
    let daysToSubtract = 90;
    if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });

  return (
    <Card className="pt-0">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1">
          <CardTitle>Revenue Vs Sales</CardTitle>
          <CardDescription>Showing total revenue and sales</CardDescription>
        </div>

        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="hidden w-[160px] rounded-lg sm:ml-auto sm:flex"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              Last 3 months
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--chart-1)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--chart-1)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--chart-2)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--chart-2)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="sales"
              type="natural"
              fill="url(#fillMobile)"
              stroke="var(--chart-2)"
              stackId="a"
            />
            <Area
              dataKey="revenu"
              type="natural"
              fill="url(#fillDesktop)"
              stroke="var(--chart-1)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export default RevenueVsSalesChart;
