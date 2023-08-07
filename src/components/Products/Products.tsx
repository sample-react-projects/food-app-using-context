import React, { useContext } from "react";
import Product from "../Product/Product";
import { CartContext } from "../../store/cart.state";

const Products: React.FC<{}> = () => {
  const cartContext = useContext(CartContext);
  const items = Object.values(cartContext.items);

  return (
    <div className="items">
      {items?.map((item) => <Product key={item.id} item={item}></Product>)}
    </div>
  );
};

export default Products;
