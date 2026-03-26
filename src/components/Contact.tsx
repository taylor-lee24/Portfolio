"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Mail, Linkedin, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="section-container">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-accent font-mono text-sm tracking-wider uppercase mb-3">
              Contact
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-6">
              Let&apos;s Build Something Together
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-lg leading-relaxed mb-10">
              I&apos;m always open to discussing new opportunities, interesting
              projects, or just connecting with fellow engineers. Feel free to
              reach out.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="mailto:taylorlee.dev@proton.me"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center gap-3 px-6 py-3.5 bg-accent text-zinc-950 font-semibold rounded-lg hover:bg-cyan-300 transition-colors duration-200 w-full sm:w-auto justify-center"
              >
                <Mail size={18} />
                taylorlee.dev@proton.me
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/taylor-lee00/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center gap-3 px-6 py-3.5 border border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 rounded-lg hover:border-zinc-400 dark:hover:border-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-all duration-200 w-full sm:w-auto justify-center group"
              >
                <Linkedin size={18} />
                LinkedIn
                <ArrowUpRight
                  size={14}
                  className="text-zinc-300 dark:text-zinc-600 group-hover:text-zinc-500 dark:group-hover:text-zinc-400 transition-colors"
                />
              </motion.a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
