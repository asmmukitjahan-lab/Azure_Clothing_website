import { Link } from "react-router-dom";
export default function OrderSuccess() {
  const id = `AZ-${Math.floor(100000 + Math.random() * 900000)}`;
  return (
    <section className="success-page page-section">
      <div className="success-mark">✓</div>
      <span className="kicker">DEMO ORDER CONFIRMED</span>
      <h1>Thank you for your order.</h1>
      <p>
        Your demo order <strong>{id}</strong> has been created.
      </p>
      <Link className="lime-button" to="/">
        Continue shopping
      </Link>
    </section>
  );
}
