"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";

const Projects = () => {
  const projects = [
    {
      title: "Montogg (Server alerts Manager)",
      description: "Enables and Disables server alerts for Pagerduty",
      tags: ["Python", "streamlit", "Mysql"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "EMI Cal",
      description: "A fantasy-Pixel themed EMI Calculator web app.",
      tags: ["Python", "streamlit", "pylibraries"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Performaxio",
      description: "An AI-powered Student performance analysis tool.",
      tags: ["Python", "streamlit", "Mysql"],
      gradient: "from-orange-500 to-red-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Section id="projects" title="projects">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ y: -10 }}
            className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 sm:p-6 hover:border-neon transition-all duration-300"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`} />
            
            <h3 className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-neon transition-colors">
              {project.title}
            </h3>
            
            <p className="text-gray-400 mb-4 leading-relaxed">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-3 py-1 text-xs bg-neon/10 text-neon border border-neon/20 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Projects;
