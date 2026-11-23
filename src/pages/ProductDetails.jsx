import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Heart,
  Minus,
  Plus,
  Truck,
  RotateCcw,
  ShieldCheck,
} from "lucide-react";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import ProductCard from "../components/shop/ProductCard";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id)) || products[0];
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState(product.colors[0]);
  const [error, setError] = useState("");
  const { addItem } = useCart();
  const { toggle, has } = useWishlist();
  const add = () => {
    if (!size) {
      setError("Please select a size");
      return;
    }
    setError("");
    for (let i = 0; i < quantity; i++) addItem(product, size, color);
  };
  return (
    <section className="details-page page-section">
      <div className="detail-layout">
        <div className="detail-gallery">
          <div className="main-detail">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="thumbs">
            <img src={product.image} alt="" />
            <img src={product.imageAlt} alt="" />
          </div>
        </div>
        <div className="detail-info">
          <Link className="breadcrumb" to="/shop">
            Shop / {product.category}
          </Link>
          <h1>{product.name}</h1>
          <div className="detail-price">
            <strong>${product.price}</strong>
            {product.oldPrice && <del>${product.oldPrice}</del>}
          </div>
          <div className="rating">
            ★★★★★ <span>4.9 · 128 reviews</span>
          </div>
          <p className="detail-desc">
            A considered everyday essential cut in premium-weight fabric with a
            clean, modern silhouette.
          </p>
          <div className="selector">
            <div>
              <h3>Color</h3>
              <span>{color}</span>
            </div>
            <div className="color-options">
              {product.colors.map((c) => (
                <button
                  key={c}
                  className={color === c ? "active" : ""}
                  style={{ background: c }}
                  onClick={() => setColor(c)}
                  aria-label={`Select ${c}`}
                />
              ))}
            </div>
          </div>
          <div className="selector">
            <div>
              <h3>Size</h3>
              <button className="size-guide">Size guide</button>
            </div>
            <div className="size-options">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  className={size === s ? "active" : ""}
                  onClick={() => {
                    setSize(s);
                    setError("");
                  }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
          {error && <p className="form-error">{error}</p>}
          <div className="detail-actions">
            <div className="qty large">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                <Minus />
              </button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>
                <Plus />
              </button>
            </div>
            <button className="lime-button" onClick={add}>
              ADD TO BAG
            </button>
            <button
              className={`detail-wish ${has(product.id) ? "active" : ""}`}
              onClick={() => toggle(product)}
            >
              <Heart fill={has(product.id) ? "currentColor" : "none"} />
            </button>
          </div>
          <button className="buy-button" onClick={add}>
            BUY NOW
          </button>
          <div className="detail-perks">
            <span>
              <Truck /> Free shipping over $150
            </span>
            <span>
              <RotateCcw /> 7-day easy returns
            </span>
            <span>
              <ShieldCheck /> Secure checkout
            </span>
          </div>
        </div>
      </div>
      <div className="accordion">
        <details open>
          <summary>Product details</summary>
          <p>
            Relaxed premium fit. Designed for everyday movement and long-lasting
            wear.
          </p>
        </details>
        <details>
          <summary>Fabric & care</summary>
          <p>Quality cotton blend. Machine wash cold and hang dry.</p>
        </details>
        <details>
          <summary>Shipping & returns</summary>
          <p>
            Free standard delivery over $150. Returns accepted within seven
            days.
          </p>
        </details>
      </div>
      <div className="section related">
        <div className="section-heading">
          <h2>You may also like</h2>
        </div>
        <div className="product-grid">
          {products
            .filter((p) => p.id !== product.id)
            .slice(0, 4)
            .map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
        </div>
      </div>
    </section>
  );
}
