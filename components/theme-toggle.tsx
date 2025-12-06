"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  const base =
    "rounded-full px-3 py-1 text-xs uppercase tracking-[0.24em] border transition transform-gpu";
  const styles = isDark
    ? "bg-foreground text-background border-foreground hover:shadow-glow hover:-translate-y-0.5"
    : "bg-foreground text-background border-foreground hover:shadow-glow hover:-translate-y-0.5";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`${base} ${styles}`}
    >
      {isDark ? "Light" : "Dark"}
    </button>
  );
}
