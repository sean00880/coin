"use client";
import React from "react";
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <section
    className="hero-section flex flex-col justify-center items-center h-screen bg-cover bg-center relative"
    style={{ backgroundImage: "url('/images/bells.gif')" }}
  >
    {/* Background Overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-60"></div>
  
    {/* Foreground Content */}
    <div className="relative z-10 flex flex-col items-center text-center space-y-6 px-6">
      {/* Title */}
      <h2 className="text-4xl md:text-6xl font-extrabold text-white fade-in">
        $BELLSCOIN
      </h2>
  
      {/* Hero Image */}
      <div className="fade-in-delay">
        <Image
          src="/images/logo.png"
          width={400}
          height={400}
          alt="$BELLS Logo"
          className="w-40 md:w-70"
        />
      </div>
  
      {/* Contract Address */}
      <div className="relative">
        <div className="bg-white text-black px-4 py-2 rounded-md font-mono font-bold text-xl shadow-md">
        0x48962A9c70dabdC708109837EfF7c3aDE8f886d4

        </div>
        <div
          className="absolute inset-0 rounded-full animate-spin-slow -z-10"
          style={{
            background: "conic-gradient(#FFD700, #8A2BE2, #FFD700)",
            filter: "blur(10px)",
          }}
        ></div>
      </div>
  
      {/* Social Icons */}
      <div className="flex justify-center space-x-4 mt-6">
        {[
          { href: "https://www.dextools.io/app/en/ether/pair-explorer/0x460718dd3ec316bb59810cac49120c4ba21570f7?t=1738186637792", src: "/icons/dextools.png", alt: "DexTools" },
          { href: "https://dexscreener.com/ethereum/0x48962A9c70dabdC708109837EfF7c3aDE8f886d4", src: "/icons/dexscreener.png", alt: "DexScreener" },
        ].map((icon, index) => (
          <a
            key={index}
            href={icon.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative hover:scale-110 transition-transform duration-300"
          >
            <Image
              src={icon.src}
              width={50}
              height={50}
              alt={icon.alt}
              className="rounded-full shadow-md"
            />
            <div className="absolute top-full mt-2 hidden group-hover:block bg-black bg-opacity-80 text-white text-sm font-semibold rounded-lg px-3 py-1">
              {icon.alt}
            </div>
          </a>
        ))}
      </div>
    </div>
  
    {/* Animated Text */}
    <div className="absolute bottom-24 fade-in mx-auto z-10">
      <h2 className="bg-orange-500 text-white text-3xl md:text-[46px] border-4 border-white font-bold px-6 py-6 rounded-lg shadow-md">
        The World's Original Memecoin!
      </h2>
    </div>
  
    {/* Marquee */}
    <div className="absolute bottom-0 w-full bg-blue-500 py-3 overflow-hidden">
      <div className="marquee flex">
        {Array.from({ length: 14 }).map((_, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 w-1/7 h-20 md:h-24"
            style={{ flex: "0 0 calc(100% / 7)" }}
          >
            <Image
              src={`/images/${(index % 7) + 1}bell.png`}
              alt={`Bell ${(index % 7) + 1}`}
              layout="fill"
              objectFit="contain"
              className="rounded-full"
            />
          </div>
        ))}
      </div>
    </div>
  
    {/* Animations */}
    <style jsx>{`
      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
  
      .fade-in {
        animation: fadeIn 1s ease-in-out forwards;
      }
  
      .fade-in-delay {
        animation: fadeIn 1.5s ease-in-out forwards;
      }
  
      .marquee {
        display: flex;
        animation: marquee 15s linear infinite;
      }
  
      @keyframes marquee {
        0% {
          transform: translateX(0%);
        }
        100% {
          transform: translateX(-100%);
        }
      }
    `}</style>
  </section>
  
  );
};

export default HeroSection;
