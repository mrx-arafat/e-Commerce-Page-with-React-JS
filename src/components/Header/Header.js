import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="" />
      <nav className="nav">
        <li>
          <a href="/shop">SHOP</a>
        </li>
        <li>
          <a href="/order">ORDER</a>
        </li>
        <li>
          <a href="/inventory">INVENTORY</a>
        </li>
      </nav>
    </div>
  );
};

export default Header;
