import React from "react";
import { StoreItem } from "../../models/item";
import classes from "./Product.module.scss";

const Item: React.FC<{ item: StoreItem; addToCart: (id: string) => void }> = (
  props,
) => {
  return (
    <div className={classes.item}>
      <span
        className={classes.item__image}
        style={{ backgroundColor: props.item.background }}
      ></span>
      <span className={classes.item__title}>{props.item.title}</span>
      <span className={classes.item__price}>₹{props.item.price}</span>
      <button
        className={classes.item__add}
        onClick={() => {
          props.addToCart(props.item.id);
        }}
      >
        Add
      </button>
    </div>
  );
};

export default Item;
