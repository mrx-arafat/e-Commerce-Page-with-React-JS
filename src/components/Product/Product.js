import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const Product = (props) => {
  // console.log(props.product);

  const { name, category, img, seller, price, stock } = props.product;
  const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;

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
        <button
          onClick={() => props.handleAddToCart(props.product)}
          className="btn-regular"
        >
          {cartIcon} Add to Cart
        </button>
        {/* evabe onclick na dile undefined dekhabe */}
      </div>
    </div>
  );
};

export default Product;
