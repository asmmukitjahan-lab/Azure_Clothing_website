import { useState } from "react";
import { Link } from "react-router-dom";
import { Camera, MessageCircle, Play, ArrowRight } from "lucide-react";

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand-column">
          <Link className="footer-brand" to="/">
            AZURE
          </Link>
          <p>Contemporary essentials.<br />Made for a life in motion.</p>
          <div className="socials">
            <a href="#" aria-label="Instagram"><Camera /></a>
            <a href="#" aria-label="Community"><MessageCircle /></a>
            <a href="#" aria-label="Video"><Play /></a>
          </div>
        </div>
        <div className="footer-links">
          <h4>Shop</h4>
          <Link to="/shop">All Products</Link>
          <Link to="/new-arrivals">New Arrivals</Link>
          <Link to="/collections">Collections</Link>
        </div>
        <div className="footer-links">
          <h4>About</h4>
          <Link to="/about">Our Story</Link>
          <Link to="/contact">Contact</Link>
          <a href="#quality">Quality & Craft</a>
        </div>
        <div className="footer-news">
          <h4>Stay in the know</h4>
          <p>New drops, private releases and stories from AZURE.</p>
          <form className="footer-email-form" onSubmit={(e) => { e.preventDefault(); setSubscribed(true); }}>
            <input
              aria-label="Email address"
              type="email"
              required
              placeholder="Email address"
            />
            <button aria-label="Subscribe"><ArrowRight /></button>
          </form>
          {subscribed && <small className="footer-subscribe-success">You're on the list.</small>}
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 AZURE. All rights reserved.</span>
        <span>Privacy · Terms · Shipping</span>
      </div>
    </footer>
  );
}
