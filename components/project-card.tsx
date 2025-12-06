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
        <div className="aspect-video w-full bg-[radial-gradient(circle_at_30%_30%,rgba(123,212,255,0.15),transparent_40%),radial-gradient(circle_at_70%_20%,rgba(255,158,199,0.15),transparent_45%)]" />
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
        {project.link && (
          <Link href={project.link} className="text-muted-foreground transition hover:text-foreground">
            Live ↗
          </Link>
        )}
      </div>
    </motion.article>
  );
}
