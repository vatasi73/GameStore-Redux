import React from "react";
import { Link } from "react-router-dom";
import CartBlock from "./CartBlock";
export default function Header() {
  return (
    <div className="header">
      <div className="wrapper">
        <Link to="/" className="header__store-title">
          Game Store
        </Link>
      </div>
      <div className="wrapper header_cart-btn-wrapper">
        <CartBlock />
      </div>
    </div>
  );
}
