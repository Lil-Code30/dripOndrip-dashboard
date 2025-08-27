import {
  Card,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  // TrendingDown,
  Percent,
  Plus,
  Ellipsis,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
function CustomerStatsCard({
  card,
}: {
  card: {
    title: string;
    value: number;
    change: number;
    changeType: string;
    link: string;
  };
}) {
  const value = card.value.toLocaleString();
  return (
    <Card className="p-2 gap-1">
      <div className="flex justify-between items-center gap-0.5">
        <CardTitle className="text-sm ml-1">{card.title}</CardTitle>
        <Button variant="outline" className="hover:cursor-pointer">
          <Link href="#">View All</Link>
        </Button>
      </div>
      <CardTitle className="text-3xl font-semibold m-0 p-0">
        {card.title === "Average CLV" ? "$" : ""}
        {value}
      </CardTitle>
      <CardFooter className="pt-0 text-[12px] px-0">
        <Badge
          variant="outline"
          className={`h-5 min-w-5 rounded p-0.5  font-medium  mr-1 ${
            card.changeType === "increase"
              ? "text-green-600 bg-green-200"
              : "text-red-600 bg-red-200"
          }`}
        >
          <>
            {card.change} <Percent />
          </>
        </Badge>
        <CardDescription>From last Month</CardDescription>
      </CardFooter>
    </Card>
  );
}

export default CustomerStatsCard;
