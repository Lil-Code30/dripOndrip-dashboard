"use client";

import { useParams } from "next/navigation";

function OrderDetails() {
  const { id } = useParams<{ id: string }>();
  return (
    <>
      <h1>Customer Details</h1>
      <p>Customer Number: {id}</p>
    </>
  );
}

export default OrderDetails;
