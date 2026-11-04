import type { Metadata, Viewport } from "next";
import { Archivo, Courier_Prime } from "next/font/google";
import "./globals.css";

// Printed form type: Archivo, with its width axis for expanded titles and condensed labels.
const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-print",
  display: "swap",
});

// Typed entries: what the shipper fills into the boxes.
const courier = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-typed",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Universal Relocations | International moving, one company door to door",
  description:
    "The one-stop relocation service for international, interstate and intrastate moves since 1998. Survey, packing, freight, customs and delivery from hubs in the USA, India and the UAE.",
  icons: { icon: "/brand/logo.png" },
};

export const viewport: Viewport = {
  themeColor: "#00056E",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${archivo.variable} ${courier.variable}`}>
      <body>{children}</body>
    </html>
  );
}
