"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function TopBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="relative z-50 bg-black h-[13vh] w-full flex justify-center items-center">
      {/* Topbar Container */}
      <div className="topbar w-[95%] border-4 border-white rounded-2xl m-2 flex items-center justify-between px-4 md:px-8 py-4 bg-gradient-to-r from-yellow-300 to-orange-700 shadow-md">
        {/* Logo */}
        <Link href="https://bellscoin.com" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={90}
            height={40}
            className="rounded-md"
          />
        </Link>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="flex md:hidden items-center justify-center w-10 h-10 rounded-lg bg-white shadow-md"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-black mb-1"></span>
          <span className="block w-6 h-0.5 bg-black mb-1"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
        </button>

        {/* Navigation (Desktop) */}
        <nav className="hidden md:flex items-center space-x-6 text-white font-semibold">
          <Link href="/#home" className="hover:text-yellow-200 transition">
            Home
          </Link>
          <Link href="/#about" className="hover:text-yellow-200 transition">
            About
          </Link>
          <Link href="/#tokenomics" className="hover:text-yellow-200 transition">
            Tokenomics
          </Link>
          <Link href="/#roadmap" className="hover:text-yellow-200 transition">
            Roadmap
          </Link>
          
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gradient-to-b from-yellow-300 to-orange-700 text-white p-6 rounded-lg shadow-lg">
          <Link
            href="/#home"
            className="block py-2 border-b border-orange-500 hover:bg-yellow-400 transition"
          >
            Home
          </Link>
          <Link
            href="/#about"
            className="block py-2 border-b border-orange-500 hover:bg-yellow-400 transition"
          >
            About
          </Link>
          <Link
            href="/#tokenomics"
            className="block py-2 border-b border-orange-500 hover:bg-yellow-400 transition"
          >
            Tokenomics
          </Link>
          <Link
            href="/#roadmap"
            className="block py-2 border-b border-orange-500 hover:bg-yellow-400 transition"
          >
            Roadmap
          </Link>
       
        </div>
      )}
    </div>
  );
}
