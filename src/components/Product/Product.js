import React from "react";

const Product = (props) => {
  console.log(props.product);

  const { name, category } = props.product;
  return (
    <div>
      <h1>Hello Product is connected to shop</h1>
      <h3>name: {name}</h3>
      <h3>category: {category}</h3>
    </div>
  );
};

export default Product;
