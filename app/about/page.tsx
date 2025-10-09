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
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            I am currently a <strong className="text-white">Software Development Engineer</strong> at a leading tech company. 
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
            <div className="absolute inset-2 bg-licorice-600 rounded-2xl flex items-center justify-center border border-white/10">
              <p className="text-gray-500 text-center px-4">
                Add your photo here
                <br />
                <span className="text-sm">(400x400px recommended)</span>
              </p>
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
            <h4 className="text-xl font-semibold text-white mb-1">Software Development Engineer</h4>
            <p className="text-neon font-medium mb-2">Tech Company Name</p>
            <p className="text-sm text-gray-500 mb-3">JAN 2023 - PRESENT</p>
            <p className="text-gray-400 leading-relaxed">
              Led development of end-to-end features and built scalable systems. 
              Worked on core product features that improved user experience for millions of customers.
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
            <h4 className="text-xl font-semibold text-white mb-1">Software Engineer Intern</h4>
            <p className="text-neon font-medium mb-2">Startup Name</p>
            <p className="text-sm text-gray-500 mb-3">MAY 2022 - AUG 2022</p>
            <p className="text-gray-400 leading-relaxed">
              Developed full-stack features using React and Node.js. 
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
            <h4 className="text-xl font-semibold text-white mb-1">Junior Developer</h4>
            <p className="text-neon font-medium mb-2">Another Company</p>
            <p className="text-sm text-gray-500 mb-3">JAN 2021 - DEC 2021</p>
            <p className="text-gray-400 leading-relaxed">
              Built responsive web applications and worked on improving application performance. 
              Gained experience in modern web development practices and agile methodologies.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
};

export default About;
