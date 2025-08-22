import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

   // Fecha o menu quando clicar fora
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-600 text-white shadow-md z-50" >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-7 py-5">
        
        {/* Logo */}
        <Link to="/" className="text-lg font-semibold">
          JN Importes
        </Link>

        {/* Links Desktop */}
        <div className="hidden md:flex gap-6 text-sm">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/Produto" className="hover:underline">Produtos</Link>
          <Link to="/Contato" className="hover:underline">Contato</Link>
        </div>

        {/* Botão Mobile */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)} 
          className="md:hidden focus:outline-none  cursor-pointer z-50 relative"
        >
          {menuOpen ? <X size={40} /> : <Menu size={50} />}
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
          md:hidden flex flex-row justify-end items-center gap-6 px-6 py-4 fixed top-[80px] left-0 w-full rounded-b-xl shadow-lg transition-transform duration-300 ease-in-out z-40 backdrop-blur-xl bg-white/30 border-b border-white/40
          ${menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
      >
        <Link 
          to="/" 
          className="hover:underline mb-2 text-right text-xl font-bold" 
          onClick={closeMenu}
        >
          Home
        </Link>
        <Link 
          to="/produto" 
          className="hover:underline mb-2 text-right text-xl font-bold" 
          onClick={closeMenu}
        >
          Produtos
        </Link>
        <Link 
          to="/Contato" 
          className="hover:underline mb-2 text-right text-xl font-bold" 
          onClick={closeMenu}
        >
          Contato
        </Link>
      </div>
    </nav>
  );
}