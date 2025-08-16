"use client";

import { useParams } from "next/navigation";

function OrderDetails() {
  const { id } = useParams<{ id: string }>();
  return (
    <>
      <h1>Order Details</h1>
      <p>Order Number: {id}</p>
    </>
  );
}

export default OrderDetails;
