import React, { useContext } from "react";
import { StoreItem } from "../../models/item";
import classes from "./Product.module.scss";
import { CartContext } from "../../store/cart.state";

const Item: React.FC<{ item: StoreItem }> = (props) => {
  const cartContext = useContext(CartContext);

  return (
    <li className={classes.item}>
      <span
        className={classes.item__image}
        style={{ backgroundColor: props.item.background }}
      ></span>
      <span className={classes.item__title}>{props.item.title}</span>
      <span className={classes.item__price}>₹{props.item.price}</span>
      <button
        className={classes.item__add}
        onClick={() => {
          cartContext.addItems(props.item.id);
        }}
      >
        Add to Cart
      </button>
    </li>
  );
};

export default Item;
