"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(123,212,255,0.08),transparent_38%),radial-gradient(circle_at_75%_0%,rgba(255,158,199,0.08),transparent_42%)] blur-3xl" />
      </div>
      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-5 md:flex-row md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="space-y-6"
        >
          <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground">
            Web & Front-End Developer · IT Support · Marketing · Lab Technician
          </p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            I build and maintain high-performing sites, connect analytics and ads, and keep the tech running.
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Melbourne-based (Permanent Resident). Master of Computing and Innovation (University of Adelaide). Background across web development, digital marketing operations, and IT support.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="mailto:contact@haydenlin.com.au"
              className="rounded-full bg-foreground px-5 py-2 text-background transition hover:-translate-y-0.5 hover:shadow-glow"
            >
              Email Hayden
            </Link>
            <Link
              href="https://linkedin.com"
              className="rounded-full border border-border px-5 py-2 transition hover:-translate-y-0.5 hover:border-foreground"
            >
              LinkedIn
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
