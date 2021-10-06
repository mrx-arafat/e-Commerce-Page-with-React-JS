import React from "react";
import useProducts from "../../hooks/useProducts";

const OrderReview = () => {
  const [products] = useProducts();
  return (
    <div>
      <h1>order review</h1>
      <h2>{products.length}</h2>
    </div>
  );
};

export default OrderReview;
