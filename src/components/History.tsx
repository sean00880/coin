"use client";
import React from "react";
import Image from "next/image";

const HistorySection: React.FC = () => {
  const numberOfCoins = 50; // Number of coins for animation
  const coins = Array.from({ length: numberOfCoins }, (_, index) => ({
    id: index + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    animationDelay: `${Math.random() * 2}s`,
  }));

  return (
    <section id="history" className="relative bg-fixed py-20 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-80"></div>

      {/* Welcome to the COINiverse */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center">
        <h2 className="text-center text-4xl md:text-6xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">
          Welcome to the COINiverse
        </h2>

        {/* Animated Coins Intro */}
        <div className="coins-container relative w-full h-screen flex justify-center items-center">
          {coins.map((coin) => (
            <Image
              key={coin.id}
              src="/icons/favicon.ico"
              alt="Coin"
              width={20}
              height={20}
              className="absolute coin animate-float"
              style={{
                left: `${coin.x}vw`,
                top: `${coin.y}vh`,
                animationDelay: coin.animationDelay,
              }}
            />
          ))}
        </div>
      </div>

      {/* The Great COIN Flip */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center mt-20">
        <h2 className="text-center text-4xl md:text-6xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500 animate-pulse">
          The Great COIN Flip
        </h2>

        {/* Giant Animated COIN */}
        <div className="coin-flip-container relative w-96 h-96 mb-10">
          <Image
            src="/icons/GoldVerified.svg" // Using a different coin image for flip
            alt="Flipping Coin"
            width={200}
            height={200}
            className="animate-spin-slow" // Simple spin animation for now
          />
        </div>

        {/* Messages based on flip */}
        <div className="message-container text-center text-xl md:text-2xl">
          <p>Flip the coin to reveal your fortune...</p>
          {/* Future: Add interactive flip and message display */}
        </div>
      </div>

      <style jsx>{`
        .coins-container {
          perspective: 800px;
        }

        .coin {
          @apply absolute rounded-full shadow-md;
          background-color: gold;
          width: 30px;
          height: 30px;
          opacity: 0.8;
        }

        @keyframes float {
          0% {
            transform: translateY(0) rotateX(0deg);
          }
          50% {
            transform: translateY(-15px) rotateX(180deg);
          }
          100% {
            transform: translateY(0) rotateX(360deg);
          }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HistorySection;
