import React, { useState } from "react";
import { StoreItems } from "../../../models/item";
import Modal from "../../Utils/Modal/Modal";
import CartItems from "../CartItems/CartItems";

const CartButton: React.FC<{ cartItems: StoreItems; cartCount: number }> = (
  props,
) => {
  const [modalState, setModalState] = useState(false);

  const onOpenHandler = () => {
    setModalState(() => true);
  };

  const onCloseHandler = (event: React.MouseEvent) => {
    event.stopPropagation();
    setModalState(() => false);
  };

  return (
    <div className="cart" onClick={onOpenHandler}>
      <span>Cart</span>
      <span>{props.cartCount}</span>
      <Modal title="Your cart" modalState={modalState} onClose={onCloseHandler}>
        <CartItems cartItems={props.cartItems}></CartItems>
      </Modal>
    </div>
  );
};

export default CartButton;
