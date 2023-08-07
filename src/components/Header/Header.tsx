import React from "react";
import Cart from "../Cart/CartButton/CartButton";
import classes from "./Header.module.scss";
import { StoreItems } from "../../models/item";

const Header: React.FC<{ cartItems: StoreItems; cartCount: number }> = (
  props,
) => {
  return (
    <div className={classes.header__container}>
      <span className={classes.header__logo}>Food App</span>
      <Cart cartItems={props.cartItems} cartCount={props.cartCount}></Cart>
    </div>
  );
};

export default Header;
