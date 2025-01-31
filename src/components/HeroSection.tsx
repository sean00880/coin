"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

const HeroSection: React.FC = () => {
  const numberOfCoins = 20;
  const coinRefs = useRef<Array<React.RefObject<HTMLDivElement>>>([]);
  coinRefs.current = [...Array(numberOfCoins)].map(() => useRef<HTMLDivElement>(null));

  const coinsInitialState = [...Array(numberOfCoins)].map((_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 40 + 20,
    animationDelay: `${Math.random() * 5}s`,
    ref: coinRefs.current[i],
    initialX: Math.random() * 100 - 50,
    initialY: Math.random() * 100 - 50,
    randomX: Math.random() * 20 - 10,
    randomY: Math.random() * 20 - 10
  }));

  const [coins, setCoins] = useState(coinsInitialState);
  const animationFrameId = useRef<number>();

  const handleMouseMove = useCallback((event: MouseEvent) => {
    const coinsCopy = [...coins];
    coinsCopy.forEach((coin) => {
      if (coin.ref.current) {
        const coinRect = coin.ref.current.getBoundingClientRect();
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        const distance = Math.sqrt(
          (mouseX - (coinRect.left + coinRect.width / 2)) ** 2 +
            (mouseY - (coinRect.top + coinRect.height / 2)) ** 2
        );

        const repulsionRadius = 200;
        const maxDistance = 100;
        if (distance < repulsionRadius) {
          const angle = Math.atan2(
            mouseY - (coinRect.top + coinRect.height / 2),
            mouseX - (coinRect.left + coinRect.width / 2)
          );
          
          // Calculate repulsion strength with easing
          const strength = Math.pow((repulsionRadius - distance) / repulsionRadius, 0.7);
          const moveX = Math.cos(angle) * maxDistance * strength;
          const moveY = Math.sin(angle) * maxDistance * strength;

          // Apply smooth movement
          coin.ref.current.style.transition = 'transform 0.2s ease-out';
          coin.ref.current.style.transform = `translate(${coin.initialX + moveX}px, ${coin.initialY + moveY}px) rotate(360deg)`;
        } else {
          // Smooth return to original position
          coin.ref.current.style.transition = 'transform 0.5s ease-out';
          coin.ref.current.style.transform = `translate(${coin.initialX}px, ${coin.initialY}px) rotate(0deg)`;
        }
      }
    });
  }, [coins]);

  useEffect(() => {
    const animateCoins = () => {
      setCoins((prevCoins) =>
        prevCoins.map((coin) => ({
          ...coin,
          initialX: coin.initialX + coin.randomX * 0.02,
          initialY: coin.initialY + coin.randomY * 0.02,
        }))
      );
      animationFrameId.current = requestAnimationFrame(animateCoins);
    };

    animateCoins();

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);



  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);

  return (
    <section className="hero-section flex flex-col justify-center items-center h-screen bg-gradient-to-b from-yellow-400 to-orange-500 relative overflow-hidden">
      {/* Floating Coins Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {coins.map((coin, i) => (
          <div
            key={i}
            className="absolute coin-animation"
            style={{
              left: `${coin.x}%`,
              top: `${coin.y}%`,
              animationDelay: coin.animationDelay,
              width: `${coin.size}px`,
              height: `${coin.size}px`,
              transform: `translate(${coin.initialX}px, ${coin.initialY}px)`,
            }}
            ref={coin.ref}
          >
            <Image
              src="/images/coin.png"
              alt="Floating Coin"
              width={60}
              height={60}
              className="w-full h-full coin-image animate-coin-flip animate-float"
            />
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center space-y-8 px-6">
        {/* Title with Coin Flip Animation */}
        <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-8">
          <span className="inline-block ">$COIN</span>
        </h2>

        {/* Hero Coin Image */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 ">
          <Image
            src="/images/coin.png"
            alt="Coin Logo"
            fill
            className="object-contain animate-rotate-3d coin-flip"
          />
        </div>

        {/* Contract Address */}
        <div className="relative group">
          <div className="bg-black/80 text-white px-6 py-3 rounded-full font-mono text-lg shadow-xl">
            0xCOINCOINCOINCOINCOINCOINCOINCOIN
          </div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
        </div>

        {/* Social Links */}
        <div className="flex space-x-6 mt-8">
          {[
            { href: "#", src: "/icons/dextools.png", alt: "DexTools" },
            { href: "#", src: "/icons/dexscreener.png", alt: "DexScreener" },
          ].map((icon, index) => (
            <a
              key={index}
              href={icon.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative hover-effects"
            >
              <div className="absolute inset-0 bg-white/10 rounded-full blur-sm opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              <Image
                src={icon.src}
                width={50}
                height={50}
                alt={icon.alt}
                className="rounded-full shadow-lg"
              />
            </a>
          ))}
        </div>
      </div>



      {/* Animations */}
      <style jsx>{`
        .hover-effects {
          transition: transform 0.3s ease, box-shadow 0.3s ease, -webkit-transform 0.3s ease;
        }

        .hover-effects:hover {
          transform: scale(1.1) rotateX(360deg) rotateY(360deg);
          box-shadow: 0 0 20px orange;
          border-radius: 50%;
        }

        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }

        @keyframes rotate3d {
          0% {
            transform: rotateY(0deg);
          }
          100% {
            transform: rotateY(360deg);
          }
        }

        @keyframes coin-flip-animation {
          0% {
            transform: rotateY(0deg) rotateX(0deg);
          }
          25% {
            transform: rotateY(90deg) rotateX(45deg);
          }
          50% {
            transform: rotateY(180deg) rotateX(0deg);
          }
          75% {
            transform: rotateY(270deg) rotateX(45deg);
          }
          100% {
            transform: rotateY(360deg) rotateX(0deg);
          }
        }

        .coin-animation {
          animation: float 3s ease-in-out infinite;
        }

        .animate-rotate-3d {
          animation: rotate3d 5s linear infinite;
        }

        .coin-flip {
          animation: flip 2s ease-in-out infinite;
          display: inline-block;
          transform-style: preserve-3d;
        }

        .animate-coin-flip {
          animation: coin-flip-animation 2s linear infinite;
        }

        @keyframes flip {
          0% {
            transform: rotateY(0deg);
          }
          50% {
            transform: rotateY(180deg);
          }
          100% {
            transform: rotateY(360deg);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
