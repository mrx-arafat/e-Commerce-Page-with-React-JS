import React from "react";
import "./Cart.css";

const Cart = (props) => {
  return (
    <div>
      <h2>Order Summary</h2>
      <h3>Order Item :{props.cart.length}</h3>
    </div>
  );
};

export default Cart;
