"use client";

import Link from "next/link";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Order = {
  orderId: string;
  customer: string;
  status: "Completed" | "Pending" | "Cancelled";
  totalAmount: number;
  date: string;
};

type Status = "Completed" | "Pending" | "Cancelled";

export const columns: ColumnDef<Order>[] = [
  {
    accessorKey: "orderId",
    header: "Order ID",
  },
  {
    accessorKey: "customer",
    header: "Customer",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status: Status = row.getValue("status");

      switch (status) {
        case "Completed":
          return (
            <span
              className={`text-green-600 bg-green-200 px-2 py-0.5 rounded-lg font-semibold`}
            >
              {status}
            </span>
          );

        case "Pending":
          return (
            <span
              className={`text-yellow-600 bg-yellow-200 px-2 py-0.5 rounded-lg font-semibold`}
            >
              {status}
            </span>
          );

        case "Cancelled":
          return (
            <span
              className={`text-red-600 bg-red-200 px-2 py-0.5 rounded-lg font-semibold`}
            >
              {status}
            </span>
          );
        default:
          return null;
      }
    },
  },
  {
    accessorKey: "totalAmount",
    header: "Amount",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("totalAmount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className=" font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const order = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="h-8 w-8 p-0 hover:cursor-pointer"
            >
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              className="hover:cursor-pointer"
              onClick={() => navigator.clipboard.writeText(order.orderId)}
            >
              Copy order ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />

            <DropdownMenuItem className="hover:cursor-pointer">
              <Button variant="ghost">
                <Link href={`/dashboard/orders/${order.orderId}`}>
                  view order details
                </Link>
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
