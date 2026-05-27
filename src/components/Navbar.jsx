import { Link } from "react-router-dom";
import logo from "../assets/coffee-cup.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";


function Navbar({ onNavLogout, ontoggle }) {
  return (
    <nav className=" flex items-center justify-between h-16 px-6 text-xl">
      <div className="flex items-center gap-3">
        <img src={logo} alt="not found" className="h-10 w-10" />
        <h1>Coffee O'clock</h1>
      </div>

      <div className="flex items-center">
        <Link className="px-4" to="/">
          Home
        </Link>
        <Link className="px-4" to="/about">
          About
        </Link>
        <Link className="px-4" to="/menu">
          Menu
        </Link>
        <Link className="px-4" to="/contact">
          Contact
        </Link>
       <ShoppingCartIcon fontSize="large" />

      </div>
    </nav>
  );
}

export default Navbar;
