import React from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import OrderCard from "@/components/dashboard/orders/OrderCard";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "@/components/dashboard/orders/OrderTable/Columns";

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
  const orders = [
    {
      orderId: "5678",
      customer: "Jerome Bell",
      status: "Completed",
      totalAmount: 320.0,
      date: "01 Mar 2025",
    },
    {
      orderId: "5679",
      customer: "Bessie Cooper",
      status: "Completed",
      totalAmount: 440.0,
      date: "01 Mar 2025",
    },
    {
      orderId: "5680",
      customer: "Darrell Steward",
      status: "Cancelled",
      totalAmount: 220.0,
      date: "02 Mar 2025",
    },
    {
      orderId: "5681",
      customer: "Cameron Williamson",
      status: "Pending",
      totalAmount: 510.0,
      date: "03 Mar 2025",
    },
    {
      orderId: "5682",
      customer: "Floyd Miles",
      status: "Cancelled",
      totalAmount: 600.0,
      date: "04 Mar 2025",
    },
    {
      orderId: "5683",
      customer: "Esther Howard",
      status: "Pending",
      totalAmount: 360.0,
      date: "05 Mar 2025",
    },
    {
      orderId: "5684",
      customer: "Leslie Alexander",
      status: "Pending",
      totalAmount: 420.0,
      date: "05 Mar 2025",
    },
    {
      orderId: "5685",
      customer: "Arlene McCoy",
      status: "Completed",
      totalAmount: 115.0,
      date: "06 Mar 2025",
    },
    {
      orderId: "5686",
      customer: "Darlene Robertson",
      status: "Completed",
      totalAmount: 720.0,
      date: "07 Mar 2025",
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
      <section className="py-5">
        <h2 className="text-xl py-3 font-semibold">Order Lists</h2>
        <Card className="py-2 gap-2">
          <CardHeader className="p-3">
            <div className="bg-card text-card-foreground flex  rounded-xl border p-1 gap-x-2">
              <Button
                variant="default"
                className="bg-blue-600 hover:bg-blue-700 hover:cursor-pointer"
              >
                Total (34)
              </Button>
              <Button variant="outline" className="hover:cursor-pointer">
                {" "}
                Completed (300)
              </Button>
              <Button variant="outline" className="hover:cursor-pointer">
                {" "}
                Pending (100)
              </Button>
              <Button variant="outline" className="hover:cursor-pointer">
                {" "}
                Cancelled (40)
              </Button>
            </div>
            <div></div>
          </CardHeader>
          <CardContent>
            <DataTable columns={columns} data={orders} />
          </CardContent>
        </Card>
      </section>
    </>
  );
}

export default Orders;
