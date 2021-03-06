import React, { useEffect, useState } from "react";
import { addToDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    // console.log(product);
    const newCart = [...cart, product];
    setCart(newCart);
    //save to local storage
    addToDb(product.key);
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        <h3>Products:{products.length}</h3>
        {products.map((product) => (
          <Product
            product={product}
            key={product.key}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>

      <div className="cart-container">
        <Cart cart={cart}> </Cart>
      </div>
    </div>
  );
};

export default Shop;
