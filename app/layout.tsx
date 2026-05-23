import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";

export const metadata: Metadata = {
  title: "haraworks — Interior Design Studio",
  description:
    "haraworks is an interior design studio shaping calm, considered spaces for homes and workplaces.",
  openGraph: {
    title: "haraworks — Interior Design Studio",
    description:
      "An interior design studio shaping calm, considered spaces for homes and workplaces.",
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
