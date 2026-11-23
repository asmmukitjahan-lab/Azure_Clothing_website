import ProductCard from "../components/shop/ProductCard";
import { useWishlist } from "../context/WishlistContext";

export default function Wishlist() {
  const { items } = useWishlist();
  return (
    <section className="page-section">
      <div className="page-title">
        <span className="kicker">YOUR EDIT</span>
        <h1>Wishlist</h1>
      </div>
      {items.length ? (
        <div className="product-grid">
          {items.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      ) : (
        <div className="empty-page">
          <h2>Your wishlist is waiting</h2>
          <p>Save the pieces you love and find them here.</p>
        </div>
      )}
    </section>
  );
}
