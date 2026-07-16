"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      className="group rounded-2xl border border-border bg-card/60 p-5 shadow-sm backdrop-blur"
    >
      <div className="mb-4 overflow-hidden rounded-xl border border-border/60 bg-gradient-to-br from-accent/10 via-card to-accent-2/10">
        {project.slug === "lifehub" ? (
          <div className="flex aspect-video w-full items-center justify-center bg-[radial-gradient(circle_at_25%_20%,rgba(123,212,255,0.25),transparent_38%),radial-gradient(circle_at_80%_80%,rgba(255,220,170,0.16),transparent_40%)]">
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#182b45] px-6 py-4 text-white shadow-2xl">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#b9dcf3] text-2xl text-[#1d537d]">✦</span>
              <div><div className="text-xl font-bold tracking-tight">LifeHub</div><div className="text-[10px] uppercase tracking-[0.2em] text-slate-300">Six spaces · one home</div></div>
            </div>
          </div>
        ) : (
          <div className="aspect-video w-full bg-[radial-gradient(circle_at_30%_30%,rgba(123,212,255,0.15),transparent_40%),radial-gradient(circle_at_70%_20%,rgba(255,158,199,0.15),transparent_45%)]" />
        )}
      </div>
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-1">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <p className="text-sm text-muted-foreground">{project.summary}</p>
        </div>
        {project.tags && (
          <span className="text-xs uppercase tracking-wide text-muted-foreground text-right">
            {project.tags.join(" · ")}
          </span>
        )}
      </div>
      {project.impact && <p className="mt-3 text-sm text-muted-foreground">{project.impact}</p>}
      <div className="mt-4 flex items-center gap-3 text-sm font-medium text-foreground">
        <Link href={`/projects/${project.slug}`} className="transition hover:text-accent">
          View case study →
        </Link>
        {project.link && (
          <a href={project.link} className="text-muted-foreground transition hover:text-foreground" target="_blank" rel="noreferrer">
            Live ↗
          </a>
        )}
        {project.access === "private" && (
          <span className="rounded-full border border-border px-2 py-1 text-[10px] uppercase tracking-wider text-muted-foreground">Private by design</span>
        )}
      </div>
    </motion.article>
  );
}
