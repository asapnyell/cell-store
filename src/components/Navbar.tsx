import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

   // Fecha o menu quando clicar fora
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-600 text-white shadow-md z-50" >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-2">
        
        {/* Logo */}
        <Link to="/" className="text-lg font-semibold">
          Minha Loja
        </Link>

        {/* Links Desktop */}
        <div className="hidden md:flex gap-6 text-sm">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/Produto" className="hover:underline">Produtos</Link>
        </div>

        {/* Botão Mobile */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)} 
          className="md:hidden focus:outline-none  cursor-pointer z-50 relative"
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {/* Overlay para clicar fora e fechar */}
      {menuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-40 md:hidden z-40"
          onClick={closeMenu}
        />
      )}

       {/* Menu Mobile com slide/fade */}
      <div
        className={`
          md:hidden bg-blue-700 flex flex-col gap-4 p-4 absolute top-[48px] left-0 w-full transition-transform duration-300 ease-in-out z-50
          ${menuOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}
        `}
      >
        <Link 
          to="/" 
          className="hover:underline" 
          onClick={closeMenu}
        >
          Home
        </Link>
        <Link 
          to="/produto" 
          className="hover:underline" 
          onClick={closeMenu}
        >
          Produtos
        </Link>
      </div>
    </nav>
  );
}