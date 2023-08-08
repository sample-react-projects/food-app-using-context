import React, { useContext, useState } from "react";
import Modal from "../../Utils/Modal/Modal";
import CartItems from "../CartItems/CartItems";
import { CartContext } from "../../../store/cart.state";

const CartButton: React.FC<{}> = (props) => {
  const [modalState, setModalState] = useState(false);
  const cartContext = useContext(CartContext);

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
      <span>{cartContext.cartCount}</span>
      <Modal title="Your cart" modalState={modalState} onClose={onCloseHandler}>
        <CartItems></CartItems>
      </Modal>
    </div>
  );
};

export default CartButton;
