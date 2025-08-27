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

type Customer = {
  customerId: string;
  name: string;
  email: string;
  country: string;
  totalOrders: number;
  lastOrder: string;
  status: "Active" | "Inactive";
};

type Status = "Active" | "Inactive";

export const columns: ColumnDef<Customer>[] = [
  {
    accessorKey: "customerId",
    header: "Customer ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "country",
    header: "Country",
  },
  {
    accessorKey: "totalOrders",
    header: "Total Orders",
  },
  {
    accessorKey: "lastOrder",
    header: "Last Order",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status: Status = row.getValue("status");

      switch (status) {
        case "Active":
          return (
            <span
              className={`text-green-600 bg-green-200 px-2 py-0.5 rounded-lg font-semibold`}
            >
              {status}
            </span>
          );

        case "Inactive":
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
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const customer = row.original;

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
              onClick={() => navigator.clipboard.writeText(customer.customerId)}
            >
              Copy Customer ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />

            <DropdownMenuItem className="hover:cursor-pointer">
              <Button variant="ghost">
                <Link href={`/dashboard/customers/${customer.customerId}`}>
                  view Customer&apos;s details
                </Link>
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
