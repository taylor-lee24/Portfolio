"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeSettings from "./ThemeSettings";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-200/50 dark:border-zinc-800/50"
          : "bg-transparent"
      }`}
    >
      <nav className="section-container flex items-center justify-between h-16">
        <a
          href="#"
          className="text-zinc-900 dark:text-white font-bold text-lg tracking-tight hover:text-accent transition-colors"
        >
          taylor<span className="text-accent">.</span>lee
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/Taylor-Lee-Resume.pdf"
              download
              className="text-sm px-4 py-2 rounded-lg bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20 transition-all duration-200"
            >
              Resume
            </a>
          </li>
          <li>
            <ThemeSettings />
          </li>
        </ul>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeSettings />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-200/50 dark:border-zinc-800/50"
          >
            <ul className="section-container py-6 space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors py-2"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/Taylor-Lee-Resume.pdf"
                  download
                  className="inline-block text-sm px-4 py-2 rounded-lg bg-accent/10 text-accent border border-accent/20"
                >
                  Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
