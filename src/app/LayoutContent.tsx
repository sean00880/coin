"use client";

import React, { ReactNode, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import DocumentationLayout from "../components/DocumentationLayout";
import DocumentationLayout2 from "../components/DocumentationLayout2";

interface LayoutContentProps {
  children: ReactNode;
}

const posts = [
  { title: "How Monkey Sol Inu Reshapes Meme Utility", href: "/blog/meme-utility" },
  { title: "GameFi’s Role in the MSI Ecosystem", href: "/blog/gamefi-role" },
  { title: "The Resilience of Monkey Sol Inu", href: "/blog/community-resilience" },
];


export default function LayoutContent({ children }: LayoutContentProps) {
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Return empty div during SSR
    return <div className="hidden" />;
  }


  const isLandingPage = pathname === "/";
  const isDocumentationPage = pathname?.startsWith("/docs");
  const isBlogPage = pathname?.startsWith("/blog");

  if (isLandingPage) {
    return <>{children}</>;
  }
  
  if (isDocumentationPage) {
    return <DocumentationLayout2 posts={posts}>{children}</DocumentationLayout2>;
  }
  
  if (isBlogPage) {
    return <DocumentationLayout posts={posts}>{children}</DocumentationLayout>;
  }

  // Fallback for other pages
  return <>{children}</>;
}