import Navbar from "@/components/dashboard/Navbar";
import {
  CircleDollarSign,
  PackageSearch,
  ShoppingCart,
  Users,
  Percent,
} from "lucide-react";
import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardCard from "@/components/dashboard/DashboardCard";

function Dashboard() {
  const cardItems = [
    {
      icon: CircleDollarSign,
      title: "Total Revenu",
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
  return (
    <>
      <Navbar />
      <DropdownMenuSeparator />
      <section className="w-full flex gap-2 px-2 py-1">
        <div className="p-3 w-2/3">
          <DashboardHeader />
          <div className="grid grid-cols-4 gap-2">
            {cardItems.map((card) => (
              <DashboardCard key={card.title} card={card} />
            ))}
          </div>
        </div>

        <div className="w-1/3"></div>
      </section>
    </>
  );
}

export default Dashboard;
