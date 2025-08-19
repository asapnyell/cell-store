import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MotionLink = motion(Link);

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
            transition={{ duration: 1 }}
          >
            Bem-vindo à Minha Loja 📱
          </motion.h1>

          <motion.p
            className="mt-4 text-lg md:text-2xl text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Os melhores produtos de tecnologia esperam por você
          </motion.p>

           <MotionLink
      to="/produto"
      className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-2xl shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      Ver Produtos
    </MotionLink>
        </div>
      </section>
    </main>
  );
}
