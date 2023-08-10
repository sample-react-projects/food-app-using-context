import React from "react";
import { StoreItems } from "../../models/item";

export const CartContext = React.createContext<{
  cartItems: StoreItems;
  cartCount: number;
  items: StoreItems;
  addItems: (id: string) => void;
}>({ cartItems: {}, cartCount: 0, items: {}, addItems: () => {} });
