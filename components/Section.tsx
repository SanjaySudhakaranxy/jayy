"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

const Section = ({ id, title, children }: SectionProps) => {
  return (
    <section id={id} className="min-h-screen sm:min-h-[60vh] py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-12"
        >
          / {title}
        </motion.h2>
        {children}
      </div>
    </section>
  );
};

export default Section;
