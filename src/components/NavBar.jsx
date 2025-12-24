import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import logo from "../assets/logo.png";

function NavBar() {
  return (
    <header className="bg-purple-500 shadow-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 text-white">
        
        {/* Logo*/}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo de la tienda"
            className="h-24 w-auto object-contain transition-transform duration-300 ease-in-out hover:scale-110"
          />
          <span className="text-xl font-semibold tracking-wide">
            Mi Tienda
          </span>
        </Link>

        {/* Links de navegación */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          <li>
            <Link to="/" className="hover:text-purple-200 transition-colors">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/category/smartphones" className="hover:text-purple-200 transition-colors">
              Smartphones
            </Link>
          </li>
          <li>
            <Link to="/category/laptops" className="hover:text-purple-200 transition-colors">
              Laptops
            </Link>
          </li>
        </ul>

        {/* Carrito */}
        <CartWidget />
      </nav>
    </header>
  );
}

export default NavBar;