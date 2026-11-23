import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Search, Heart, ShoppingBag, User, Menu, X } from "lucide-react";
import { useCart } from "../../context/CartContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { count, setOpen: setCartOpen } = useCart();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    ["Home", "/"],
    ["Shop", "/shop"],
    ["New Arrivals", "/new-arrivals"],
    ["Collections", "/collections"],
    ["About", "/about"],
    ["Contact", "/contact"],
  ];
  return (
    <header className={`navbar-wrap ${scrolled ? "scrolled" : ""}`}>
      <nav className="navbar" aria-label="Main navigation">
        <Link className="brand" to="/" aria-label="AZURE home">
          AZURE
        </Link>
        <div className="nav-links">
          {links.map(([label, path]) => (
            <NavLink key={path} to={path} end={path === "/"}>
              {label}
            </NavLink>
          ))}
        </div>
        <div className="nav-actions">
          <button
            aria-label="Search"
            onClick={() =>
              window.dispatchEvent(new CustomEvent("azure-search"))
            }
          >
            <Search size={18} />
          </button>
          <Link className="desktop-action" to="/wishlist" aria-label="Wishlist">
            <Heart size={18} />
          </Link>
          <button
            className="bag-button"
            aria-label={`Shopping bag with ${count} items`}
            title={`Shopping bag (${count})`}
            onClick={() => setCartOpen(true)}
          >
            <ShoppingBag size={18} />
            <span className="bag-count" aria-hidden="true">{count > 99 ? "99+" : count}</span>
          </button>
          <Link className="desktop-action" to="/wishlist" aria-label="Account">
            <User size={18} />
          </Link>
          <button
            className="menu-button"
            aria-label="Open menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="mobile-menu">
          {links.map(([label, path]) => (
            <NavLink key={path} to={path} onClick={() => setOpen(false)}>
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}
