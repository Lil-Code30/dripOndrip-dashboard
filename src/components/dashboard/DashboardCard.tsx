import {
  Card,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  LucideIcon,
  TrendingUp,
  // TrendingDown,
  Percent,
  Plus,
} from "lucide-react";
function DashboardCard({
  card,
}: {
  card: {
    icon: LucideIcon;
    title: string;
    amount: number;
    percent: number;
  };
}) {
  const amount = card.amount.toLocaleString();
  return (
    <Card className="p-2 gap-1">
      <div className="flex gap-0.5">
        <Badge
          variant="outline"
          className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums"
        >
          <card.icon />
        </Badge>
        <CardTitle className="text-sm ml-1">{card.title}</CardTitle>
      </div>
      <CardTitle className="text-3xl font-semibold m-0 p-0">
        {card.title === "Total Sales" ? "$" : ""}
        {amount}
      </CardTitle>
      <CardFooter className="pt-0 text-[12px] px-0">
        <Badge
          variant="outline"
          className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums"
        >
          {card.title === "Total Product" ? (
            <>
              <Plus /> {card.percent}
            </>
          ) : (
            <>
              <TrendingUp /> {card.percent} <Percent />
            </>
          )}
        </Badge>
        <CardDescription>
          {card.title === "Total Product" ? "Products" : ""} This Month
        </CardDescription>
      </CardFooter>
    </Card>
  );
}

export default DashboardCard;
