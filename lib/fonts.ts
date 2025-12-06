import { Space_Grotesk, Playfair_Display } from "next/font/google";

export const fontSans = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans"
});

export const fontDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"]
});
