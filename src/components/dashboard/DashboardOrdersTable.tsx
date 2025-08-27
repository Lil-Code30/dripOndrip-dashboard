"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import PaginationDemo from "@/components/common/PaginationDemo";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Card } from "../ui/card";
import { Ellipsis } from "lucide-react";

export function DashboardOrdersTable() {
  const recentOrders = [
    {
      productName: "Choco Chucu",
      variant: "Iced",
      orderId: "4UT014YOUTE",
      date: "08 Jun, 10:30",
      customer: {
        name: "Paistudio",
        type: "Star Customer",
      },
      price: 5.0,
      paymentMethod: "Cash on Delivery",
      status: "Waiting",
      imageUrl: "https://picsum.photos/seed/choco1/100/100",
    },
    {
      productName: "Choco Chucu",
      variant: "Iced",
      orderId: "4UT014YOUTT",
      date: "08 Jun, 10:30",
      customer: {
        name: "Paistudio",
        type: "Star Customer",
      },
      price: 5.0,
      paymentMethod: "Cash on Delivery",
      status: "Packed",
      imageUrl: "https://picsum.photos/seed/choco2/100/100",
    },
    {
      productName: "Latte Classic",
      variant: "Hot",
      orderId: "9GH561KOPU",
      date: "09 Jun, 11:45",
      customer: {
        name: "CoffeeHub",
        type: "New Customer",
      },
      price: 4.5,
      paymentMethod: "Credit Card",
      status: "Delivered",
      imageUrl: "https://picsum.photos/seed/latte/100/100",
    },
    {
      productName: "Vanilla Frappe",
      variant: "Cold",
      orderId: "7YT983PLQW",
      date: "10 Jun, 14:10",
      customer: {
        name: "BrewLovers",
        type: "Regular Customer",
      },
      price: 6.25,
      paymentMethod: "Cash on Delivery",
      status: "Processing",
      imageUrl: "https://picsum.photos/seed/frappe/100/100",
    },
    {
      productName: "Mocha Delight",
      variant: "Iced",
      orderId: "5HJ274MNOA",
      date: "11 Jun, 09:20",
      customer: {
        name: "JavaStudio",
        type: "Star Customer",
      },
      price: 5.75,
      paymentMethod: "Credit Card",
      status: "Cancelled",
      imageUrl: "https://picsum.photos/seed/mocha/100/100",
    },
  ];

  return (
    <>
      <div className="w-full flex items-center justify-between mt-5">
        <h1 className="text-2xl font-semibold">Recent Orders</h1>
        <Button>
          <Link href="/dashboard/orders">View All</Link>
        </Button>
      </div>
      <Card className=" mt-6 py-2">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-lg font-black">Product Name</TableHead>
              <TableHead className="text-lg font-black">Order ID</TableHead>
              <TableHead className="text-lg font-black">Customer</TableHead>
              <TableHead className="text-lg font-black">Price</TableHead>
              <TableHead className="text-lg font-black">Status</TableHead>
              <TableHead className="text-lg font-black">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentOrders.map((order) => (
              <TableRow key={order.orderId}>
                <TableCell className="font-medium">
                  <div className="flex gap-2 items-center">
                    <Image
                      src={order.imageUrl}
                      alt={order.productName}
                      width={60}
                      height={60}
                      className="rounded-lg"
                    />
                    <h2 className="text-md font-medium">{order.productName}</h2>
                  </div>
                </TableCell>
                <TableCell>
                  <p className="text-md font-black">{order.orderId}</p>{" "}
                  <span className="text-muted-foreground text-sm">
                    {order.date}
                  </span>
                </TableCell>
                <TableCell>
                  <h2 className="text-md font-medium">{order.customer.name}</h2>
                </TableCell>
                <TableCell>
                  <h2 className="text-md font-medium">{order.price} $CAD</h2>
                </TableCell>
                <TableCell>
                  <h2 className="text-md font-medium">{order.status}</h2>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <Ellipsis className="hover:cursor-pointer" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="mr-2 items-center">
                      <DropdownMenuItem>
                        <Button variant="ghost">
                          <Link href={`/dashboard/orders/${order.orderId}`}>
                            view
                          </Link>
                        </Button>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Button
                          variant="destructive"
                          className="hover:cursor-pointer"
                        >
                          Delete
                        </Button>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <PaginationDemo />
          </TableFooter>
        </Table>
      </Card>
    </>
  );
}

export default DashboardOrdersTable;
