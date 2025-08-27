import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { SquareArrowOutUpRight } from "lucide-react";

function DashboardHeader() {
  return (
    <Card className="flex flex-row items-center justify-between mb-4 px-2">
      <div>
        <CardTitle className="text-2xl font-medium">
          Welcome back, John Doe
        </CardTitle>
        <CardDescription>DripOnDrip Shop</CardDescription>
      </div>

      <Link
        href="https://drip-on-drip-v1.vercel.app/"
        target="_blanck"
        className="font-stalinst text-md flex items-center gap-1"
      >
        <span>
          drip<span className="text-red-500 font-stalinst text-2xl">On</span>
          drip
        </span>
        <SquareArrowOutUpRight />
      </Link>
    </Card>
  );
}

export default DashboardHeader;
