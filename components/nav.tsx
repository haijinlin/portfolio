"use client";

import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/freelance", label: "Freelance" },
  { href: "mailto:contact@haydenlin.com.au", label: "Contact" }
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="/" className="text-sm font-semibold uppercase tracking-[0.28em]">
          Hayden Lin
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-3 text-sm md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href} link={link} active={pathname === link.href} />
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
          className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/70 bg-card text-foreground hover:border-foreground md:hidden"
        >
          <span
            className={[
              "absolute h-0.5 w-5 rounded-full bg-foreground transition-transform duration-200",
              open ? "translate-y-0 rotate-45" : "-translate-y-1.5"
            ].join(" ")}
          />
          <span
            className={[
              "absolute h-0.5 w-5 rounded-full bg-foreground transition-opacity duration-200",
              open ? "opacity-0" : "opacity-100"
            ].join(" ")}
          />
          <span
            className={[
              "absolute h-0.5 w-5 rounded-full bg-foreground transition-transform duration-200",
              open ? "translate-y-0 -rotate-45" : "translate-y-1.5"
            ].join(" ")}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="border-t border-border/60 bg-background/95 backdrop-blur md:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-4 text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-1 text-foreground/90 transition hover:text-foreground"
                >
                  <span>{link.label}</span>
                  {pathname === link.href && (
                    <span className="h-[2px] w-12 rounded bg-gradient-to-r from-accent via-foreground to-accent-2" />
                  )}
                </a>
              ))}
              <div className="pt-2">
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavLink({ link, active }: { link: { href: string; label: string }; active: boolean }) {
  return (
    <div className="group relative">
      <a
        href={link.href}
        className="relative inline-flex items-center px-2 py-1 font-medium text-foreground/90 transition group-hover:text-foreground"
      >
        <span>{link.label}</span>
        <span className="pointer-events-none absolute -bottom-0.5 left-0 h-[2px] w-full origin-left scale-x-0 rounded bg-gradient-to-r from-accent via-foreground to-accent-2 opacity-0 transition-transform transition-opacity duration-250 ease-out group-hover:scale-x-100 group-hover:opacity-100" />
        {active && (
          <motion.span
            layoutId="nav-active"
            className="pointer-events-none absolute -bottom-0.5 left-0 h-[2px] w-full rounded bg-gradient-to-r from-accent via-foreground to-accent-2"
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
          />
        )}
      </a>
    </div>
  );
}
