import React, { useEffect, useState } from "react";
import { StoreItems } from "../../models/item";
import { fetchData } from "../../services/fetch.service";
import { CartContext } from "./cart.context";

const CartContextProvider: React.FC<{ children: React.ReactNode }> = (
  props,
) => {
  const [cartItems, setCartItems] = useState<StoreItems>({});
  const [cartCount, setCartCount] = useState<number>(0);
  const [items, setItems] = useState<StoreItems>({});

  useEffect(() => {
    (async () => {
      const items = await fetchData<StoreItems>("/mocks/items.json");
      setItems(items);
    })();
  }, []);

  const addItems = (id: string) => {
    const newCart = { ...cartItems };
    if (!newCart[id]) {
      newCart[id] = { ...items![id], quantity: 0 };
    }
    newCart[id].quantity += 1;
    setCartItems(newCart);

    setCartCount((currentCartCount) => currentCartCount + 1);
  };

  return (
    <CartContext.Provider value={{ cartItems, cartCount, items, addItems }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
