import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/hero";
import { Section } from "@/components/section";

const relevantExperience = [
  { role: "Full Stack Developer · Freelancer", company: "Self-employed", location: "Melbourne", dates: "Jun 2024 — Present", bullets: ["Build bespoke websites and workflow applications with modern React and Next.js stacks.", "Support clients with maintenance, performance, SEO, analytics and marketing integrations."] },
  { role: "Web Developer & Marketing Coordinator", company: "Aorta Australia", location: "Melbourne", dates: "Apr 2023 — May 2024", bullets: ["Owned WordPress websites, landing pages, content updates and SEO optimisation.", "Managed analytics, Search Console and Google Ads while providing internal IT support."] },
  { role: "Web Developer", company: "ROI Growth Agency", location: "Melbourne", dates: "Jul 2022 — Apr 2023", bullets: ["Delivered and maintained client websites using HTML, CSS, JavaScript and PHP.", "Improved performance and UX, completed technical SEO audits and trained clients."] },
  { role: "IT Specialist", company: "HIT Dental & Medical Supplies", location: "Melbourne", dates: "Apr 2017 — Feb 2022", bullets: ["Supported Microsoft 365, networking, hardware and daily business systems.", "Maintained e-commerce content, supported digital campaigns and trained staff."] },
  { role: "Android Developer", company: "PixelForce Systems", location: "Adelaide", dates: "Jan 2016 — Dec 2016", bullets: ["Collaborated on commercial Android applications and client-aligned features.", "Improved application performance and usability with a cross-functional team."] },
];

const additionalExperience = [
  { role: "Dental Lab Technician", company: "Aorta Australia", dates: "Feb 2022 — Jul 2022", summary: "Produced dental appliances through precise digital workflows, maintained data accuracy and coordinated closely with clinical teams." },
];

const skills = [
  ["Development", ["Next.js", "React", "TypeScript", "JavaScript", "Prisma", "PostgreSQL", "Tailwind CSS", "Git/GitHub"]],
  ["Web & commerce", ["WordPress", "PHP", "WooCommerce", "Shopify", "BigCommerce", "HTML", "CSS"]],
  ["Analytics & marketing", ["Google Analytics", "Search Console", "Google Ads", "Tag Manager", "Semrush", "SEO audits", "Mailchimp"]],
  ["IT & systems", ["Microsoft 365", "Windows & macOS", "Networking", "Hardware support", "Vercel", "Jira", "User training"]],
] as const;

