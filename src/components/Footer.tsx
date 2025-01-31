// src/components/Footer.tsx
"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaTelegramPlane, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (

    
    <footer className=" text-white py-12 bottom-0 w-full z-30 ">
      <div className="text-center items-center flex flex-col m-8 rounded-3xl">

<div className="w-full rounded-3xl relative overflow-hidden">
  <div className="flex w-full h-full transition-all duration-500 hover:bg-[orange]">
    <div className="w-1/2 flex rounded-md items-center justify-center transition-all duration-500 transform hover:translate-x-[-10px]">
      <Image
        src="/images/coin3.gif"
        alt="Banner Image"
        width={450}
        height={300}
        className="rounded-l-3xl object-cover transition-all duration-500 hover:scale-110"
      />
    </div>
    <div className="w-1/2 flex flex-col items-start justify-center p-8 transition-all duration-500 transform hover:translate-x-[10px]">
      <h2 className="text-4xl font-bold mb-2 text-black">
        $coin
      </h2>
      <p className="text-lg text-gray-700">
        Revolutionizing spending of coins in a new way.
      </p>
    </div>
  </div>
</div>
</div>
      <div className="  w-full mx-auto px-4 md:px-8 flex flex-col justify-between items-center">
        {/* Left Section - Logo and Subtitle */}
        <div className="mb-8 md:mb-0 flex flex-col items-center">
          <Image
            src="/images/coin5.gif" // Replace with your logo path
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
            <h2 className="text-3xl font-bold mb-2 text-center text-black">Menu</h2>
            <ul className="flex flex-row w-full text-black justify-evenly">
              <li className="mb-1 hover:text-yellow-400">
                <Link href="/#home">Home</Link>
              </li>
              <li className="mb-1 hover:text-yellow-300">
                <Link href="/#about">About</Link>
              </li>
              <li className="mb-1 hover:text-yellow-300">
                <Link href="/#tokenomics">Tokenomics</Link>
              </li>
              <li className="mb-1 hover:text-yellow-300">
                <Link href="/#roadmap">Roadmap</Link>
              </li>
            </ul>
          </div>

       
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="glass mt-8 text-center text-black border-t border-orange-300 pt-4">
        &copy; $COIN <br/> | 2025  
      </div>
    </footer>
  );
};

export default Footer;
