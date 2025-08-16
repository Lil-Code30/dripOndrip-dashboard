import {
  LayoutDashboard,
  ShoppingCart,
  PackageSearch,
  Settings,
  Users,
  ChartNoAxesCombined,
  LogOut,
} from "lucide-react";
import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Button } from "../ui/button";
import Link from "next/link";
import { DropdownMenuSeparator } from "../ui/dropdown-menu";

function AppSidebar() {
  // Menu items
  const items = [
    {
      title: "Dashboard",
      url: "/",
      icon: LayoutDashboard,
    },
    {
      title: "Orders",
      url: "/dashboard/orders",
      icon: ShoppingCart,
    },
    {
      title: "Products",
      url: "/dashboard/products",
      icon: PackageSearch,
    },
    {
      title: "Customers",
      url: "/dashboard/customers",
      icon: Users,
    },
    {
      title: "Analytics Reports",
      url: "/dashboard/analytics",
      icon: ChartNoAxesCombined,
    },
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: Settings,
    },
  ];
  return (
    <Sidebar>
      <SidebarHeader>
        <Link href="/" className="font-stalinst text-xl order-2 md:order-1">
          drip<span className="text-red-500 font-stalinst text-2xl">On</span>
          drip
        </Link>
      </SidebarHeader>
      <DropdownMenuSeparator />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild variant="outline">
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Button variant="destructive" className="hover:cursor-pointer">
          <LogOut />
          <span>Logout</span>
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}

export default AppSidebar;
