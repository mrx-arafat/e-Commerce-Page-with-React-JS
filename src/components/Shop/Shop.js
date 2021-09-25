import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="shop-container">
      <div className="product-container">
        <h3>Products:{products.length}</h3>
        {products.map((product) => (
          <Product product={product}></Product>
        ))}
      </div>
      <div className="cart-container">
        <h3>Order Summery:</h3>
        <h5>Item Ordered:</h5>
      </div>
    </div>
  );
};

export default Shop;
