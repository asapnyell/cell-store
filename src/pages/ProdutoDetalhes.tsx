
import { useParams } from "react-router-dom";

const produtos = [
  { id: 1, nome: "iPhone 15 Pro", preco: "R$ 8.999", descricao: "O iPhone mais avançado da Apple." },
  { id: 2, nome: "Samsung Galaxy S24", preco: "R$ 6.499", descricao: "Poder e inovação em um design elegante." },
  { id: 3, nome: "Xiaomi 14 Ultra", preco: "R$ 4.999", descricao: "Ótimo custo-benefício com câmera incrível." },
];

export function ProdutoDetalhes() {
  const { id } = useParams<{ id: string }>();
  const produto = produtos.find(p => p.id === Number(id));

  if (!produto) {
    return <p className="text-center text-red-500">Produto não encontrado.</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">{produto.nome}</h1>
      <p className="text-lg text-gray-700 mb-2">{produto.preco}</p>
      <p className="text-gray-600 mb-6">{produto.descricao}</p>
      <button className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
        Comprar
      </button>
    </div>
  );
}


