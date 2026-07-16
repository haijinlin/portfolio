"use client";

import Image from "next/image";
import { useState } from "react";

export type GalleryImage = {
  src: string;
  alt: string;
  label: string;
};

export function ProjectGallery({ images }: { images: GalleryImage[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = images[activeIndex];

  if (!active) return null;

  return (
    <section className="my-9" aria-label="Project screenshots">
      <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_190px]">
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-black/20">
          <Image src={active.src} alt={active.alt} fill sizes="(min-width: 1024px) 760px, 100vw" className="object-cover object-top" priority />
        </div>

        <div className="flex gap-3 overflow-x-auto pb-1 lg:grid lg:grid-rows-3 lg:overflow-visible lg:pb-0">
          {images.map((image, index) => (
            <button
              type="button"
              key={image.src}
              onClick={() => setActiveIndex(index)}
              aria-label={`Show ${image.label}`}
              aria-pressed={index === activeIndex}
              className={`group relative aspect-video min-w-36 overflow-hidden rounded-xl border text-left transition lg:min-w-0 ${
                index === activeIndex
                  ? "border-accent ring-2 ring-accent/25"
                  : "border-border opacity-70 hover:border-accent/50 hover:opacity-100"
              }`}
            >
              <Image src={image.src} alt="" fill sizes="190px" className="object-cover object-top transition group-hover:scale-[1.02]" />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent px-3 pb-2 pt-7 text-xs font-semibold text-white">
                {image.label}
              </span>
            </button>
          ))}
        </div>
      </div>
      <p className="mt-3 text-xs text-muted-foreground">{active.label} · Select a thumbnail to explore the interface</p>
    </section>
  );
}
