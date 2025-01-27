import React, { ReactNode } from "react";
import "./globals.css";
import localFont from "next/font/local";

import { headers } from "next/headers"; // Use headers for server-side operations
import LayoutContent from "./LayoutContent";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

interface RootLayoutProps {
  children: ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const headersData = await headers(); // Resolve the promise
  const cookies = headersData.get("cookie") || ""; // Safely retrieve cookies;

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>BELLSCOIN - The Original Memecoin</title>
        <meta
          name="description"
          content="Explore BELLSCOIN, the world's first memecoin created by the Dogecoin developer. Join the decentralized, community-driven project that revolutionized the crypto space."
        />
        <meta
          name="keywords"
          content="BELLSCOIN, original memecoin, Dogecoin dev, decentralized cryptocurrency, crypto community, meme coin, DeFi"
        />
        <meta name="author" content="BELLSCOIN Team" />
        <link rel="icon" href="/icons/favicon.ico" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="BELLSCOIN - The Original Memecoin" />
        <meta
          property="og:description"
          content="BELLSCOIN is the first-ever memecoin created by the Dogecoin developer. Dive into the decentralized community reshaping the world of crypto."
        />
        <meta property="og:image" content="/images/bellscoin-og.png" />
        <meta property="og:url" content="https://bellscoin.com" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="BELLSCOIN - The Original Memecoin" />
        <meta
          name="twitter:description"
          content="Explore BELLSCOIN, the world's first memecoin created by the Dogecoin developer. Join the decentralized, community-driven project reshaping the crypto space."
        />
        <meta name="twitter:image" content="/images/bellscoin-twitter.png" />
        <meta name="twitter:site" content="@BELLSCOIN" />
        <meta name="twitter:creator" content="@BELLSCOIN" />

        {/* Canonical Link */}
        <link rel="canonical" href="https://bellscoin.com" />

        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Website",
              name: "BELLSCOIN - The Original Memecoin",
              url: "https://bellscoin.com",
              description:
                "BELLSCOIN is the world's first memecoin created by the Dogecoin developer. It is a fully decentralized, community-driven cryptocurrency.",
              image: "https://bellscoin.com/images/bellscoin-og.png",
              sameAs: [
                "https://twitter.com/BELLSCOIN",
                "https://discord.com/invite/bellscoin",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <LayoutContent>{children}</LayoutContent>
      </body>
    </html>
  );
}
