import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";

export const metadata: Metadata = {
  title: "Haraworks — Interior Design & Renovation, Kuala Lumpur",
  description:
    "Haraworks is an interior design and renovation studio in Kuala Lumpur, designing residential, commercial, and retail spaces across the Klang Valley and beyond.",
  openGraph: {
    title: "Haraworks — Interior Design & Renovation, Kuala Lumpur",
    description:
      "Interior design and renovation for homes, offices, and retail across the Klang Valley.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f9fafb",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-btn focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        <Navigation />
        <main id="main">{children}</main>
      </body>
    </html>
  );
}
