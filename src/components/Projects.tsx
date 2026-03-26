"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { ArrowUpRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

type SubProject = {
  title: string;
  problem: string;
  solution: string;
  impact: string;
  tech: string[];
};

type Project = {
  title: string;
  company: string;
  gradient: string;
  productImages?: string[];
} & (
  | { problem: string; solution: string; impact: string; tech: string[]; subProjects?: never }
  | { subProjects: SubProject[]; problem?: never; solution?: never; impact?: never; tech?: never }
);

const projects: Project[] = [
  {
    title: "Crossfill",
    company: "Crossfill",
    gradient: "from-cyan-500/20 to-blue-500/20",
    productImages: [
      "/product_image/crossfill-product-image/crossfill-product-image1.png",
      "/product_image/crossfill-product-image/crossfill-product-image2.png",
      "/product_image/crossfill-product-image/crossfill-product-image3.png",
      "/product_image/crossfill-product-image/crossfill-product-image4.png",
      "/product_image/crossfill-product-image/crossfill-product-image5.png",
      "/product_image/crossfill-product-image/crossfill-product-image6.png",
    ],
    subProjects: [
      {
        title: "AI Analytics Platform",
        problem:
          "Brands had zero visibility into how AI search engines referenced and ranked their content — a growing blind spot as AI-driven search gained traction.",
        solution:
          "Built an end-to-end analytics platform that tracks AI search visibility, brand mentions, and query performance. Designed content optimization pipelines to improve how brands surface in AI results.",
        impact:
          "Core product that helped secure startup funding and define the company's market position in the AI analytics space.",
        tech: ["Next.js", "FastAPI", "Python", "GCP", "Kubernetes"],
      },
      {
        title: "Brand Platform",
        problem:
          "The company needed a high-performance, credible web presence to support fundraising and customer acquisition.",
        solution:
          "Designed and built a modern branding website with headless CMS integration, enabling the marketing team to manage content independently.",
        impact:
          "Production-ready marketing site that powers the company's public presence and supports the sales pipeline.",
        tech: ["Next.js", "Vercel", "Sanity CMS", "TypeScript"],
      },
    ],
  },
  {
    title: "AI Trust & Guardrails Engine",
    company: "Preamble",
    productImages: [
      "/product_image/preamble-product-image/preamble-product-image1.png",
      "/product_image/preamble-product-image/preamble-product-image2.png",
      "/product_image/preamble-product-image/preamble-product-image3.png",
      "/product_image/preamble-product-image/preamble-product-image4.png",
      "/product_image/preamble-product-image/preamble-product-image5.png",
    ],
    problem:
      "Enterprise customers needed robust trust and safety guardrails before deploying AI systems into production environments.",
    solution:
      "Engineered the backend architecture for an AI trust evaluation platform using a microservices approach. Built guardrail enforcement systems and contributed to the frontend for the limited release.",
    tech: ["Python", "Django", "Flask", "React", "TypeScript", "AWS", "K8s"],
    impact:
      "Shipped the company's first production release and v0.5 limited release, establishing the core product used by enterprise clients.",
    gradient: "from-violet-500/20 to-purple-500/20",
  },
  {
    title: "Global HR Platform — Growth Phase",
    company: "Deel",
    productImages: [
      "/product_image/deel-product-image/deel-product-image1.png",
      "/product_image/deel-product-image/deel-product-image2.png",
    ],
    problem:
      "A hypergrowth startup needed to rapidly build product features to capture the global HR and payroll market.",
    solution:
      "Owned zero-to-one feature development as an independent engineer. Built product features from scratch, collaborated with data scientists on compliance logic, and shipped internal marketing tools.",
    tech: ["Ruby on Rails", "React", "Python"],
    impact:
      "Contributed to Deel's explosive growth phase as an early-stage team member — the company grew from startup to $12B valuation during this period.",
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
];

export default function Projects() {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openGallery = useCallback((images: string[]) => {
    setGalleryImages(images);
    setCurrentIndex(0);
    setGalleryOpen(true);
  }, []);

  const closeGallery = useCallback(() => {
    setGalleryOpen(false);
  }, []);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  }, [galleryImages.length]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  }, [galleryImages.length]);

  useEffect(() => {
    if (!galleryOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeGallery();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [galleryOpen, closeGallery, goNext, goPrev]);

  useEffect(() => {
    if (galleryOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [galleryOpen]);

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="section-container">
        <SectionHeading
          label="Projects"
          title="What I've Built"
          description="Selected projects where I had significant ownership — from architecture decisions to production deployment."
        />

        <div className="grid gap-6">
          {projects.map((project, index) => (
            <AnimatedSection key={project.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="card card-hover p-6 sm:p-8 group relative overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  {project.subProjects ? (
                    <>
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-accent transition-colors duration-200">
                            {project.title}
                          </h3>
                          <p className="text-sm text-zinc-400 dark:text-zinc-500 mt-1">
                            {project.company}
                          </p>
                        </div>
                        {project.productImages ? (
                          <button
                            onClick={() => openGallery(project.productImages!)}
                            className="p-1.5 rounded-lg border border-zinc-200/50 dark:border-zinc-700/50 hover:border-accent/50 transition-all duration-200 cursor-pointer"
                            aria-label="View product images"
                          >
                            <ArrowUpRight
                              size={20}
                              className="text-zinc-300 dark:text-zinc-600 group-hover:text-accent transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />
                          </button>
                        ) : (
                          <ArrowUpRight
                            size={20}
                            className="text-zinc-300 dark:text-zinc-600 group-hover:text-accent transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          />
                        )}
                      </div>

                      <div className="space-y-6">
                        {project.subProjects.map((sub, subIdx) => (
                          <div key={sub.title}>
                            {subIdx > 0 && (
                              <div className="border-t border-zinc-200/50 dark:border-zinc-700/50 mb-6" />
                            )}
                            <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-4">
                              {sub.title}
                            </p>

                            <div className="grid sm:grid-cols-3 gap-6 mb-4">
                              <div>
                                <p className="text-xs font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-2">
                                  Problem
                                </p>
                                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                                  {sub.problem}
                                </p>
                              </div>
                              <div>
                                <p className="text-xs font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-2">
                                  Solution
                                </p>
                                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                                  {sub.solution}
                                </p>
                              </div>
                              <div>
                                <p className="text-xs font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-2">
                                  Impact
                                </p>
                                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                                  {sub.impact}
                                </p>
                              </div>
                            </div>

                            <div className="flex flex-wrap gap-2">
                              {sub.tech.map((t) => (
                                <span
                                  key={t}
                                  className="text-xs font-mono px-2.5 py-1 rounded-md bg-zinc-100/80 dark:bg-zinc-800/80 text-zinc-500 dark:text-zinc-400 border border-zinc-200/50 dark:border-zinc-700/50"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-accent transition-colors duration-200">
                            {project.title}
                          </h3>
                          <p className="text-sm text-zinc-400 dark:text-zinc-500 mt-1">
                            {project.company}
                          </p>
                        </div>
                        {project.productImages ? (
                          <button
                            onClick={() => openGallery(project.productImages!)}
                            className="p-1.5 rounded-lg border border-zinc-200/50 dark:border-zinc-700/50 hover:border-accent/50 transition-all duration-200 cursor-pointer"
                            aria-label="View product images"
                          >
                            <ArrowUpRight
                              size={20}
                              className="text-zinc-300 dark:text-zinc-600 group-hover:text-accent transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />
                          </button>
                        ) : (
                          <ArrowUpRight
                            size={20}
                            className="text-zinc-300 dark:text-zinc-600 group-hover:text-accent transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          />
                        )}
                      </div>

                      <div className="grid sm:grid-cols-3 gap-6 mb-6">
                        <div>
                          <p className="text-xs font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-2">
                            Problem
                          </p>
                          <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                            {project.problem}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-2">
                            Solution
                          </p>
                          <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                            {project.solution}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-2">
                            Impact
                          </p>
                          <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                            {project.impact}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="text-xs font-mono px-2.5 py-1 rounded-md bg-zinc-100/80 dark:bg-zinc-800/80 text-zinc-500 dark:text-zinc-400 border border-zinc-200/50 dark:border-zinc-700/50"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {galleryOpen && galleryImages.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={closeGallery}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-5xl mx-4 sm:mx-8"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeGallery}
                className="absolute -top-12 right-0 p-2 text-white/70 hover:text-white transition-colors cursor-pointer"
                aria-label="Close gallery"
              >
                <X size={24} />
              </button>

              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-zinc-900 shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.25 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={galleryImages[currentIndex]}
                      alt={`Product screenshot ${currentIndex + 1}`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1280px) 100vw, 1280px"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>

                <button
                  onClick={goPrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white/80 hover:text-white hover:bg-black/70 transition-all cursor-pointer"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={22} />
                </button>
                <button
                  onClick={goNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white/80 hover:text-white hover:bg-black/70 transition-all cursor-pointer"
                  aria-label="Next image"
                >
                  <ChevronRight size={22} />
                </button>
              </div>

              <div className="flex justify-center gap-2 mt-4">
                {galleryImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 cursor-pointer ${
                      idx === currentIndex
                        ? "bg-white w-6"
                        : "bg-white/40 hover:bg-white/60"
                    }`}
                    aria-label={`Go to image ${idx + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
