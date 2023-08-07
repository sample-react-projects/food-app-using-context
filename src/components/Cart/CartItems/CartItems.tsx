import { StoreItems } from "../../../models/item";
import classes from "./CartItems.module.scss";

const CartItems: React.FC<{ cartItems: StoreItems }> = (props) => {
  const cartItems = Object.values(props.cartItems);

  const total = cartItems.reduce(
    (acc, val) => acc + val.price * val.quantity,
    0,
  );

  const getItemsTemplate = () => {
    const items = cartItems.map((cartItem) => (
      <div className="cart-item" key={cartItem.id}>
        <span className="cart-item__image"></span>
        <span className="cart-item__title">{cartItem.title}</span>
        <span className="cart-item__quantity">{cartItem.quantity}</span>
        <span className="cart-item__total">
          ${cartItem.price * cartItem.quantity}
        </span>
      </div>
    ));
    items.push(
      <div className="cart-total">
        <span className="cart-total__label">Total</span>
        <span className="cart-total__value">{total}</span>
      </div>,
    );

    return items;
  };

  return (
    <div className={classes.cart}>
      {cartItems.length ? (
        getItemsTemplate()
      ) : (
        <span className="cart__empty">Please add items in your cart</span>
      )}
    </div>
  );
};

export default CartItems;
