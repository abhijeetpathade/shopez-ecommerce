import { useCart } from "../contexts/CartContext";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";
import CartDrawer from "../components/CartDrawer";

function Navbar() {
  const { cart } = useCart();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const [cartOpen, setCartOpen] = useState(false);

  const handleSearch = () => {
    if (search.trim() !== "") {
      navigate(`/products?search=${search}`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <nav
        className="navbar"
        style={{
          width: "100%",
          boxSizing: "border-box"
        }}
    >
      {/* Logo */}
      <NavLink to="/" className="logo">
        ShopEZ
      </NavLink>

      {/* Search Bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
          className="search-input"
        />

        <button onClick={handleSearch} className="search-btn">
          🔍
        </button>
      </div>

      {/* Navigation */}
      <div className="nav-links">

        <NavLink to="/" className="nav-link">
          Home
        </NavLink>

        <NavLink to="/products" className="nav-link">
          Products
        </NavLink>

        <button
            className="nav-link cart-link"
            onClick={() => setCartOpen(true)}
          >
            🛒 Cart
            <span className="cart-badge">{cart.length}</span>
          </button>
        <NavLink to="/auth" className="nav-link">
          Login
        </NavLink>

        <NavLink to="/contact" className="nav-link">
          Contact
        </NavLink>

        

      </div>
      <CartDrawer isOpen={cartOpen} closeCart={() => setCartOpen(false)} />
    </nav>
    
  );
 
}

export default Navbar;