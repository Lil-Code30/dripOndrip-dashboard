import React from "react";
import CustomerStatsCard from "@/components/dashboard/customers/CustomerStatsCard";
import CustomerWeeklyGrowthChart from "@/components/dashboard/customers/charts/WeeklyCustomerGrowthChart";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "@/components/dashboard/customers/CustomerTable/Columns";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Funnel, ArrowDownNarrowWide } from "lucide-react";
import CustomerAgeRangeChart from "@/components/dashboard/customers/charts/CustomerAgeRangeChart";
import PaginationDemo from "@/components/common/PaginationDemo";

function Customers() {
  const customerOverview = [
    {
      title: "Total Customers",
      value: 3245,
      change: 2.65,
      changeType: "increase",
      link: "customer-overview",
    },
    {
      title: "New Customers",
      value: 85,
      change: -5.7,
      changeType: "decrease",
      link: "new-customers",
    },
    {
      title: "Average CLV",
      value: 1250,
      change: -2.81,
      changeType: "decrease",
      link: "average-cli",
    },
  ];
  const customerList = [
    {
      customerId: "CUST105",
      name: "Sarah Johnson",
      email: "sarah.johnson@email.com",
      country: "United States",
      totalOrders: 12,
      totalSpend: 1240.5, // example total spend
      lastOrder: "2024-12-08",
      status: "Active",
    },
    {
      customerId: "CUST104",
      name: "Mia Lee",
      email: "mia.lee@email.com",
      country: "South Korea",
      totalOrders: 5,
      totalSpend: 460.75,
      lastOrder: "2024-12-01",
      status: "Inactive",
    },
    {
      customerId: "CUST103",
      name: "Carlos Ramirez",
      email: "carlos.ramirez@email.com",
      country: "Mexico",
      totalOrders: 15,
      totalSpend: 1895.2,
      lastOrder: "2024-12-06",
      status: "Active",
    },
    {
      customerId: "CUST102",
      name: "Susi Amalia",
      email: "susi.amalia@email.com",
      country: "Indonesia",
      totalOrders: 9,
      totalSpend: 875.0,
      lastOrder: "2024-12-02",
      status: "Active",
    },
    {
      customerId: "CUST101",
      name: "Ahmed Khan",
      email: "ahmed.khan@email.com",
      country: "UAE",
      totalOrders: 7,
      totalSpend: 655.4,
      lastOrder: "2024-11-30",
      status: "Inactive",
    },
  ];

  return (
    <>
      <h1 className="text-xl font-semibold py-2">Customer Overview</h1>
      <section className="grid grid-cols-3 gap-3 ">
        {customerOverview.map((item) => (
          <CustomerStatsCard key={item.title} card={item} />
        ))}
      </section>
      <section className="grid grid-cols-6 gap-x-3 my-3">
        <Card className="col-span-3 gap-3 py-2"></Card>
        <Card className="col-span-1 gap-3 py-2">
          <CardTitle className="p-1">Age Segmentation</CardTitle>
          <CustomerAgeRangeChart />
        </Card>
        <Card className="col-span-2 gap-3 py-2">
          <CardHeader>
            <CardTitle>Customer Growth</CardTitle>
            <CardDescription>21 Aug - 27 Aug</CardDescription>
          </CardHeader>
          <CustomerWeeklyGrowthChart />
        </Card>
      </section>
      <section className="my-3">
        <CardHeader className="flex items-center justify-between">
          <h2 className="text-xl py-3 font-semibold">Customers Lists</h2>
          <div className="flex gap-3 items-center">
            <Input type="text" placeholder="Search customer" />
            {/* <Select>
              <SelectTrigger className="w-[180px]">
                <Funnel />
                <SelectValue placeholder="Filter" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectContent>
            </Select> */}
            <Select>
              <SelectTrigger className="w-[180px]">
                <ArrowDownNarrowWide />
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name_asc" className="hover:cursor-pointer">
                  Name : A → Z
                </SelectItem>
                <SelectItem value="name_desc" className="hover:cursor-pointer">
                  Name : Z → A
                </SelectItem>
                <SelectItem
                  value="activity_recent"
                  className="hover:cursor-pointer"
                >
                  Last activity: Recent first
                </SelectItem>
                <SelectItem
                  value="activity_oldest"
                  className="hover:cursor-pointer"
                >
                  Last activity: Oldest first
                </SelectItem>
                <SelectItem value="spend_desc" className="hover:cursor-pointer">
                  Total spend: High → Low
                </SelectItem>
                <SelectItem value="spend_asc" className="hover:cursor-pointer">
                  Total spend: Low → High
                </SelectItem>
                <SelectItem
                  value="orders_desc"
                  className="hover:cursor-pointer"
                >
                  Number of orders: High → Low
                </SelectItem>
                <SelectItem value="orders_asc" className="hover:cursor-pointer">
                  Number of orders: Low → High
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <Card>
          <DataTable columns={columns} data={customerList} />
          <PaginationDemo />
        </Card>
      </section>
    </>
  );
}

export default Customers;
