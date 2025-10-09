"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      // ensure we are in a browser environment and can access window/document
      if (typeof window === "undefined" || typeof document === "undefined") return;

      const sections = ["home", "about", "projects", "contact"];
      const scrollPosition = (window.scrollY || window.pageYOffset || 0) + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;

        // defensive checks in case element layout information is unavailable
        const offsetTop = typeof element.offsetTop === "number" ? element.offsetTop : null;
        const offsetHeight = typeof element.offsetHeight === "number" ? element.offsetHeight : null;
        if (offsetTop === null || offsetHeight === null) continue;

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-licorice/80 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex-1"></div>
          
          <ul className="flex gap-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`relative transition-colors ${
                    activeSection === item.id ? "text-neon" : "text-white hover:text-neon"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-neon"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex-1 flex justify-end gap-4">
            <a
              href="https://github.com/SanjaySudhakaranxy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-neon transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/sanjaysudhakaranxy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-neon transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://www.instagram.com/sensaaayyy?igsh=MXV2OGJ6ZzNuejl4aA=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-neon transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
