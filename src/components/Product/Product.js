import React from "react";
import "./Product.css";

const Product = (props) => {
  console.log(props.product);

  const { name, category, img, seller, price, stock } = props.product;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h2 className="product-name">{name}</h2>
        <p>
          <small>By : {seller}</small>
        </p>

        <h3>category: {category}</h3>
        <h3>price: ${price}</h3>
        <p>
          <small>only {stock} left oder soon !</small>
        </p>
        <button className="btn-regular">Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
