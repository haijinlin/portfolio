import type { Metadata } from "next";
import "./globals.css";
import clsx from "clsx";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { fontSans, fontDisplay } from "@/lib/fonts";
import { Providers } from "@/components/providers";

export const metadata: Metadata = {
  title: {
    default: "Hayden Lin | IT, Operations & Digital Solutions",
    template: "%s | Hayden Lin",
  },
  description: "IT support, operations and digital solutions professional transforming real-world workflows into practical web applications.",
  metadataBase: new URL("https://www.haydenlin.com.au"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "/",
    siteName: "Hayden Lin Portfolio",
    title: "Hayden Lin | IT, Operations & Digital Solutions",
    description: "Practical digital solutions shaped by experience in software development, IT support and business operations.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Hayden Lin portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hayden Lin | IT, Operations & Digital Solutions",
    description: "Practical digital solutions shaped by software, IT and operations experience.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={clsx(
          fontSans.variable,
          fontDisplay.variable,
          "bg-background text-foreground antialiased"
        )}
      >
        <Providers>
          <div className="relative flex min-h-screen flex-col">
            <Nav />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
