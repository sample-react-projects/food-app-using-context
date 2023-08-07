import React, { useEffect, useState } from "react";
import classes from "./Root.module.scss";
import Header from "../Header/Header";
import Items from "../Products/Products";
import { StoreItems } from "../../models/item";
import { fetchData } from "../../services/fetch.service";

const App: React.FC<{}> = () => {
  const [cartItems, setCartItems] = useState<StoreItems>({});

  const [cartCount, setCartCount] = useState<number>(0);
  const [items, setItems] = useState<StoreItems>();

  useEffect(() => {
    (async () => {
      const items = await fetchData<StoreItems>("/mocks/items.json");
      setItems(items);
    })();
  }, []);

  const addToCartHandler = (id: string) => {
    const cartQuantity = cartItems[id] ? cartItems[id].quantity : 0;
    const itemQuantity = items![id].quantity;

    if (cartQuantity < itemQuantity) {
      const newCart = { ...cartItems };
      if (!cartQuantity) {
        newCart[id] = { ...items![id], quantity: 0 };
      }
      newCart[id].quantity += 1;
      setCartItems(newCart);

      setCartCount((currentCartCount) => currentCartCount + 1);
    }
  };

  return (
    <div className={classes.app}>
      <Header cartItems={cartItems} cartCount={cartCount}></Header>
      <div className={classes.container}>
        {items && <Items items={items} addToCart={addToCartHandler}></Items>}
      </div>
    </div>
  );
};

export default App;
