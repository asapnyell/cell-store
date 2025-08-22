import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
export function Home() {
  const location = useLocation();
  return (
    <main className="flex-1 flex flex-col">
      {/* Hero Section */}
      <section
        key={location.key}
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
      >
        {/* Imagem de fundo animada */}
        <motion.div
          className="absolute inset-0 w-full h-full bg-[url('/src/assets/jn.png')] bg-cover bg-center"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Overlay escuro animado */}
        <motion.div
          className="absolute inset-0 bg-black/60 md:bg-black/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />

        {/* Conteúdo */}
        <div className="relative z-10 text-center px-6 flex flex-col items-center gap-8">
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg tracking-tight mb-2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Bem-vindo à <span className="text-blue-300">JN Importes!</span>
          </motion.h1>
          <motion.h2
            className="text-2xl md:text-3xl font-semibold text-blue-100 drop-shadow mb-4 tracking-wide"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Produtos Apple <span className="text-blue-300">100% Originais</span>
          </motion.h2>
          <Link to="/Produto">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-blue-600 text-white font-bold rounded-xl shadow-lg hover:bg-blue-700 transition text-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              Ver produtos
            </motion.button>
          </Link>
        </div>
      </section>
    </main>
  );
}
