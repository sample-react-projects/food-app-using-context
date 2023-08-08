import React from "react";
import classes from "../Modal/Modal.module.scss";

const Modal: React.FC<{
  children: React.ReactNode;
  modalState: boolean;
  title: string;
  onClose: (event: React.MouseEvent) => void;
}> = (props) => {
  return props.modalState ? (
    <div className={classes.modal__mask} onClick={props.onClose}>
      <div className={classes.modal__content}>
        <div className={classes.modal__title}>
          <span className={classes["modal__title-text"]}>{props.title}</span>
          <span className={classes.modal__close} onClick={props.onClose}>
            X
          </span>
        </div>
        <div className={classes.modal__component}>{props.children}</div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Modal;
