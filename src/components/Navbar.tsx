import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md justify-between items">
      <div className="container w-full flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Minha Loja
        </Link>
        <div className="flex gap-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/Produto" className="hover:underline">Produtos</Link>
        </div>
      </div>
    </nav>
  );
}

