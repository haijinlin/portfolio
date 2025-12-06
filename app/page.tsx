import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { ProjectCard } from "@/components/project-card";
import { getProjects } from "@/lib/projects";

export default async function HomePage() {
  const projects = await getProjects();
  const featured = projects.slice(0, 2);

  const highlights = [
    "Web & front-end delivery: Next.js/React, WordPress/PHP, HTML/CSS/JS; deliver, maintain, and optimize sites.",
    "Marketing tech: Google Ads, Analytics, Search Console, SEO/technical audits, landing pages, and tracking.",
    "IT support: Windows/Mac, Office 365, network/hardware troubleshooting, client training and enablement."
  ];

  const skillGroups = [
    {
      title: "Front-end & Web",
      items: ["HTML", "CSS", "JavaScript", "React/Next.js", "Bootstrap", "Tailwind", "jQuery", "WordPress", "PHP", "WooCommerce"]
    },
    {
      title: "Analytics & SEO",
      items: ["Google Analytics", "Search Console", "Google Ads", "Semrush", "Tag Manager", "SEO audits", "Meta/LinkedIn ads ops"]
    },
    {
      title: "Marketing Ops",
      items: ["Shopify", "BigCommerce", "Mailchimp", "Mailbluster", "SendGrid", "Klavio", "AdRoll"]
    },
    {
      title: "Design & Content",
      items: ["Photoshop", "Premiere Pro", "Canva", "Blender"]
    },
    {
      title: "IT & Systems",
      items: ["Windows/Mac support", "Office 365", "Cisco router config", "MYOB", "SQL (basics)", "Git/GitHub", "Jira", "Android Studio/Java"]
    },
    {
      title: "Languages",
      items: ["English", "Mandarin", "Cantonese"]
    }
  ];

  const experience = [
    {
      role: "Full Stack Developer · Freelancer",
      company: "Self-employed",
      location: "Melbourne",
      dates: "Jun 2024 – Current",
      bullets: [
        "Delivering bespoke websites and landing pages with WordPress/React and modern SEO/analytics setup.",
        "Supporting clients with site upkeep, performance tuning, and marketing integrations."
      ]
    },
    {
      role: "Web Developer & Marketing Coordinator",
      company: "Aorta Australia",
      location: "Melbourne",
      dates: "Apr 2023 – May 2024",
      bullets: [
        "Owned website and landing pages (WordPress), ongoing updates and SEO optimisation.",
        "Set up and monitored GA/GSC and Google Ads; created social media campaigns and ads.",
        "Provided IT support to staff; managed configurations to meet team needs."
      ]
    },
    {
      role: "Web Developer",
      company: "ROI Growth Agency",
      location: "Melbourne",
      dates: "Jul 2022 – Apr 2023",
      bullets: [
        "Delivered and maintained client sites (HTML/CSS/JS/PHP); improved performance and UX.",
        "Ran technical SEO audits and applied fixes; trained clients on site updates."
      ]
    },
    {
      role: "Dental Lab Technician",
      company: "Aorta Australia",
      location: "Melbourne",
      dates: "Feb 2022 – Jul 2022",
      bullets: [
        "Produced dental appliances with digital workflows; maintained data accuracy.",
        "Collaborated with dental teams to meet precision and turnaround targets."
      ]
    },
    {
      role: "IT Specialist",
      company: "HIT Dental & Medical Supplies",
      location: "Melbourne",
      dates: "Apr 2017 – Feb 2022",
      bullets: [
        "Supported O365, networking, and hardware; maintained e-commerce site and content.",
        "Ran marketing emails/ads; trained staff and resolved daily IT issues."
      ]
    },
    {
      role: "Android Developer",
      company: "PixelForce Systems",
      location: "Adelaide",
      dates: "Jan 2016 – Dec 2016",
      bullets: [
        "Collaborated on commercial Android apps; improved performance and usability.",
        "Implemented client-aligned features and worked with cross-functional teams."
      ]
    }
  ];

  const education = [
    "Master of Computing and Innovation — University of Adelaide (2013–2014)",
    "Professional Year Program (IT) — Navitas (2015–2016)"
  ];

  const about = [
    "Basketball fan who loves pick-up games and team sports culture.",
    "Travel and photography—enjoy capturing cityscapes and food spots.",
    "Always learning: tinkering with new web stacks and marketing tools."
  ];

  const contact = [
    { label: "Email", value: "contact@haydenlin.com.au", href: "mailto:contact@haydenlin.com.au?subject=Hi%20Hayden" },
    { label: "Phone (on request)", value: "Reach out by email to share phone" },
    { label: "Location", value: "Melbourne, VIC" },
    { label: "Work status", value: "Permanent Resident" },
    { label: "LinkedIn", value: "linkedin.com/in/haydenlin", href: "https://linkedin.com" }
  ];

  return (
    <>
      <Hero />

      <Section title="Highlights" eyebrow="What I bring">
        <ul className="grid gap-3 text-base text-muted-foreground">
          {highlights.map((item) => (
            <li key={item} className="rounded-xl border border-border bg-card/60 p-4">
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Skills & Tools" eyebrow="Grouped for quick scanning">
        <div className="grid gap-4 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.title} className="rounded-2xl border border-border bg-card/60 p-5">
              <div className="text-sm uppercase tracking-[0.24em] text-muted-foreground">{group.title}</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border px-3 py-1 text-sm text-foreground/90"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Experience" eyebrow="Recent roles">
        <div className="space-y-4">
          {experience.map((job) => (
            <div key={`${job.role}-${job.company}`} className="rounded-2xl border border-border bg-card/60 p-5">
              <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{job.role}</h3>
                  <p className="text-sm text-muted-foreground">
                    {job.company} · {job.location}
                  </p>
                </div>
                <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">{job.dates}</p>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {job.bullets.map((b) => (
                  <li key={b} className="leading-relaxed">
                    • {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Projects" eyebrow="Selected work">
        <div className="grid gap-6 md:grid-cols-2">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>

      <Section title="Education" eyebrow="Degrees & programs">
        <ul className="space-y-2 text-base text-muted-foreground">
          {education.map((edu) => (
            <li key={edu} className="rounded-xl border border-border bg-card/60 p-4">
              {edu}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Hobbies" eyebrow="Outside of work">
        <div className="space-y-3 text-base text-muted-foreground">
          {about.map((item) => (
            <div key={item} className="rounded-xl border border-border bg-card/60 p-4">
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section title="Contact" eyebrow="Reach out">
        <div className="grid gap-3 md:grid-cols-2">
          {contact.map((item) => (
            <div key={item.label} className="rounded-xl border border-border bg-card/60 p-4">
              <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">{item.label}</p>
              {item.href ? (
                <a
                  href={item.href}
                  className="text-base font-medium underline underline-offset-4 decoration-transparent hover:decoration-current transition"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-base font-medium">{item.value}</p>
              )}
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
