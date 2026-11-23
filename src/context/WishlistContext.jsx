import { createContext, useContext, useEffect, useState } from "react";

const WishlistContext = createContext();
export const useWishlist = () => useContext(WishlistContext);

export function WishlistProvider({ children }) {
  const [items, setItems] = useState(() =>
    JSON.parse(localStorage.getItem("azure-wishlist") || "[]"),
  );
  useEffect(
    () => localStorage.setItem("azure-wishlist", JSON.stringify(items)),
    [items],
  );
  const toggle = (product) =>
    setItems((current) =>
      current.some((item) => item.id === product.id)
        ? current.filter((item) => item.id !== product.id)
        : [...current, product],
    );
  const has = (id) => items.some((item) => item.id === id);
  return (
    <WishlistContext.Provider value={{ items, toggle, has, remove: toggle }}>
      {children}
    </WishlistContext.Provider>
  );
}
