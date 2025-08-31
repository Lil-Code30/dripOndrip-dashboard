"use client";
import ProductFilters from "@/components/dashboard/products/ProductFilters";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { ArrowDownNarrowWide, Funnel, Plus } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { products } from "@/data/productData";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "@/components/dashboard/products/productTable/Columns";

function Products() {
  const [isFilter, setIsFilter] = useState(false);

  const handleFilter = () => setIsFilter((prev) => !prev);

  return (
    <>
      <Card className="my-3 py-3 gap-3">
        <div className="flex gap-x-2 items-center justify-between px-3">
          <div className="flex gap-x-2 items-center w-1/2">
            <div className="w-1/2">
              <Input type="text" placeholder="Search..." />
            </div>
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
            <Button
              variant="outline"
              className={`hover:cursor-pointer ${
                isFilter
                  ? " bg-green-500 border border-green-600 hover:bg-green-500"
                  : ""
              }`}
              onClick={handleFilter}
            >
              <Funnel /> Filter
            </Button>
          </div>
          <div className="">
            <Link
              href="/dashboard/products/create"
              className="flex items-center gap-2 rounded-full bg-green-600 px-3 py-1 text-white"
            >
              {" "}
              <Plus /> <span className="font-semibold">Add Product</span>
            </Link>
          </div>
        </div>
        {isFilter && (
          <>
            <Separator />
            <ProductFilters />
          </>
        )}
      </Card>
      <Card className="my-4">
        <DataTable columns={columns} data={products} />
      </Card>
    </>
  );
}

export default Products;
