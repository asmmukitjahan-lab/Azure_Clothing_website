import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Play,
  Truck,
  RotateCcw,
  Gem,
  ArrowRight,
} from "lucide-react";
import { categories, products } from "../data/products";
import ProductCard from "../components/shop/ProductCard";

export default function Home() {
  return (
    <div className="home">
      <section className="hero-shell">
        <div className="hero-glow" />
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="eyebrow">NEW SEASON COLLECTION</span>
          <h1>
            Elevate Your
            <br />
            <em>Everyday Style.</em>
          </h1>
          <p>
            Modern fits. Premium fabrics.
            <br />
            Made to move with you.
          </p>
          <div className="hero-actions">
            <Link className="lime-button" to="/shop">
              SHOP NOW <ArrowUpRight />
            </Link>
            <Link className="watch-button" to="/collections">
              <span>
                <Play fill="currentColor" />
              </span>{" "}
              WATCH LOOKBOOK
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="hero-model"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="model-orbit" />
          <img
            src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1400&q=92"
            alt="Model in an editorial AZURE streetwear look"
          />
        </motion.div>
        <div className="hero-index">
          <span>01</span>
          <i />
          <span>04</span>
        </div>
      </section>

      <section className="trust-bar">
        <div>
          <Gem />
          <span>
            <strong>Premium Quality</strong>
            <small>Carefully Selected Fabrics</small>
          </span>
        </div>
        <div>
          <RotateCcw />
          <span>
            <strong>Easy Returns</strong>
            <small>7 Days Return Policy</small>
          </span>
        </div>
        <div>
          <Truck />
          <span>
            <strong>Free Shipping</strong>
            <small>On Orders Over $150</small>
          </span>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="kicker">THE EDIT</span>
            <h2>Shop by Category</h2>
          </div>
          <p>Find your style. Own your moment.</p>
        </div>
        <div className="category-grid">
          {categories.map((category, i) => (
            <motion.article
              className="category-card"
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
            >
              <Link to={`/shop?category=${category.name}`}>
                <img src={category.image} alt={category.name} />
                <div>
                  <h3>{category.name}</h3>
                  <span>
                    Shop Now <ArrowUpRight />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="kicker">JUST LANDED</span>
            <h2>Fresh Fits. New Energy.</h2>
          </div>
          <Link className="view-all" to="/new-arrivals">
            View all <ArrowRight />
          </Link>
        </div>
        <p className="section-subtitle">
          Discover the latest pieces designed for your everyday style.
        </p>
        <div className="product-grid">
          {products.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <motion.section
        className="collection-banner"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.img
          src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1800&q=92"
          alt="AZURE collection editorial"
          initial={{ scale: 1.08 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="banner-grain" />
        <motion.div
          className="collection-copy"
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="kicker">AZURE / 026 — DAILY FORMS</span>
          <h2>
            Find Your Own
            <br />
            <em>Kind of Everyday.</em>
          </h2>
          <p>Style that feels good. Looks better. Moves with you.</p>
          <Link className="lime-button" to="/collections">
            EXPLORE THE COLLECTION <ArrowUpRight />
          </Link>
        </motion.div>
        <div className="banner-meta" aria-hidden="true">
          <span>SS / 26</span>
          <i />
          <span>01 — 04</span>
        </div>
      </motion.section>
    </div>
  );
}
