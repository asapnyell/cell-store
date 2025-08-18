import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from "./pages/Home";
import {ProdutoDetalhes} from "./pages/ProdutoDetalhes";
import {Navbar} from "./components/Navbar";
import {Footer} from "./components/Footer";
import { Produto } from "./pages/Produto";

export function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Produto" element={<Produto />} />
          <Route path="/Especification" element={<ProdutoDetalhes />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
