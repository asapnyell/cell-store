
import { motion } from "framer-motion";

const produtos = [
  {
    id: 1,
    nome: "iPhone 16 Pro",
    preco: "R$ 8.999",
    img: "./iphone_16_pro.jpg",
    descricao: "O iPhone mais avançado da Apple." 
  },
  {
    id: 2,
    nome: "Samsung Galaxy S24",
    preco: "R$ 6.499",
    img: "https://images.unsplash.com/photo-1610945265563-ff9b5be0d3b3?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    nome: "Xiaomi 14 Ultra",
    preco: "R$ 4.999",
    img: "https://images.unsplash.com/photo-1606813909028-262f96d1cfb4?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    nome: "Motorola Edge 40",
    preco: "R$ 3.999",
    img: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80",
  },
];

export function Produto() {
  return (
    <main className="flex-1 p-6 max-w-7xl mx-auto">
      <motion.h1
        className="text-4xl font-bold text-blue-600 mb-8 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Todos os Produtos 📱
      </motion.h1>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {produtos.map((produto, index) => (
          <motion.div
            key={produto.id}
            className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
            }}
          >
            <img
              src={produto.img}
              alt={produto.nome}
              className="w-40 h-40 object-cover rounded-xl mb-4"
            />
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              {produto.nome}
            </h2>
            <p className="text-gray-600 mb-4">{produto.preco}</p>
            <p className="text-gray-600 mb-4">{produto.descricao}</p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-blue-600 text-white font-medium rounded-xl shadow hover:bg-blue-700 transition"
            >
              Comprar
            </motion.button>
          </motion.div>
        ))}
      </section>
    </main>
  );
}


