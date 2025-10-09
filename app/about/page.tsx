"use client";

import { motion } from "framer-motion";
// using plain <img> to avoid Next Image optimization issues for local dev preview
import Section from "@/components/Section";
import { SiPython, SiReact, SiJavascript, SiMysql, SiLinux, SiGrafana, SiStreamlit } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";

const About = () => {
  const skills = [
    { name: "Python", icon: SiPython },
    { name: "React", icon: SiReact },
    { name: "JavaScript", icon: SiJavascript },
  { name: "MySQL", icon: SiMysql },
  { name: "MSSQL", icon: FaDatabase },
    { name: "Linux", icon: SiLinux },
    { name: "Grafana", icon: SiGrafana },
    { name: "Streamlit", icon: SiStreamlit },
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
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            I am currently a <strong className="text-white">Software Development Intern</strong> at Extend Logics. 
            I specialize in building modern web applications with clean, efficient code and have a passion for creating 
            impactful digital experiences.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            When I'm not coding, you'll find me making music, exploring new technologies, 
            or collaborating on creative projects. I believe in the power of combining technical 
            skills with artistic vision.
          </p>

          <h3 className="text-2xl font-semibold mb-6">Technologies I work with:</h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-4"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="flex flex-col items-center gap-2 p-3 border border-white/10 rounded-lg hover:border-neon transition-colors group"
              >
                <skill.icon className="text-3xl group-hover:text-neon transition-colors" />
                <span className="text-xs text-gray-400 group-hover:text-white transition-colors">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-gradient-to-br from-neon/20 to-fireRed/20 rounded-2xl"></div>
            <div className="absolute inset-0 p-0 flex items-center justify-center overflow-hidden">
              {/* Edge-to-edge profile photo (no border/background) */}
              <img
                src="/images/profile.jpg"
                alt="Sanjay Sudhakaran profile"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Experience Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-20"
      >
        <h3 className="text-3xl font-bold mb-8">/ experience</h3>
        
        <div className="space-y-8">
          {/* Experience Item 1 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border-l-2 border-neon pl-6 py-4"
          >
            <h4 className="text-xl font-semibold text-white mb-1">Software Development Intern</h4>
            <p className="text-neon font-medium mb-2">Extend Logics</p>
            <p className="text-sm text-gray-500 mb-3">08 Sep 2025 - PRESENT</p>
            <p className="text-gray-400 leading-relaxed">
              Built and deployed Streamlit-based tools and React web apps for internal projects.
               Managed Linux VMs, MySQL/MSSQL databases, and Grafana dashboards. 
               Focused on creating efficient, data-driven systems that actually work.
            </p>
          </motion.div>

          {/* Experience Item 2 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="border-l-2 border-white/20 pl-6 py-4"
          >
            <h4 className="text-xl font-semibold text-white mb-1">Technical Team Member</h4>
            <p className="text-neon font-medium mb-2">Keep Learning</p>
            <p className="text-sm text-gray-500 mb-3">JUNE 2025 - PRESENT</p>
            <p className="text-gray-400 leading-relaxed"> 
              Collaborated with cross-functional teams to deliver high-quality products.
            </p>
          </motion.div>

          {/* Experience Item 3 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="border-l-2 border-white/20 pl-6 py-4"
          >
            <h4 className="text-xl font-semibold text-white mb-1">Volunteer</h4>
            <p className="text-neon font-medium mb-2">Hope is Born</p>
            <p className="text-sm text-gray-500 mb-3">MAY 2023 - PRESENT</p>
            <p className="text-gray-400 leading-relaxed">
              Christian religious movement focused on building the lives of children and young people, instilling hope through their faith in God.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
};

export default About;
