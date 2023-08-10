import React, { useContext } from "react";
import Product from "../Product/Product";
import { CartContext } from "../../store/cart/cart.context";
import classes from "./Products.module.scss";

const Products: React.FC<{}> = () => {
  const cartContext = useContext(CartContext);
  const items = Object.values(cartContext.items);

  return (
    <ul className={classes.items}>
      {items?.map((item) => <Product key={item.id} item={item}></Product>)}
    </ul>
  );
};

export default Products;
