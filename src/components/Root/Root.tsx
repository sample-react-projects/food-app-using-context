import React from "react";
import classes from "./Root.module.scss";
import Header from "../Header/Header";
import Products from "../Products/Products";
import CartContextProvider from "../../store/cart/CartContextProider";

const App: React.FC<{}> = () => {
  return (
    <div className={classes.app}>
      <CartContextProvider>
        <Header></Header>
        <div className={classes.container}>
          <Products></Products>
        </div>
      </CartContextProvider>
    </div>
  );
};

export default App;
