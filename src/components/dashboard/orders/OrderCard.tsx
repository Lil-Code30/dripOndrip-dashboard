"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { TrendingUp, TrendingDown } from "lucide-react";
import OrdersChart from "./OrdersCharts";

function OrderCard({
  order,
}: {
  order: {
    title: string;
    value: number;
    change: string;
    status: string;
    period: string;
    chartData: { month: string; desktop: number }[];
  };
}) {
  return (
    <Card key={order.title} className="py-3 gap-2">
      <CardHeader className="my-1">
        <CardTitle className="">{order.title}</CardTitle>
      </CardHeader>
      <DropdownMenuSeparator className="mx-3 my-0" />
      <CardContent className="flex flex-row items-center justify-between gap-x-2">
        <div>
          <p className="flex gap-x-1">
            <span className="text-3xl font-semibold ">{order.value}</span>
            {
              <span
                className={`text-sm flex items-center gap-x-0.5 ${
                  order.status === "up" ? "text-green-500" : "text-red-500"
                }`}
              >
                {order.status === "up" ? <TrendingUp /> : <TrendingDown />}{" "}
                {order.change}
              </span>
            }
          </p>
          <CardDescription className="text-sm text-muted-foreground">
            {order.period}
          </CardDescription>
        </div>
        <div>
          <OrdersChart chartData={order.chartData} status={order.status} />
        </div>
      </CardContent>
    </Card>
  );
}

export default OrderCard;
