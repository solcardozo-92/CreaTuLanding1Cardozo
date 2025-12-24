import CartWidget from "./CartWidget";
import logo from "../assets/logo.png";

function NavBar() {
  return (
    <header className="bg-purple-500">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 text-white">
        
        {/* Logo + nombre */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo de la tienda"
            className="h-24 w-auto object-contain transition-transform hover:scale-105"
          />
          <span className="text-xl font-semibold tracking-wide">
            Mi Tienda
          </span>
        </div>

        {/* Links */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          <li className="cursor-pointer hover:text-purple-200">Inicio</li>
          <li className="cursor-pointer hover:text-purple-200">Productos</li>
          <li className="cursor-pointer hover:text-purple-200">Contacto</li>
        </ul>

        {/* Carrito */}
        <CartWidget />
      </nav>
    </header>
  );
}

export default NavBar;
