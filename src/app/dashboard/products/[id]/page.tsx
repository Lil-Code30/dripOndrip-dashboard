"use client";

import { useParams } from "next/navigation";

function OrderDetails() {
  const { id } = useParams<{ id: string }>();
  return (
    <>
      <h1>Product Details</h1>
      <p>Product ID: {id}</p>
    </>
  );
}

export default OrderDetails;
