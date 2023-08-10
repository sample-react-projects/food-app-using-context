import React, { useContext, useState } from "react";
import { StoreItem } from "../../models/item";
import classes from "./Product.module.scss";
import { CartContext } from "../../store/cart/cart.context";

const Item: React.FC<{ item: StoreItem }> = (props) => {
  const cartContext = useContext(CartContext);
  const [isOutOfStock, setIsOutOfStock] = useState(false);

  const addToCartHandler = (id: string) => {
    let itemQuantity = cartContext.items[id].quantity;
    let cartItemQuantity = cartContext.cartItems[id]?.quantity || 0;

    if (itemQuantity > cartItemQuantity) {
      cartContext.addItems(id);
      if (itemQuantity === cartItemQuantity + 1) {
        setIsOutOfStock(true);
      }
    }
  };

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
        onClick={addToCartHandler.bind(null, props.item.id)}
        disabled={isOutOfStock}
      >
        {isOutOfStock ? "Out of stock" : "Add to Cart"}
      </button>
    </li>
  );
};

export default Item;
