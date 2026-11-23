import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "../../data/products";

export default function SearchModal() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  useEffect(() => {
    const show = () => setOpen(true);
    window.addEventListener("azure-search", show);
    const key = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", key);
    return () => {
      window.removeEventListener("azure-search", show);
      window.removeEventListener("keydown", key);
    };
  }, []);
  const results = products.filter((p) =>
    `${p.name} ${p.category}`.toLowerCase().includes(query.toLowerCase()),
  );
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="search-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            className="overlay"
            onClick={() => setOpen(false)}
            aria-label="Close search"
          />
          <motion.div
            className="search-panel"
            initial={{ y: -30, scale: 0.98 }}
            animate={{ y: 0, scale: 1 }}
          >
            <div className="search-head">
              <Search />
              <input
                autoFocus
                placeholder="Search products or categories"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button onClick={() => setOpen(false)}>
                <X />
              </button>
            </div>
            <div className="search-results">
              {query && results.length === 0 ? (
                <p className="no-results">No pieces match “{query}”</p>
              ) : (
                results.slice(0, 5).map((p) => (
                  <Link
                    key={p.id}
                    to={`/product/${p.id}`}
                    onClick={() => setOpen(false)}
                  >
                    <img src={p.image} alt="" />
                    <div>
                      <strong>{p.name}</strong>
                      <span>{p.category}</span>
                    </div>
                    <b>${p.price}</b>
                  </Link>
                ))
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
