import type { Metadata } from "next";
import "./globals.css";
import clsx from "clsx";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { fontSans, fontDisplay } from "@/lib/fonts";
import { Providers } from "@/components/providers";

export const metadata: Metadata = {
  title: "Hayden Lin - Portfolio",
  description: "IT support, operations and digital solutions professional transforming real-world workflows into practical web applications.",
  metadataBase: new URL("https://www.haydenlin.com.au")
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
