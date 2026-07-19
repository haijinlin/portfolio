import { Section } from "@/components/section";

export const metadata = {
  title: "Freelance Web Services | Hayden Lin",
  description: "HL Tech Solutions is Hayden Lin's Melbourne freelance practice for WordPress websites, SEO, performance, maintenance and technical support."
};

const services = [
  { title: "Website development", desc: "Clean, responsive WordPress websites, online stores and lightweight web solutions designed for small-business needs." },
  { title: "SEO & performance", desc: "Technical SEO, Core Web Vitals, image optimisation and practical improvements that help websites load faster and remain discoverable." },
  { title: "Website maintenance", desc: "Updates, backups, security checks, uptime monitoring and ongoing improvements that keep business websites reliable." },
  { title: "Technical support & consultation", desc: "Help with plugin conflicts, hosting, DNS, migrations, troubleshooting and planning the next stage of a digital setup." },
];

const projects = [
  { title: "Verduscape", type: "Website development", desc: "A fast, modern WordPress website designed to showcase landscaping services and drive enquiries.", href: "https://hltech.com.au/projects/verduscape/" },
  { title: "Vic City Plumbing", type: "Recovery & optimisation", desc: "A security recovery and performance optimisation project for a compromised WordPress website.", href: "https://hltech.com.au/projects/vic-city-plumbing/" },
  { title: "JKW Construct", type: "WordPress development", desc: "A structured construction-company website with custom project showcases and a clear service journey.", href: "https://hltech.com.au/projects/jkw-construct/" },
];

const process = [
  ["Understand", "Discuss the business, audience, current website and the outcome that matters."],
  ["Plan", "Agree on a practical scope, priorities, timeline and responsibilities."],
  ["Deliver", "Build or improve the website, test it carefully and communicate progress clearly."],
  ["Support", "Provide handover, maintenance and ongoing help where it adds value."],
];

export default function FreelancePage() {
  return <div className="space-y-12">
    <section className="relative overflow-hidden border-b border-border/60 py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(123,212,255,0.1),transparent_36%),radial-gradient(circle_at_82%_10%,rgba(255,194,148,0.09),transparent_38%)]" />
      <div className="relative mx-auto grid max-w-6xl gap-8 px-5 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">My freelance practice</p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">HL Tech Solutions</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">I help Melbourne and remote small businesses build, improve and maintain websites that are fast, clear and dependable.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="https://hltech.com.au/" target="_blank" rel="noreferrer" className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background">Visit HL Tech Solutions ↗</a>
            <a href="https://hltech.com.au/contact/" target="_blank" rel="noreferrer" className="rounded-full border border-border px-5 py-2.5 text-sm font-medium">Request a free consultation ↗</a>
          </div>
        </div>
        <aside className="rounded-3xl border border-border bg-card/70 p-7 shadow-sm backdrop-blur">
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">What clients can expect</p>
          <ul className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground">
            <li><strong className="text-foreground">Practical advice.</strong> Recommendations shaped around the business rather than unnecessary complexity.</li>
            <li><strong className="text-foreground">Clear communication.</strong> Straightforward explanations, agreed scope and visible progress.</li>
            <li><strong className="text-foreground">Support after launch.</strong> Maintenance and troubleshooting when the website needs continued care.</li>
          </ul>
        </aside>
      </div>
    </section>

    <Section title="Core services" eyebrow="What HL Tech Solutions provides">
      <div className="grid gap-4 md:grid-cols-2">{services.map((service) => <article key={service.title} className="rounded-2xl border border-border bg-card/60 p-5"><h3 className="text-lg font-semibold">{service.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.desc}</p></article>)}</div>
    </Section>

    <Section title="Selected client work" eyebrow="Real freelance projects">
      <div className="grid gap-5 md:grid-cols-3">{projects.map((project) => <article key={project.title} className="flex flex-col rounded-2xl border border-border bg-card/60 p-5"><p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{project.type}</p><h3 className="mt-2 text-xl font-semibold">{project.title}</h3><p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{project.desc}</p><a href={project.href} target="_blank" rel="noreferrer" className="mt-5 text-sm font-medium underline decoration-transparent underline-offset-4 hover:decoration-current">View project on HL Tech ↗</a></article>)}</div>
      <a href="https://hltech.com.au/projects/" target="_blank" rel="noreferrer" className="mt-6 inline-flex rounded-full border border-border px-4 py-2 text-sm font-medium">View all client projects ↗</a>
    </Section>

    <Section title="How I work" eyebrow="A simple, accountable process">
      <div className="grid gap-4 md:grid-cols-4">{process.map(([title, desc], index) => <article key={title} className="rounded-2xl border border-border bg-card/60 p-5"><p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Step {index + 1}</p><h3 className="mt-2 font-semibold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p></article>)}</div>
    </Section>

    <Section title="Freelance and portfolio, clearly separated" eyebrow="Two sites, two purposes">
      <div className="grid gap-4 md:grid-cols-2"><div className="rounded-2xl border border-border bg-card/60 p-5"><h3 className="font-semibold">This portfolio</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">Shows my background, personal product work, technical interests and employment experience.</p></div><div className="rounded-2xl border border-border bg-card/60 p-5"><h3 className="font-semibold">HL Tech Solutions</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">Contains complete service information, client case studies, testimonials and the enquiry process.</p></div></div>
    </Section>

    <Section title="Have a website project in mind?" eyebrow="Melbourne and remote clients">
      <div className="rounded-2xl border border-border bg-card/70 p-6 sm:flex sm:items-center sm:justify-between"><div><h3 className="text-xl font-semibold">Start with a free consultation.</h3><p className="mt-2 text-sm text-muted-foreground">Tell me what is working, what is not, and what you want the website to achieve.</p></div><a href="https://hltech.com.au/contact/" target="_blank" rel="noreferrer" className="mt-5 inline-flex rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background sm:mt-0">Contact HL Tech Solutions ↗</a></div>
    </Section>
  </div>;
}
