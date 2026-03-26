"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail, ExternalLink } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-white dark:from-zinc-950 dark:via-zinc-950 dark:to-zinc-950" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-accent/[0.03] rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/[0.02] rounded-full blur-[100px]" />

      <div className="section-container relative z-10 pt-24 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-accent font-mono text-sm tracking-wider mb-6">
            Senior Software Engineer
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-8"
        >
          <span className="text-zinc-900 dark:text-white">
            I build products that
          </span>
          <br />
          <span className="accent-gradient-text">ship and scale.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="text-zinc-500 dark:text-zinc-400 text-lg sm:text-xl max-w-xl leading-relaxed mb-12"
        >
          8+ years of turning ideas into production systems — from founding
          engineer at startups to enterprise platforms. Full stack, cloud
          infrastructure, and AI-powered solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-zinc-950 font-semibold rounded-lg hover:bg-cyan-300 transition-colors duration-200"
          >
            <Mail size={18} />
            Get in Touch
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 rounded-lg hover:border-zinc-400 dark:hover:border-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-all duration-200"
          >
            <ExternalLink size={18} />
            View Work
          </a>
          <a
            href="/Taylor-Lee-Resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-200 dark:border-zinc-800 text-zinc-400 dark:text-zinc-500 rounded-lg hover:border-zinc-300 dark:hover:border-zinc-600 hover:text-zinc-600 dark:hover:text-zinc-300 transition-all duration-200"
          >
            Download Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-zinc-300 dark:text-zinc-600 hover:text-zinc-500 dark:hover:text-zinc-400 transition-colors"
          >
            <ArrowDown size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
