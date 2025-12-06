"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

export function Section({
  title,
  eyebrow,
  description,
  children,
  id
}: {
  title: string;
  eyebrow?: string;
  description?: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <motion.section
      id={id}
      className="mx-auto max-w-6xl px-5 py-12 sm:py-16"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex flex-col gap-2 pb-6">
        {eyebrow && (
          <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground">{eyebrow}</p>
        )}
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
        {description && <p className="max-w-3xl text-sm text-muted-foreground">{description}</p>}
      </div>
      <div className="space-y-4">{children}</div>
    </motion.section>
  );
}
