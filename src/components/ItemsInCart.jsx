import React from "react";

export default function ItemsInCart({ quantity = 0 }) {
  return quantity > 0 ? <div className="items-in-cart">{quantity}</div> : null;
}
