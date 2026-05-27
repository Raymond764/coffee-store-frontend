import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#774b31] text-white px-4 md:px-10 py-4 flex items-center justify-between relative">

      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <img
          src="/logo.png"
          alt="Coffee O'clock"
          className="w-12 h-12"
        />

        <div className="leading-none">
          <h1 className="text-2xl font-semibold">Coffee</h1>
          <h1 className="text-2xl font-semibold">O'clock</h1>
        </div>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-10 text-2xl">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/contact">Contact</Link>

        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={32} /> : <Menu size={32} />}
      </button>

      {/* Mobile Dropdown */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-[#774b31] flex flex-col items-center gap-6 py-6 text-xl md:hidden z-50 shadow-lg">
          <Link onClick={() => setOpen(false)} to="/">
            Home
          </Link>

          <Link onClick={() => setOpen(false)} to="/about">
            About
          </Link>

          <Link onClick={() => setOpen(false)} to="/menu">
            Menu
          </Link>

          <Link onClick={() => setOpen(false)} to="/contact">
            Contact
          </Link>

          <Link onClick={() => setOpen(false)} to="/cart">
            <ShoppingCart size={30} />
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;