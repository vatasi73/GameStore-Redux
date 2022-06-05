import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { BiCartAlt } from "react-icons/bi";
import { calcTotalPrice } from "./utilits";
import CartMenu from "./CartMenu";
import ItemsInCart from "./ItemsInCart";
import { useNavigate } from "react-router-dom";

export default function CartBlock() {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);

  const items = useSelector((state) => state.cart.itemsInCart);
  const totalPrice = calcTotalPrice(items);
  const navigate = useNavigate();
  const handleClick = useCallback(() => {
    setIsCartMenuVisible(false);
    navigate("/order");
  }, [navigate]);

  return (
    <div className="cart-block">
      <ItemsInCart quantity={items.length} />
      <BiCartAlt
        size={25}
        className="cart-block__icon"
        onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
      />
      {totalPrice > 0 ? (
        <span className="cart-block__total-price">{totalPrice}руб.</span>
      ) : null}
      {isCartMenuVisible && (
        <CartMenu
          items={items}
          onClick={() => {
            handleClick();
          }}
        />
      )}
    </div>
  );
}
