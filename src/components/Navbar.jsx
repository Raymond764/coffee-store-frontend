import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#faf7f2] px-4 md:px-12 py-4 flex items-center justify-between relative">
      <Link to="/" className="flex items-center gap-2">
        <img src="/logo.png" alt="Coffee O'clock" className="w-12 h-12" />
        <span className="text-2xl md:text-3xl text-[#4b2e22] font-semibold leading-tight">
          Coffee<br />O'clock
        </span>
      </Link>

      <div className="hidden md:flex items-center gap-10 text-[#4b2e22] text-2xl">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="hidden md:block">
        <Link to="/cart">
          <ShoppingCart size={36} className="text-[#4b2e22]" />
        </Link>
      </div>

      <button
        className="md:hidden text-[#4b2e22]"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={32} /> : <Menu size={32} />}
      </button>

      {open && (
        <div className="absolute top-full left-0 w-full bg-[#faf7f2] shadow-md flex flex-col items-center gap-5 py-6 text-[#4b2e22] text-xl md:hidden z-50">
          <Link onClick={() => setOpen(false)} to="/">Home</Link>
          <Link onClick={() => setOpen(false)} to="/about">About</Link>
          <Link onClick={() => setOpen(false)} to="/menu">Menu</Link>
          <Link onClick={() => setOpen(false)} to="/contact">Contact</Link>
          <Link onClick={() => setOpen(false)} to="/cart">
            <ShoppingCart size={32} />
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;