export type StoreItem = {
  id: string;
  title: string;
  price: number;
  quantity: number;
  background: string;
};

export type StoreItems = Record<string, StoreItem>;
