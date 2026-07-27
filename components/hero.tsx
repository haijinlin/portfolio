"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(123,212,255,0.08),transparent_38%),radial-gradient(circle_at_75%_0%,rgba(255,158,199,0.08),transparent_42%)] blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-5">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease: "easeOut" }} className="max-w-4xl space-y-6">
          <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground">IT Support · Operations · Digital Solutions</p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">I combine IT, operations and product thinking to turn real-world workflows into practical software.</h1>
          <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">Melbourne-based digital solutions professional with a background in software development, IT support, web delivery and business operations. I use practical product thinking and AI-assisted development to transform manual processes into clear, useful applications.</p>
          <div className="flex flex-wrap gap-3">
            <a href="/projects" className="rounded-full bg-foreground px-5 py-2.5 text-background transition hover:-translate-y-0.5 hover:shadow-glow">View projects</a>
            <a href="/hayden-lin-resume.pdf" download className="rounded-full border border-border px-5 py-2.5 transition hover:-translate-y-0.5 hover:border-foreground">Download resume</a>
            <a href="mailto:contact@haydenlin.com.au" className="rounded-full border border-border px-5 py-2.5 transition hover:-translate-y-0.5 hover:border-foreground">Email</a>
            <a href="https://github.com/haijinlin" target="_blank" rel="noreferrer" className="rounded-full border border-border px-5 py-2.5 transition hover:-translate-y-0.5 hover:border-foreground">GitHub</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
