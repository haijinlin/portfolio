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
          <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground">Full Stack Developer · Product Builder · Digital Operations</p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">I turn real-life workflows into useful, reliable web products.</h1>
          <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">Melbourne-based developer with experience across product design, full-stack delivery, digital marketing systems and IT support. My featured platform, LifeHub, brings six independently deployed applications into one privacy-conscious ecosystem.</p>
          <div className="flex flex-wrap gap-3">
            <a href="/projects/lifehub" className="rounded-full bg-foreground px-5 py-2.5 text-background transition hover:-translate-y-0.5 hover:shadow-glow">Explore LifeHub</a>
            <a href="/projects" className="rounded-full border border-border px-5 py-2.5 transition hover:-translate-y-0.5 hover:border-foreground">View all projects</a>
            <a href="mailto:contact@haydenlin.com.au" className="rounded-full border border-border px-5 py-2.5 transition hover:-translate-y-0.5 hover:border-foreground">Email Hayden</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
