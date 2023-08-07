import React, { useEffect, useState } from "react";
import { StoreItems } from "../models/item";
import { fetchData } from "../services/fetch.service";

const CartContext = React.createContext<{
  cartItems: StoreItems;
  cartCount: number;
  items: StoreItems;
  addItems: (id: string) => void;
}>({ cartItems: {}, cartCount: 0, items: {}, addItems: () => {} });

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
    <CartContext.Provider value={{ cartItems, cartCount, items, addItems }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
