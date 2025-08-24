import React from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import OrderCard from "@/components/dashboard/orders/OrderCard";

function Orders() {
  const orderDashboardData = [
    {
      title: "Total Orders",
      value: 300,
      change: "+29.7%",
      status: "up",
      period: "Last Month",
      chartData: [
        { month: "January", desktop: 120 },
        { month: "February", desktop: 100 },
        { month: "March", desktop: 220 },
        { month: "April", desktop: 200 },
        { month: "May", desktop: 280 },
        { month: "June", desktop: 100 },
      ],
    },
    {
      title: "Order Completed",
      value: 200,
      change: "+30.2%",
      status: "up",
      period: "Last Month",
      chartData: [
        { month: "January", desktop: 390 },
        { month: "February", desktop: 420 },
        { month: "March", desktop: 250 },
        { month: "April", desktop: 170 },
        { month: "May", desktop: 290 },
        { month: "June", desktop: 500 },
      ],
    },
    {
      title: "Pending Orders",
      value: 75,
      change: "+15.2%",
      status: "up",
      period: "Last Month",
      chartData: [
        { month: "January", desktop: 230 },
        { month: "February", desktop: 140 },
        { month: "March", desktop: 250 },
        { month: "April", desktop: 360 },
        { month: "May", desktop: 170 },
        { month: "June", desktop: 275 },
      ],
    },
    {
      title: "Cancel Orders",
      value: 25,
      change: "-10.2%",
      status: "down",
      period: "Last Month",
      chartData: [
        { month: "January", desktop: 240 },
        { month: "February", desktop: 338 },
        { month: "March", desktop: 135 },
        { month: "April", desktop: 232 },
        { month: "May", desktop: 40 },
        { month: "June", desktop: 25 },
      ],
    },
  ];

  return (
    <>
      <div className="flex items-center justify-between my-3">
        <h1 className="text-2xl font-semibold ">Orders</h1>
        <div>
          <Button
            variant="default"
            className="bg-blue-600 hover:bg-blue-700 hover:cursor-pointer"
          >
            {" "}
            <Plus /> Create New Order
          </Button>
        </div>
      </div>
      <section>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 ">
          {orderDashboardData.map((order) => (
            <OrderCard key={order.title} order={order} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Orders;
