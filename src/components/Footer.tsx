// src/components/Footer.tsx
"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaTelegramPlane, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (

    
    <footer className=" text-white py-12 bottom-0 w-full z-30">
      <div className="text-center items-center flex flex-col m-8 rounded-3xl">

<Image
  src="/images/bellsbanner.png"
  alt="Banner Image"
  className="w-full rounded-3xl"
  width={900}
  height={300}
/>
</div>
      <div className=" bg-gradient-to-br from-blue-500 to-blue-300 w-full mx-auto px-4 md:px-8 flex flex-col justify-between items-center">
        {/* Left Section - Logo and Subtitle */}
        <div className="mb-8 md:mb-0 flex flex-col items-center">
          <Image
            src="/images/logo.png" // Replace with your logo path
            alt="Logo"
            width={200}
            height={40}
            className="mb-2 h-auto w-full"
          />
         
        </div>

        {/* Center Section - Links */}
        <div className="flex flex-col md:flex-row justify-evenly w-full">
          {/* Menu Links */}
          <div className="mb-8 md:mb-0 w-full items-center align-middle text-center justify-center">
            <h2 className="text-3xl font-bold mb-2 text-center">Menu</h2>
            <ul className="flex flex-row w-full justify-evenly">
              <li className="mb-1 hover:text-green-400">
                <Link href="/#home">Home</Link>
              </li>
              <li className="mb-1 hover:text-green-300">
                <Link href="/#about">About</Link>
              </li>
              <li className="mb-1 hover:text-green-300">
                <Link href="/#tokenomics">Tokenomics</Link>
              </li>
              <li className="mb-1 hover:text-green-300">
                <Link href="/#roadmap">Roadmap</Link>
              </li>
            </ul>
          </div>

       
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="glass mt-8 text-center text-gray-300 border-t border-green-300 pt-4">
        &copy; $BellsCoin on Ethereum <br/> | 2025  
      </div>
    </footer>
  );
};

export default Footer;
