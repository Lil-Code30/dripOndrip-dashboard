export type filterData = {
  title: string;
  value: string;
};

export type Product = {
  productId: string;
  productUrl: string;
  productName: string;
  category: string;
  price: string;
  stock: string;
  status: "active" | "inactive";
  createdAt: string;
};
