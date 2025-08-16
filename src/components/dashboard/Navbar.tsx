"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Bell, MessageCircleMore, Search } from "lucide-react";
import { Button } from "../ui/button";

function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between ">
      <div>
        <h1 className="text-3xl font-semibold">Dashboard</h1>
      </div>
      <div className="w-1/3 flex items-center justify-around">
        <div className="flex border items-center border-input gap-1.5 rounded-lg px-1">
          <Button variant="ghost" className="hover:cursor-pointer">
            <Search color="gray" size="25" />
          </Button>
          <Input
            className="border-none outline-0  focus-visible:border-none focus-visible:ring-0 "
            placeholder="Search..."
          />
        </div>

        <div className="flex gap-2 items-center">
          <MessageCircleMore />
          <Bell />
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-2">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/dashboard/profile">Profile</Link>{" "}
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/dashboard/team">Team</Link>{" "}
              </DropdownMenuItem>
              <DropdownMenuItem
                variant="destructive"
                onClick={() => alert("Yout are logout")}
              >
                LogOut{" "}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
