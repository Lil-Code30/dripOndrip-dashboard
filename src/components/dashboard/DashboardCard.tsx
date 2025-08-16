import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react";
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
    <Card className="p-2">
      <div className="flex gap-0.5">
        <Badge
          variant="outline"
          className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums"
        >
          <card.icon />
        </Badge>
        <CardTitle className="text-sm ml-1">{card.title}</CardTitle>
      </div>
      <CardTitle className="text-2xl font-semibold">
        {card.title === "Total Revenu" ? "$" : ""}
        {amount}
      </CardTitle>
    </Card>
  );
}

export default DashboardCard;
