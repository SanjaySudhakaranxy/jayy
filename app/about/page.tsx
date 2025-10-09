"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import { SiJavascript, SiTypescript, SiReact, SiNodedotjs, SiPython, SiGit } from "react-icons/si";

const About = () => {
  const skills = [
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "React", icon: SiReact },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Python", icon: SiPython },
    { name: "Git", icon: SiGit },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Section id="about" title="about me">
      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            I'm a passionate developer and musician who loves creating impactful digital experiences. 
            I specialize in building modern web applications with clean, efficient code.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            When I'm not coding, you'll find me making music, exploring new technologies, 
            or collaborating on creative projects. I believe in the power of combining technical 
            skills with artistic vision.
          </p>
        </motion.div>

        <div>
          <h3 className="text-2xl font-semibold mb-6">Technologies I work with:</h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-6"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="flex flex-col items-center gap-2 p-4 border border-white/10 rounded-lg hover:border-neon transition-colors group"
              >
                <skill.icon className="text-4xl group-hover:text-neon transition-colors" />
                <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default About;
