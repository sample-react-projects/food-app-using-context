import React from "react";
import Cart from "../Cart/CartButton/CartButton";
import classes from "./Header.module.scss";

const Header: React.FC<{}> = (props) => {
  return (
    <div className={classes.header__container}>
      <span className={classes.header__logo}>Food App</span>
      <Cart></Cart>
    </div>
  );
};

export default Header;
