import React from "react";
import { StoreItems } from "../../models/item";
import Item from "../Product/Product";

const Items: React.FC<{
  items: StoreItems;

  addToCart: (id: string) => void;
}> = (props) => {
  const items = Object.values(props.items || {});

  return (
    <div className="items">
      {items?.map((item) => (
        <Item key={item.id} item={item} addToCart={props.addToCart}></Item>
      ))}
    </div>
  );
};

export default Items;