export default function HomePage() {
  return <>
    <Hero />

    <Section title="About me" eyebrow="A practical, cross-disciplinary background">
      <div className="grid gap-5 md:grid-cols-[1.4fr_0.8fr]">
        <div className="rounded-2xl border border-border bg-card/60 p-6 text-base leading-relaxed text-muted-foreground">
          <p>I’m a Melbourne-based developer who enjoys turning messy, real-world processes into clear digital experiences. My background spans web development, digital marketing operations, IT support and hands-on technical work.</p>
          <p className="mt-4">That mix has shaped how I build: understand the user first, make sensible technical decisions, protect working systems and continue supporting the product after launch.</p>
        </div>
        <dl className="grid gap-3">
          {[['Location', 'Melbourne, VIC'], ['Work status', 'Permanent Resident'], ['Languages', 'English, Mandarin, Cantonese'], ['Education', 'Master of Computing and Innovation']].map(([label, value]) => <div key={label} className="rounded-2xl border border-border bg-card/60 p-4"><dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</dt><dd className="mt-1 font-medium">{value}</dd></div>)}
        </dl>
      </div>
    </Section>

    <Section title="What I bring" eyebrow="Web, growth and support">
      <div className="grid gap-4 md:grid-cols-3">
        {[['Build', 'Responsive websites and full-stack applications designed around genuine user workflows.'], ['Improve', 'SEO, analytics, conversion tracking, performance and ongoing product iteration.'], ['Support', 'Patient troubleshooting, user training and reliable ownership after launch.']].map(([title, copy]) => <article key={title} className="rounded-2xl border border-border bg-card/60 p-5"><h3 className="text-lg font-semibold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{copy}</p></article>)}
      </div>
    </Section>

    <Section title="Relevant experience" eyebrow="Development, digital and IT">
      <div className="space-y-4">{relevantExperience.map((job) => <article key={`${job.role}-${job.company}`} className="rounded-2xl border border-border bg-card/60 p-5"><div className="flex flex-col gap-1 md:flex-row md:justify-between"><div><h3 className="text-lg font-semibold">{job.role}</h3><p className="text-sm text-muted-foreground">{job.company} · {job.location}</p></div><p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{job.dates}</p></div><ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">{job.bullets.map((bullet) => <li key={bullet}>• {bullet}</li>)}</ul></article>)}</div>
    </Section>

    <Section title="Additional experience" eyebrow="The complete story">
      {additionalExperience.map((job) => <article key={job.role} className="rounded-2xl border border-border bg-card/60 p-5"><div className="flex flex-col gap-1 md:flex-row md:justify-between"><div><h3 className="text-lg font-semibold">{job.role}</h3><p className="text-sm text-muted-foreground">{job.company}</p></div><p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{job.dates}</p></div><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{job.summary}</p></article>)}
    </Section>

    <Section title="Skills & tools" eyebrow="Practical toolkit">
      <div className="grid gap-4 md:grid-cols-2">{skills.map(([title, items]) => <div key={title} className="rounded-2xl border border-border bg-card/60 p-5"><h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">{title}</h3><div className="mt-3 flex flex-wrap gap-2">{items.map((item) => <span key={item} className="rounded-full border border-border px-3 py-1 text-sm">{item}</span>)}</div></div>)}</div>
    </Section>

    <Section title="Education" eyebrow="Degrees & programs">
      <div className="grid gap-4 md:grid-cols-2"><article className="rounded-2xl border border-border bg-card/60 p-5"><h3 className="font-semibold">Master of Computing and Innovation</h3><p className="mt-1 text-sm text-muted-foreground">University of Adelaide · 2013–2014</p></article><article className="rounded-2xl border border-border bg-card/60 p-5"><h3 className="font-semibold">Professional Year Program — IT</h3><p className="mt-1 text-sm text-muted-foreground">Navitas · 2015–2016</p></article></div>
    </Section>

    <Section title="Featured work" eyebrow="A short introduction to LifeHub">
      <div className="overflow-hidden rounded-2xl border border-border bg-card/60 md:grid md:grid-cols-[1.2fr_0.8fr]">
        <div className="relative min-h-64 border-b border-border bg-slate-100 md:border-b-0 md:border-r"><Image src="/projects/screenshots/lifehub-dashboard.png" alt="LifeHub dashboard" fill className="object-cover object-top" /></div>
        <div className="flex flex-col justify-center p-6"><p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Seven connected case studies</p><h3 className="mt-2 text-2xl font-semibold">LifeHub</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">A private home base connecting six independently deployed apps without disrupting their databases, authentication or everyday use.</p><div className="mt-5 flex flex-wrap gap-3"><Link href="/projects/lifehub" className="rounded-full bg-foreground px-4 py-2 text-sm text-background">Read the case study</Link><Link href="/projects" className="rounded-full border border-border px-4 py-2 text-sm">Browse all projects</Link></div></div>
      </div>
    </Section>

    <Section title="Outside of work" eyebrow="A little more personal">
      <div className="grid gap-4 md:grid-cols-3">{[['Basketball', 'Pick-up games, team sport culture and staying active.'], ['Travel & photography', 'Exploring new places, cityscapes and good food.'], ['Always learning', 'Experimenting with useful web tools and improving how products work.']].map(([title, copy]) => <div key={title} className="rounded-2xl border border-border bg-card/60 p-5"><h3 className="font-semibold">{title}</h3><p className="mt-2 text-sm text-muted-foreground">{copy}</p></div>)}</div>
    </Section>

    <Section title="Contact" eyebrow="Let’s talk">
      <div className="rounded-2xl border border-border bg-card/70 p-6 md:flex md:items-center md:justify-between"><div><h3 className="text-xl font-semibold">Open to web, front-end, digital operations and IT-focused opportunities.</h3><p className="mt-2 text-sm text-muted-foreground">Melbourne, VIC · Permanent Resident</p></div><div className="mt-5 flex gap-3 md:mt-0"><a href="mailto:contact@haydenlin.com.au?subject=Opportunity%20for%20Hayden" className="rounded-full bg-foreground px-5 py-2.5 text-sm text-background">Email Hayden</a><a href="https://www.linkedin.com/in/haydenlin" target="_blank" rel="noreferrer" className="rounded-full border border-border px-5 py-2.5 text-sm">LinkedIn</a></div></div>
    </Section>
  </>;
}
