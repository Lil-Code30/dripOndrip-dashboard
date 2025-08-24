import {
  CircleDollarSign,
  PackageSearch,
  Plus,
  ShoppingCart,
  Users,
  Eye,
} from "lucide-react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardCard from "@/components/dashboard/DashboardCard";
import DashboardOrdersTable from "@/components/dashboard/DashboardOrdersTable";
import RevenueVsSalesChart from "@/components/dashboard/charts/RevenuVsSales.chart";
import { Card, CardFooter, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import CalendarDemo from "@/components/common/Calendar";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";

function Dashboard() {
  const cardItems = [
    {
      icon: CircleDollarSign,
      title: "Total Sales",
      amount: 10000,
      percent: 23,
    },
    {
      icon: PackageSearch,
      title: "Total Product",
      amount: 10,
      percent: 100,
    },
    {
      icon: ShoppingCart,
      title: "Total Order",
      amount: 5000,
      percent: 60,
    },
    {
      icon: Users,
      title: "Total Customer",
      amount: 500,
      percent: 10,
    },
  ];
  const liveOrders = [
    {
      id: 1,
      user: "Paistudio",
      item: "1x Choco Chucu Coffee",
      time: "Today at 12:30",
    },
    {
      id: 2,
      user: "Paistudio",
      item: "1x Choco Chucu Coffee",
      time: "Today at 12:30",
    },
    {
      id: 3,
      user: "Paistudio",
      item: "1x Choco Chucu Coffee",
      time: "Today at 12:30",
    },
  ];

  const topSelling = [
    {
      product: "Coffee",
      orders: 756,
      percentage: 80.8,
    },
    {
      product: "Tea",
      orders: 120,
      percentage: 30.9,
    },
    {
      product: "Muffin",
      orders: 60,
      percentage: 15.5,
    },
    {
      product: "Sandwich",
      orders: 40,
      percentage: 53.6,
    },
    {
      product: "Juice",
      orders: 13,
      percentage: 21.2,
    },
  ];

  return (
    <>
      <section className="w-full flex gap-2 px-2 py-1">
        <div className="p-3 w-[70%]">
          <DashboardHeader />
          <div className="grid grid-cols-4 gap-2 mb-2">
            {cardItems.map((card) => (
              <DashboardCard key={card.title} card={card} />
            ))}
          </div>
          <div>
            <RevenueVsSalesChart />
          </div>
          <DashboardOrdersTable />
        </div>
        <div className="w-[30%] p-4 flex flex-col gap-y-3">
          <Card className="flex flex-row p-2 items-center justify-between">
            <div className="flex items-center justify-between">
              <Badge variant="outline" className="p-0">
                <ShoppingCart size={20} className="mr-1" />
              </Badge>
              <p className="text-sm gap-x-0.5 font-semibold">New Product</p>
            </div>
            <div>
              <Button variant="default" className="hover:cursor-pointer">
                Add <Plus />
              </Button>
            </div>
          </Card>
          <Card className="p-0">
            <CalendarDemo />
          </Card>
          <div>
            <CardTitle className="text-2xl font-semibold">
              Live Orders
            </CardTitle>
            <Card className="p-4 mt-3 flex flex-col gap-y-2  ">
              {liveOrders.map((item) => (
                <div key={item.id} className="border-b-2 pb-3 last:border-b-0">
                  <p>
                    <span className="font-bold">{item.user}</span> purchased{" "}
                    <span className="font-bold">{item.item}</span>
                  </p>
                  <CardFooter className="justify-between p-0">
                    <p>{item.time}</p>
                    <Link href="">
                      <Eye />
                    </Link>
                  </CardFooter>
                </div>
              ))}
            </Card>
          </div>
          <div>
            <CardTitle className="text-2xl font-semibold">
              Top Selling Items
            </CardTitle>
            <Card className="p-4 mt-3 flex flex-col gap-y-2  ">
              <p className="font-semibold py-1.5">Product sold</p>
              <p>
                <span className="font-semibold text-3xl">1,009</span>{" "}
                <span className="text-accent-foreground text-sm">
                  Orders created
                </span>
              </p>
              <div className="flex flex-col gap-y-1">
                {topSelling.map((product) => (
                  <div key={product.product}>
                    <div className="flex items-center justify-between mb-2">
                      <p>{product.product}</p>
                      <p>
                        {product.orders} ({product.percentage}%)
                      </p>
                    </div>
                    <Progress value={product.percentage} className="w-full" />
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
