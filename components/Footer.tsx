"use client";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-400 text-sm">
          Built & Designed by Jay © 2025 — inspired by Gazi Jarin
        </p>
        
        <div className="flex gap-6">
          <a
            href="https://github.com/SanjaySudhakaranxy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-neon transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/sanjaysudhakaranxy/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-neon transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://www.instagram.com/sensaaayyy?igsh=MXV2OGJ6ZzNuejl4aA=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-neon transition-colors"
            aria-label="Instagram"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
