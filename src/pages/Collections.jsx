import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { categories } from "../data/products";

export default function Collections() {
  return (
    <section className="collections-page">
      <motion.div
        className="page-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <motion.img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1800&q=92"
          alt="AZURE seasonal collection"
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="page-hero-shade" />
        <motion.div
          className="page-hero-copy"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="kicker">AZURE / 026</span>
          <h1>
            One wardrobe.
            <br />
            <em>Every direction.</em>
          </h1>
        </motion.div>
        <motion.div
          className="page-hero-index"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <span>2026</span>
          <i />
          <span>THE DAILY EDIT</span>
        </motion.div>
      </motion.div>
      <div className="page-section">
        <div className="collection-list">
          {categories.map((c, i) => (
            <article key={c.name} className={i % 2 ? "reverse" : ""}>
              <img src={c.image} alt={c.name} />
              <div>
                <span>0{i + 1} / EDIT</span>
                <h2>{c.name}</h2>
                <p>
                  Purposeful forms and premium textures for the way you live
                  now.
                </p>
                <Link className="lime-button" to={`/shop?category=${c.name}`}>
                  Shop {c.name} <ArrowUpRight />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
