# Portfolio Release Review

## Classification

**Public portfolio approved.**

The site is intended for public discovery by recruiters, clients and professional contacts. It contains public career information, synthetic product screenshots and case studies, but no application databases, environment secrets, private backups or production credentials.

## Public information boundary

- The downloadable resume contains professional contact and employment information only.
- Portfolio screenshots must use synthetic names, dates, email addresses and records.
- Private LifeHub modules are presented through case studies rather than shared production accounts.
- Workout is the only public live demo because visitor records remain in the visitor's own browser.
- Review every new image, PDF and downloadable file before publishing.

## Search and sharing

- The site provides canonical URLs, Open Graph and Twitter metadata.
- Project case studies provide their own titles, summaries and share images.
- `sitemap.xml` lists the homepage, project index, freelance page and all case studies.
- `robots.txt` permits indexing and links to the sitemap.

## Verification before release

- Run `npm run lint`, `npx tsc --noEmit` and `npm run build`.
- Confirm the resume and every public link return successfully.
- Confirm LinkedIn link previews use the intended title, description and image.
- Confirm no real personal or client data appears in new screenshots.
