import { motion } from "framer-motion";

const produto = [
  {
    id: 1,
    nome: "iPhone 16 Pro",
    preco: "R$ 8.999",
    img: "/produtos/iphone_16_pro.jpg",
    descricao: "O iPhone mais avançado da Apple." 
  },
  {
    id: 2,
    nome: "iPhone 15 Pro",
    preco: "R$ 6.499",
    img: "/produtos/iphone_15_pro.png",
    
  },
  {
    id: 3,
    nome: "iPhone 14 Pro",
    preco: "R$ 4.999",
    img: "/produtos/iphone_14_pro.png",
  },
  {
    id: 4,
    nome: "Iphone 13 Pro",
    preco: "R$ 3.999",
    img: "/produtos/iphone_13_pro.png",
  },
];

export function Produto() {
  return (
    <main className="flex-1 p-6 max-w-7xl mx-auto pt-24">
      <motion.h1
        className="text-4xl font-bold text-blue-600 mb-8 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Todos os Produtos 📱
      </motion.h1>

      {/* Produtos Section */}
            <section id="produto" className="py-12 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              {produto.map((produto, index) => (
                <motion.div
                  key={produto.id}
                  className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition flex flex-col items-center"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <img
                    src={produto.img}
                    alt={produto.nome}
                    className="w-40 h-40 object-cover rounded-xl mb-4"
                  />
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">{produto.nome}</h2>
                   <p className="text-gray-600 mb-4">{produto.preco}</p>
                    {produto.descricao && (
                   <p className="text-gray-600 mb-4">{produto.descricao}</p>
                   )}
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


