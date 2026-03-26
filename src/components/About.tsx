"use client";

import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const highlights = [
  { value: "8+", label: "Years of Experience" },
  { value: "4", label: "Companies Built At" },
  { value: "2", label: "Startups as Founding Engineer" },
  { value: "MS", label: "Data Science — UT Dallas" },
];

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="section-container">
        <SectionHeading label="About" title="The Short Version" />

        <div className="grid md:grid-cols-5 gap-12 md:gap-16">
          <AnimatedSection className="md:col-span-3 space-y-6" delay={0.1}>
            <p className="text-zinc-600 dark:text-zinc-300 text-lg leading-relaxed">
              I&apos;m a senior software engineer who&apos;s spent the last
              eight years building and scaling web applications end-to-end. From
              founding engineer roles at early-stage startups to
              enterprise-grade systems at IBM, I bring deep expertise across the
              entire stack — React, Next.js, Python, Node.js, and AWS.
            </p>
            <p className="text-zinc-500 dark:text-zinc-400 text-lg leading-relaxed">
              More recently, I&apos;ve been working at the intersection of AI
              and product engineering, building LLM-powered platforms that solve
              real business problems. I&apos;ve led engineering teams,
              architected cloud infrastructure from scratch, and shipped products
              that secured funding and reached production.
            </p>
            <p className="text-zinc-500 dark:text-zinc-400 text-lg leading-relaxed">
              I don&apos;t just write code — I own outcomes. Whether it&apos;s
              a zero-to-one build, a complex backend migration, or getting a
              product from prototype to launch, I care about what gets shipped
              and the impact it creates.
            </p>
          </AnimatedSection>

          <AnimatedSection className="md:col-span-2" delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="card p-5 text-center card-hover"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-accent mb-1">
                    {item.value}
                  </div>
                  <div className="text-xs sm:text-sm text-zinc-400 dark:text-zinc-500">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
