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
          <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">From warehouse operations to family management, I build practical software for everyday problems.</h1>
          <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">Melbourne-based digital solutions professional with experience across operations, IT support, web delivery and digital marketing. I turn manual workflows into clear, useful applications through practical product thinking and AI-assisted development.</p>
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
