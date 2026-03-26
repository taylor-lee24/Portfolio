"use client";

import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Master of Science in Data Processing",
    school: "The University of Texas at Dallas",
    period: "2022 — 2024",
    description:
      "Advanced studies in data systems, machine learning, and large-scale data processing — bridging the gap between software engineering and AI.",
  },
  {
    degree: "Bachelor of Science in Computer Science",
    school: "Columbia University",
    period: "2013 — 2017",
    description:
      "Strong foundation in algorithms, systems design, and software engineering from one of the top CS programs in the country.",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 sm:py-32 bg-zinc-50 dark:bg-zinc-900/30">
      <div className="section-container">
        <SectionHeading label="Education" title="Academic Background" />

        <div className="grid sm:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <AnimatedSection key={edu.school} delay={index * 0.1}>
              <div className="card p-6 sm:p-8 card-hover h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 rounded-lg bg-accent/10 text-accent shrink-0 mt-0.5">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-zinc-900 dark:text-white text-lg">
                      {edu.degree}
                    </h3>
                    <p className="text-accent text-sm mt-0.5">{edu.school}</p>
                    <p className="text-xs text-zinc-400 dark:text-zinc-500 font-mono mt-1">
                      {edu.period}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed pl-12">
                  {edu.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
