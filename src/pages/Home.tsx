// src/pages/Home.tsx
// src/pages/Home.tsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const produtos = [
  {
    id: 1,
    nome: "iPhone 16 Pro",
    preco: "R$ 8.999",
    img: "./iphone_16_pro.jpg",
  },
  {
    id: 2,
    nome: "iPhone 15 Pro",
    preco: "R$ 6.499",
    img: "./iphone_15_pro.png",
  },
  {
    id: 3,
    nome: "iPhone 14 Pro",
    preco: "R$ 4.999",
    img: "./iphone_14_pro.png",
  },
];


export function Home() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center p-6">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-blue-600 mb-8 text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Bem-vindo à  📱
      </motion.h1>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
        {produtos.map((produto, index) => (
          <motion.div
            key={produto.id}
            className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition flex flex-col items-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2, // efeito "em cascata"
            }}
          >
            <Link to={`/produtos/${produto.id}`}>
            </Link>
            <img
              src={produto.img}
              alt={produto.nome}
              className="w-40 h-40 object-cover rounded-xl mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {produto.nome}
            </h2>
            <p className="text-gray-600 mb-4">{produto.preco}</p>

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



