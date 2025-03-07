import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaBars } from "react-icons/fa";
import "./Navbar.css"; // Import the CSS file

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="logo-section">
        <img
          src="/path-to-your-logo.png" // Replace this with the correct path to your logo
          alt="Logo"
        />
        <div className="logo">
          <Link to="/">Soft-Riseup</Link>
        </div>
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <FaSearch className="search-icon" />
        <input type="text" placeholder="Search..." />
      </div>

      {/* Navbar Menu */}
      <div className={`menu ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
        <Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
        {/* Replace Sign Up with Settings */}
        <Link to="/settings" onClick={() => setMenuOpen(false)}>Settings</Link>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="menu-icon" onClick={toggleMenu}>
        <FaBars />
      </div>
    </nav>
  );
};

export default Navbar;
