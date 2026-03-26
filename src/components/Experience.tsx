"use client";

import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const experiences = [
  {
    role: "Lead Software Engineer",
    company: "Crossfill",
    period: "Sep 2024 — Present",
    location: "Dallas, TX",
    bullets: [
      "Spearheading development of an AI-powered analytics platform that measures brand visibility across AI search engines",
      "Architecting content optimization pipelines with Python and FastAPI to enhance AI query performance at scale",
      "Managing end-to-end cloud infrastructure and CI/CD on GCP with Kubernetes, ensuring production reliability",
      "Leading engineering initiatives that directly contributed to securing startup funding",
      "Shipped the company's branding site on Next.js with headless CMS, supporting the go-to-market strategy",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Preamble",
    period: "Aug 2022 — Aug 2024",
    location: "Remote",
    bullets: [
      "Engineered the backend architecture for an AI Trust platform, building the foundation in Python and Django",
      "Designed and implemented microservices for AI safety guardrails using Flask, serving enterprise clients",
      "Delivered frontend features for the limited release (v0.5) using React and TypeScript",
      "Owned the full DevOps workflow — AWS, Kubernetes, CI/CD — from development to production",
      "Drove the core development workflow that shipped the company's first production release",
    ],
  },
  {
    role: "Full Stack Engineer",
    company: "Deel",
    period: "Mar 2020 — Jul 2022",
    location: "Remote",
    bullets: [
      "Built product features from zero-to-one as an independent developer using Ruby on Rails",
      "Partnered with data scientists to implement security and compliance logic in Python",
      "Developed internal tools for the marketing team in React, improving operational efficiency",
      "Joined as an early-stage team member during Deel's hypergrowth trajectory",
    ],
  },
  {
    role: "Software Engineer",
    company: "IBM Consulting",
    period: "Aug 2017 — Dec 2019",
    location: "New York, NY",
    bullets: [
      "Delivered production applications using JavaScript and Python across enterprise clients in multiple verticals",
      "Built cross-industry solutions spanning finance, healthcare, and logistics domains",
      "Established a strong engineering foundation in enterprise-scale systems and best practices",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 bg-zinc-50 dark:bg-zinc-900/30">
      <div className="section-container">
        <SectionHeading
          label="Experience"
          title="Where I've Worked"
          description="A track record of building real products — from enterprise systems to founding engineer roles at startups."
        />

        <div className="relative">
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <AnimatedSection key={exp.company + exp.role} delay={index * 0.1}>
                <div className="relative pl-8 md:pl-20">
                  <div className="absolute left-0 md:left-8 top-2 w-2 h-2 rounded-full bg-accent -translate-x-[3.5px]" />

                  <div className="card p-6 sm:p-8 card-hover">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                      <div>
                        <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                          {exp.role}
                        </h3>
                        <p className="text-accent text-sm">{exp.company}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-zinc-500 dark:text-zinc-400 font-mono">
                          {exp.period}
                        </p>
                        <p className="text-xs text-zinc-400 dark:text-zinc-600">
                          {exp.location}
                        </p>
                      </div>
                    </div>

                    <ul className="space-y-2.5">
                      {exp.bullets.map((bullet, i) => (
                        <li key={i} className="flex gap-3 text-sm">
                          <span className="text-accent/60 mt-1.5 shrink-0">
                            ▹
                          </span>
                          <span className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
