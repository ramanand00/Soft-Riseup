import { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/20 backdrop-blur-md shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo on the Left */}
        <Link to="/" className="text-blue-600 text-2xl font-bold">
          Soft-Riseup
        </Link>

        {/* Search Bar (Center Aligned on Desktop) */}
        <div className="hidden md:flex flex-grow items-center justify-center relative">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-1/2"
          />
          <FaSearch className="absolute right-3 text-gray-500" />
        </div>

        {/* Menu Items (Right Side on Desktop) */}
        <div className="hidden md:flex items-center space-x-6 text-lg">
          {["Home", "About", "Services", "Blog", "Contact", "Login", "Signup"].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link to={`/${item.toLowerCase()}`} className="text-gray-700 hover:text-blue-600 transition">
                {item}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700 text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Animation */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: menuOpen ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="fixed top-0 right-0 h-full w-3/4 bg-blue-700 text-white p-6 md:hidden shadow-lg"
      >
        {["Home", "About", "Services", "Blog", "Contact", "Login", "Signup"].map((item, index) => (
          <Link
            key={index}
            to={`/${item.toLowerCase()}`}
            className="block p-3 hover:bg-blue-500 rounded text-lg"
            onClick={() => setMenuOpen(false)}
          >
            {item}
          </Link>
        ))}
      </motion.div>
    </nav>
  );
};

export default Navbar;
