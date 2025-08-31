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
import Image from "next/image";
import { Product } from "@/types/types";

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "productName",
    header: "Product Infos",
    cell: ({ row }) => {
      const product = row.original;
      const productName: string = row.getValue("productName");

      return (
        <div className="flex items-center gap-x-3">
          <div>
            <Image
              width={100}
              height={100}
              src={product.productUrl}
              alt={productName}
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold">{productName}</h2>
            <span className="text-gray-400">ID: {product.productId}</span>{" "}
            <span className="font-medium ml-3">
              Category: {product.category}
            </span>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("price"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "CAD",
      }).format(amount);

      return <div className=" font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "stock",
    header: "Stock / Availability",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status: "active" | "inactive" = row.getValue("status");

      switch (status) {
        case "active":
          return (
            <span
              className={`text-green-600 bg-green-200 px-2 py-0.5 rounded-lg font-semibold`}
            >
              {status}
            </span>
          );

        case "inactive":
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
    accessorKey: "createdAt",
    header: "Created At",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const product = row.original;

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
              onClick={() => navigator.clipboard.writeText(product.productId)}
            >
              Copy Product ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />

            <DropdownMenuItem className="hover:cursor-pointer">
              <Button variant="ghost">
                <Link href={`/dashboard/products/${product.productId}`}>
                  view Product&apos;s details
                </Link>
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
