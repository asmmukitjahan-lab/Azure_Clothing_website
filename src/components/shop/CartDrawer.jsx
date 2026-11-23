import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, X, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

export default function CartDrawer() {
  const { items, open, setOpen, subtotal, removeItem, updateQuantity } =
    useCart();
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.button
            className="overlay"
            aria-label="Close cart"
            onClick={() => setOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.aside
            className="cart-drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 260 }}
          >
            <div className="drawer-head">
              <h2>
                Your Bag <span>{items.length}</span>
              </h2>
              <button onClick={() => setOpen(false)} aria-label="Close">
                <X />
              </button>
            </div>
            {items.length === 0 ? (
              <div className="empty">
                <ShoppingBag />
                <h3>Your bag is empty</h3>
                <p>Discover your next everyday essential.</p>
                <Link
                  onClick={() => setOpen(false)}
                  className="lime-button"
                  to="/shop"
                >
                  Explore shop
                </Link>
              </div>
            ) : (
              <>
                <div className="cart-items">
                  {items.map((item, index) => (
                    <div
                      className="cart-item"
                      key={`${item.id}-${item.size}-${item.color}`}
                    >
                      <img src={item.image} alt={item.name} />
                      <div>
                        <h3>{item.name}</h3>
                        <p>
                          {item.size} ·{" "}
                          <span style={{ color: item.color }}>●</span>
                        </p>
                        <strong>${item.price}</strong>
                        <div className="qty">
                          <button onClick={() => updateQuantity(index, -1)}>
                            <Minus />
                          </button>
                          <span>{item.quantity}</span>
                          <button onClick={() => updateQuantity(index, 1)}>
                            <Plus />
                          </button>
                        </div>
                      </div>
                      <button
                        className="remove"
                        onClick={() => removeItem(index)}
                      >
                        <X />
                      </button>
                    </div>
                  ))}
                </div>
                <div className="cart-summary">
                  <div>
                    <span>Subtotal</span>
                    <strong>${subtotal}</strong>
                  </div>
                  <p>Shipping and taxes calculated at checkout.</p>
                  <Link
                    onClick={() => setOpen(false)}
                    className="lime-button"
                    to="/checkout"
                  >
                    Checkout
                  </Link>
                  <Link
                    onClick={() => setOpen(false)}
                    className="text-button"
                    to="/cart"
                  >
                    View bag
                  </Link>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
