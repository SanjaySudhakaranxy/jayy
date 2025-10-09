"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold mb-6"
        >
          hi, <span className="text-neon">Jay</span> here.
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-400 mb-8"
        >
          Developer / Musician
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-neon text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300"
          >
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
