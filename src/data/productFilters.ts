import { filterData } from "@/types/types";

export const categoryFilter: filterData[] = [
  { title: "All Collection", value: "all" },
  { title: "Electronics", value: "electronics" },
  { title: "Clothing", value: "clothing" },
  { title: "Home & Kitchen", value: "home_kitchen" },
  { title: "Beauty", value: "beauty" },
  { title: "Sports", value: "sports" },
];

export const priceFilter: filterData[] = [
  { title: "All Prices", value: "all" },
  { title: "Under CAD$50", value: "under_50" },
  { title: "CAD$50 – CAD$100", value: "50_100" },
  { title: "CAD$100 – CAD$200", value: "100_200" },
  { title: "CAD$200 – CAD$500", value: "200_500" },
  { title: "Above CAD$500", value: "above_500" },
];

export const statusFilter: filterData[] = [
  { title: "Active", value: "active" },
  { title: "In Active", value: "inactive" },
];
export const availabilityStatusFilter: filterData[] = [
  { title: "All Status", value: "all" },
  { title: "In Stock", value: "in_stock" },
  { title: "Low Stock", value: "low_stock" },
  { title: "Out of Stock", value: "out_of_stock" },
  { title: "Discontinued", value: "discontinued" },
];
