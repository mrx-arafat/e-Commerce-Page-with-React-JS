import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  //   console.log(props.cart);

  let total = 0;
  for (const product of cart) {
    total = total + product.price;
  }
  const shipping = total > 0 ? 45 : 0;
  const tax = (total + shipping) * 0.15;

  const grandTotal = total + shipping + tax;

  return (
    <div>
      <h2>Order Summary</h2>
      <h3>Order Item : {props.cart.length}</h3>

      <h3>Total: ${total.toFixed(2)}</h3>
      <h3>Shipping : {shipping}</h3>
      <h3>Tax :{tax.toFixed(2)} </h3>
      <h2>Grand Total : ${grandTotal.toFixed(2)}</h2>
    </div>
  );
};

export default Cart;
