import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Grid2X2, List, Search, SlidersHorizontal } from "lucide-react";
import { products } from "../data/products";
import ProductCard from "../components/shop/ProductCard";

export default function Shop({ initialFilter }) {
  const [params] = useSearchParams();
  const [category, setCategory] = useState(params.get("category") || "All");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("Featured");
  const [size, setSize] = useState("All");
  const [maxPrice, setMaxPrice] = useState(150);
  const [view, setView] = useState("grid");
  useEffect(() => {
    if (initialFilter === "New") setCategory("New");
    else setCategory(params.get("category") || "All");
  }, [initialFilter, params]);
  const filtered = useMemo(() => {
    let result = products.filter(
      (p) =>
        (category === "All" || category === "New"
          ? initialFilter !== "New" || p.badge === "New"
          : p.category === category) &&
        p.price <= maxPrice &&
        `${p.name} ${p.category}`.toLowerCase().includes(search.toLowerCase()),
    );
    if (size !== "All") result = result.filter((p) => p.sizes.includes(size));
    if (sort === "Price Low to High")
      result = [...result].sort((a, b) => a.price - b.price);
    if (sort === "Price High to Low")
      result = [...result].sort((a, b) => b.price - a.price);
    if (sort === "Newest")
      result = [...result].sort(
        (a, b) => (b.badge === "New") - (a.badge === "New"),
      );
    return result;
  }, [category, search, sort, size, maxPrice, initialFilter]);

  return (
    <section className="shop-page page-section">
      <div className="page-title">
        <span className="kicker">AZURE / SHOP</span>
        <h1>{initialFilter === "New" ? "New Arrivals" : "The Collection"}</h1>
      </div>
      <div className="shop-toolbar">
        <label className="shop-search">
          <Search size={17} aria-hidden="true" />
          <input
            aria-label="Search the collection"
            placeholder="Search the collection"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <button type="button" onClick={() => setSearch("")} aria-label="Clear search">×</button>
          )}
        </label>
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option>Featured</option>
          <option>Newest</option>
          <option>Price Low to High</option>
          <option>Price High to Low</option>
          <option>Best Selling</option>
        </select>
        <div className="view-toggle">
          <button
            className={view === "grid" ? "active" : ""}
            onClick={() => setView("grid")}
          >
            <Grid2X2 />
          </button>
          <button
            className={view === "list" ? "active" : ""}
            onClick={() => setView("list")}
          >
            <List />
          </button>
        </div>
      </div>
      <div className="shop-layout">
        <aside className="filters">
          <h3>
            <SlidersHorizontal /> Filters
          </h3>
          <div>
            <h4>Category</h4>
            {[
              "All",
              "Hoodies",
              "T-Shirts",
              "Jackets",
              "Bottoms",
              "Footwear",
              "Accessories",
            ].map((c) => (
              <button
                className={category === c ? "active" : ""}
                key={c}
                onClick={() => setCategory(c)}
              >
                {c}
              </button>
            ))}
          </div>
          <div>
            <h4>Size</h4>
            <div className="size-filter">
              {["All", "S", "M", "L", "XL", "32", "42"].map((s) => (
                <button
                  className={size === s ? "active" : ""}
                  key={s}
                  onClick={() => setSize(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h4>Price · up to ${maxPrice}</h4>
            <input
              type="range"
              min="40"
              max="150"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
            />
          </div>
        </aside>
        <div className={`product-grid ${view}`}>
          <p className="result-count">{filtered.length} pieces</p>
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
