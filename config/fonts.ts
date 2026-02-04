import { Geist_Mono, Newsreader, IBM_Plex_Mono } from "next/font/google";

const serif = Newsreader({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const mono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const fonts = {
  serif,
  mono,
};
