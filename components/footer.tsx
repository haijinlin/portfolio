const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/freelance", label: "Freelance" },
  { href: "/hayden-lin-resume.pdf", label: "Resume" }
];

const socials = [
  { href: "https://github.com/haijinlin", label: "GitHub" },
  { href: "https://www.linkedin.com/in/haydenlin", label: "LinkedIn" }
];

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <p className="text-foreground">Open to web, front-end, digital operations and IT-focused roles</p>
          <p>Melbourne, VIC</p>
          <a
            href="mailto:contact@haydenlin.com.au"
            className="inline-flex w-fit font-medium text-muted-foreground transition hover:text-foreground"
          >
            contact@haydenlin.com.au
          </a>
        </div>

        <div className="flex flex-col gap-3 text-sm text-muted-foreground md:items-end">
          <div className="flex flex-wrap gap-4">
            {quickLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-foreground">
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            {socials.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-foreground" target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
