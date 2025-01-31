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
        <title>COIN - A Coin on the Blockchain</title>
        <meta
          name="description"
          content="Explore coin, the world's first memecoin created by the Dogecoin developer. Join the decentralized, community-driven project that revolutionized the crypto space."
        />
        <meta
          name="keywords"
          content="coin, original memecoin, Dogecoin dev, decentralized cryptocurrency, crypto community, meme coin, DeFi"
        />
        <meta name="author" content="coin Team" />
        <link rel="icon" href="/icons/favicon.ico" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="coin - The Original Memecoin" />
        <meta
          property="og:description"
          content="coin is the first-ever memecoin created by the Dogecoin developer. Dive into the decentralized community reshaping the world of crypto."
        />
        <meta property="og:image" content="/images/coin-og.png" />
        <meta property="og:url" content="https://coin.com" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="coin - The Original Memecoin" />
        <meta
          name="twitter:description"
          content="Explore coin, the world's first memecoin created by the Dogecoin developer. Join the decentralized, community-driven project reshaping the crypto space."
        />
        <meta name="twitter:image" content="/images/coin-twitter.png" />
        <meta name="twitter:site" content="@coin" />
        <meta name="twitter:creator" content="@coin" />

        {/* Canonical Link */}
        <link rel="canonical" href="https://coin.com" />

        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Website",
              name: "coin - The Original Memecoin",
              url: "https://coin.com",
              description:
                "coin is the world's first memecoin created by the Dogecoin developer. It is a fully decentralized, community-driven cryptocurrency.",
              image: "https://coin.com/images/coin-og.png",
              sameAs: [
                "https://twitter.com/coin",
                "https://discord.com/invite/coin",
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
