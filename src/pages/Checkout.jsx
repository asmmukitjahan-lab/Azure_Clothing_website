import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Checkout() {
  const { items, subtotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [payment, setPayment] = useState("Cash on Delivery");
  const submit = (e) => {
    e.preventDefault();
    if (!e.currentTarget.checkValidity()) return;
    setLoading(true);
    setTimeout(() => {
      clearCart();
      navigate("/order-success");
    }, 900);
  };
  if (!items.length)
    return (
      <section className="page-section empty-page">
        <h1>Nothing to checkout</h1>
        <button className="lime-button" onClick={() => navigate("/shop")}>
          Return to shop
        </button>
      </section>
    );
  return (
    <section className="checkout-page page-section">
      <div className="page-title">
        <span className="kicker">SECURE CHECKOUT</span>
        <h1>Complete your order</h1>
      </div>
      <form className="checkout-layout" onSubmit={submit}>
        <div className="checkout-form">
          <h2>Customer information</h2>
          <div className="form-grid">
            <label>
              Email
              <input required type="email" placeholder="you@example.com" />
            </label>
            <label>
              Phone
              <input required type="tel" placeholder="+880..." />
            </label>
            <label className="full">
              Shipping address
              <input required placeholder="Street address" />
            </label>
            <label>
              City
              <input required />
            </label>
            <label>
              Postal code
              <input required />
            </label>
            <label className="full">
              Country
              <select required defaultValue="">
                <option value="" disabled>
                  Select country
                </option>
                <option>Bangladesh</option>
                <option>United States</option>
                <option>United Kingdom</option>
                <option>United Arab Emirates</option>
              </select>
            </label>
          </div>
          <h2>Delivery</h2>
          <label className="radio-card">
            <input type="radio" name="delivery" defaultChecked />
            <span>
              <strong>Standard delivery</strong>
              <small>3–5 business days</small>
            </span>
            <b>{subtotal >= 150 ? "Free" : "$12"}</b>
          </label>
          <h2>Payment</h2>
          <div className="payment-options">
            {["Cash on Delivery", "Card", "Mobile payment"].map((p) => (
              <label key={p} className={payment === p ? "active" : ""}>
                <input
                  type="radio"
                  name="payment"
                  checked={payment === p}
                  onChange={() => setPayment(p)}
                />
                <span>{p}</span>
              </label>
            ))}
          </div>
          {payment === "Card" && (
            <div className="form-grid card-fields">
              <label>
                Card number
                <input
                  required
                  inputMode="numeric"
                  placeholder="4242 4242 4242 4242"
                />
              </label>
              <label>
                Expiry
                <input required placeholder="MM / YY" />
              </label>
            </div>
          )}
          <button className="lime-button place-order" disabled={loading}>
            {loading ? "Processing..." : "Place demo order"}
          </button>
          <p className="demo-note">
            Demo checkout only. No real payment will be processed.
          </p>
        </div>
        <aside className="checkout-summary">
          <h2>Order summary</h2>
          {items.map((item) => (
            <div className="mini-item" key={item.id}>
              <img src={item.image} alt="" />
              <div>
                <strong>{item.name}</strong>
                <span>
                  {item.size} · Qty {item.quantity}
                </span>
              </div>
              <b>${item.price * item.quantity}</b>
            </div>
          ))}
          <div className="summary-total">
            <span>Total</span>
            <strong>${subtotal >= 150 ? subtotal : subtotal + 12}</strong>
          </div>
        </aside>
      </form>
    </section>
  );
}
