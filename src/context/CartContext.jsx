import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [items, setItems] = useState(() =>
    JSON.parse(localStorage.getItem("azure-cart") || "[]"),
  );
  const [open, setOpen] = useState(false);

  useEffect(
    () => localStorage.setItem("azure-cart", JSON.stringify(items)),
    [items],
  );

  const addItem = (product, size = "M", color = product.colors?.[0]) => {
    setItems((current) => {
      const found = current.find(
        (item) =>
          item.id === product.id && item.size === size && item.color === color,
      );
      if (found)
        return current.map((item) =>
          item === found ? { ...item, quantity: item.quantity + 1 } : item,
        );
      return [...current, { ...product, size, color, quantity: 1 }];
    });
    setOpen(true);
  };

  const removeItem = (index) =>
    setItems((current) => current.filter((_, i) => i !== index));
  const updateQuantity = (index, delta) =>
    setItems((current) =>
      current.map((item, i) =>
        i === index
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item,
      ),
    );
  const clearCart = () => setItems([]);
  const count = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items],
  );
  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items],
  );

  return (
    <CartContext.Provider
      value={{
        items,
        count,
        subtotal,
        open,
        setOpen,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
