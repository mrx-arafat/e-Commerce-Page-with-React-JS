import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="" />
      <nav className="nav">
        <NavLink className="li" to="/shop">
          Shop
        </NavLink>
        <NavLink className="li" to="/review">
          Order Review
        </NavLink>
        <NavLink className="li" to="/order">
          Order
        </NavLink>
        <NavLink className="li" to="/inventory">
          Inventory
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
