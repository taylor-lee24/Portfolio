"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { Brain, Monitor, Server, Cloud, Database } from "lucide-react";

const skillCategories = [
  {
    title: "AI / Machine Learning",
    icon: Brain,
    skills: [
      "LLM-based Solutions",
      "TensorFlow",
      "PyTorch",
      "NLP",
      "AI Search Analytics",
      "Content Optimization",
    ],
  },
  {
    title: "Frontend",
    icon: Monitor,
    skills: [
      "React",
      "Next.js",
      "Vue.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Redux",
      "HTML5",
      "CSS3 / Sass",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      "Python",
      "Django",
      "Flask",
      "FastAPI",
      "Node.js",
      "NestJS",
      "Express.js",
      "Ruby on Rails",
    ],
  },
  {
    title: "Cloud / DevOps",
    icon: Cloud,
    skills: [
      "AWS (EC2, S3, Lambda, RDS, EKS)",
      "GCP",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Jenkins",
      "CI/CD Pipelines",
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "SQL Server",
      "Redis",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="section-container">
        <SectionHeading
          label="Skills"
          title="Technical Toolkit"
          description="Technologies I work with daily — from AI systems to cloud infrastructure."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <AnimatedSection key={category.title} delay={index * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="card p-6 card-hover h-full group"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2 rounded-lg bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors">
                    <category.icon size={20} />
                  </div>
                  <h3 className="font-semibold text-zinc-900 dark:text-white text-sm">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2.5 py-1.5 rounded-md bg-zinc-100/60 dark:bg-zinc-800/60 text-zinc-500 dark:text-zinc-400 border border-zinc-200/40 dark:border-zinc-700/40 hover:border-zinc-300 dark:hover:border-zinc-600 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
