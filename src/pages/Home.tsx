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
    nome: "Iphone 15 Pro",
    preco: "R$ 6.499",
    img: "./iphone_15_pro.png",
  },
  {
    id: 3,
    nome: "Iphone 14 Pro",
    preco: "R$ 4.999",
    img: "./iphone_14_pro.png",
  },
];


export function Home() {
  return (
    <main className="flex-1 flex flex-col">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-[url('/jn.jpg')]"
      >
        {/* Overlay escuro */}
        <div className="absolute inset-0 bg-black/60 md:bg-black/40"></div>

        {/* Conteúdo */}
        <div className="relative z-10 text-center px-6">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2, // efeito "em cascata"
            }}
          >
            <Link to={`/produtos/${produto.id}`}>
              <h2 className="text-xl font-semibold text-gray-800">{produto.nome}</h2>
                <p className="text-gray-600">{produto.preco}</p>
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
