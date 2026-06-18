import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/next';

import "./globals.css";
import 'country-flag-emoji-polyfill';
export const metadata: Metadata = {
  title: "Exonéo | Avocats fiscalistes",
  description: "Cabinet d'avocats fiscalistes pour professions libérales, freelances et TPE/PME.",
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
