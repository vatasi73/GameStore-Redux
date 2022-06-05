import React from "react";
import Button from "./Button";
import CartItem from "./CartItem";
import { calcTotalPrice } from "./utilits";
export default function CartMenu({ items, onClick }) {
  return (
    <div className="cart-menu">
      <div className="cart-menu__games-list">
        {items.length > 0
          ? items.map((game) => <CartItem key={game} {...game} />)
          : "Корзина пуста"}
      </div>
      {items.length > 0 ? (
        <div className="cart-menu__arrange">
          <div className="cart-menu__total-price">
            <span>Итого</span>
            <span>{calcTotalPrice(items)} руб.</span>
          </div>
          <Button type="primary" size="m" onclick={onClick}>
            Оформить заказ
          </Button>
        </div>
      ) : null}
    </div>
  );
}
