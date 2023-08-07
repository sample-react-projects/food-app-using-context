import React from "react";
import classes from "./Root.module.scss";
import Header from "../Header/Header";
import Products from "../Products/Products";

const App: React.FC<{}> = () => {
  return (
    <div className={classes.app}>
      <Header></Header>
      <div className={classes.container}>
        <Products></Products>
      </div>
    </div>
  );
};

export default App;
