import { Link } from "react-router-dom";
import { Minus, Plus, X } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { items, subtotal, removeItem, updateQuantity } = useCart();
  return (
    <section className="cart-page page-section">
      <div className="page-title">
        <span className="kicker">YOUR SELECTION</span>
        <h1>Shopping Bag</h1>
      </div>
      {items.length ? (
        <div className="cart-layout">
          <div className="bag-list">
            {items.map((item, index) => (
              <div className="bag-row" key={index}>
                <img src={item.image} alt={item.name} />
                <div className="bag-row-info">
                  <h3>{item.name}</h3>
                  <p>
                    {item.category} · {item.size}
                  </p>
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
                <strong>${item.price * item.quantity}</strong>
                <button onClick={() => removeItem(index)}>
                  <X />
                </button>
              </div>
            ))}
          </div>
          <aside className="order-summary">
            <h2>Order Summary</h2>
            <div>
              <span>Subtotal</span>
              <strong>${subtotal}</strong>
            </div>
            <div>
              <span>Shipping</span>
              <strong>{subtotal >= 150 ? "Free" : "$12"}</strong>
            </div>
            <div className="summary-total">
              <span>Total</span>
              <strong>${subtotal >= 150 ? subtotal : subtotal + 12}</strong>
            </div>
            <Link className="lime-button" to="/checkout">
              Proceed to Checkout
            </Link>
          </aside>
        </div>
      ) : (
        <div className="empty-page">
          <h2>Your bag is empty</h2>
          <Link className="lime-button" to="/shop">
            Explore the collection
          </Link>
        </div>
      )}
    </section>
  );
}
