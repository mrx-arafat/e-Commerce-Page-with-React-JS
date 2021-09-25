import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  //   console.log(props.cart);

  let total = 0;
  for (const product of cart) {
    total = total + product.price;
  }
  return (
    <div>
      <h2>Order Summary</h2>
      <h3>Order Item : {props.cart.length}</h3>

      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
