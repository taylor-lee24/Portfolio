"use client";

import AnimatedSection from "./AnimatedSection";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  label,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <AnimatedSection className="mb-16">
      <p className="text-accent font-mono text-sm tracking-wider uppercase mb-3">
        {label}
      </p>
      <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl text-lg leading-relaxed">
          {description}
        </p>
      )}
    </AnimatedSection>
  );
}
