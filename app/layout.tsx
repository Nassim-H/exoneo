import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/next';

import "./globals.css";
import 'country-flag-emoji-polyfill';
export const metadata = {
  metadataBase: new URL("https://ton-domaine.com"),
  title: {
    default: "Exonéo | Avocats fiscalistes France & Luxembourg",
    template: "%s | Exonéo",
  },
  description:
    "Exonéo accompagne les professions libérales, freelances et TPE/PME dans l’optimisation et la gestion de leurs problématiques fiscales en France et au Luxembourg.",
  openGraph: {
    title: "Exonéo | Avocats fiscalistes France & Luxembourg",
    description:
      "Avocats fiscalistes pour professions libérales, freelances et TPE/PME.",
    url: "https://ton-domaine.com",
    siteName: "Exonéo",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/pcq5qif.css" />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
        </body>
    </html>
  );
}
