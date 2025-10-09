"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const socialLinks = [
    {
      name: "Email",
      icon: FaEnvelope,
      href: "mailto:sanjaysudhakaranxy@gmail.com",
      label: "sanjaysudhakaranxy@gmail.com",
    },
    {
      name: "GitHub",
      icon: FaGithub,
      href: "https://github.com/SanjaySudhakaranxy",
      label: "github.com/SanjaySudhakaranxy",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/sanjaysudhakaranxy/",
      label: "linkedin.com/in/sanjaysudhakaranxy",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      href: "https://www.instagram.com/sensaaayyy?igsh=MXV2OGJ6ZzNuejl4aA==",
      label: "@sensaaayyy",
    },
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
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <Section id="contact" title="get in touch">
      <div className="max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xl text-gray-300 mb-12 leading-relaxed"
        >
          I'm always open to new opportunities, collaborations, or just a friendly chat. 
          Feel free to reach out through any of the platforms below!
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              variants={itemVariants}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-4 p-4 border border-white/10 rounded-lg hover:border-neon hover:bg-neon/5 transition-all group"
            >
              <link.icon className="text-2xl text-gray-400 group-hover:text-neon transition-colors" />
              <div>
                <p className="font-semibold group-hover:text-neon transition-colors">
                  {link.name}
                </p>
                <p className="text-sm text-gray-400">{link.label}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <a
            href="mailto:sanjaysudhakaranxy@gmail.com"
            className="inline-block px-8 py-3 bg-neon text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300"
          >
            Send me an email
          </a>
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact;
