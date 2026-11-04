import type { Metadata, Viewport } from "next";
import { Archivo, JetBrains_Mono } from "next/font/google";
import "./home.css";

// One family across weights and widths; the width axis runs headings slightly expanded.
const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

// Mono is reserved for live data: hub clocks, route codes, references.
const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Universal Relocations | International moving, one company door to door",
  description:
    "The one-stop relocation service for international, interstate and corporate moves since 1998. Survey, packing, freight, customs and delivery from our own hubs in the USA, India and the UAE.",
  icons: { icon: "/brand/logo.png" },
};

export const viewport: Viewport = {
  themeColor: "#f2f3f9",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${archivo.variable} ${mono.variable}`}>
      <body>
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important;filter:none!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
