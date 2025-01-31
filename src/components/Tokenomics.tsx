'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const TokenomicsSection: React.FC = () => {
  const [openCardIndex, setOpenCardIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const coinRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('visible', entry.isIntersecting);
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.fade-in-scroll');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Scroll listener for coin animation relative to section
    const handleScroll = () => {
      const sectionElement = sectionRef.current;
      const coinElement = coinRef.current;

      if (sectionElement && coinElement) {
        const sectionRect = sectionElement.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Calculate progress based on section visibility
        const progress = Math.max(
          0,
          Math.min(1, (windowHeight - sectionRect.top) / sectionRect.height)
        );

        // Vertical translation from top to bottom of section
        const translateY = progress * sectionRect.height;

        // Rotation and flip animation
        const rotation = progress * 720; // Two full rotations
        const flip = progress * 180; // Full flip

        coinElement.style.transform = `
          translateY(${translateY}px)
          rotate(${rotation}deg)
          rotateY(${flip}deg)
        `;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleCard = (index: number) => {
    setOpenCardIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const tokenomicsData = [
  { title: 'TOKEN NAME', value: 'COIN', details: 'The official name of our token, representing its identity.' },
    { title: 'SYMBOL', value: '$COIN', details: 'The ticker symbol used for trading COIN.' },
    { title: 'LIQUIDITY', value: 'Burned', details: 'Liquidity is burned to ensure scarcity and stability for $COIN holders.' },
    { title: 'TOTAL SUPPLY', value: '100,000,000', details: 'The maximum total supply of COIN tokens to ensure scarcity.' },
    {
      title: 'NETWORK',
      value: 'Ethereum (ETH)',
      details: 'COIN operates on the Ethereum blockchain, known for its security and reliability.',
    },
  ];

  return (
    <section
      id="tokenomics"
      className="relative bg-fixed py-20 text-black"
      style={{ backgroundImage: "url('/images/coin2.gif')", backgroundSize: 'cover' }}
      ref={sectionRef}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-black opacity-70"></div>
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-12 text-center fade-in-scroll opacity-0">
          Tokenomics
        </h1>

        {/* Animated Coin */}
        <div
          className="coin-container relative w-96 h-auto fade-in-scroll opacity-0 overflow-hidden"
          ref={coinRef}
        >
          <Image
            src="/images/coin.png"
            alt="Animated Coin"
            width={100}
            height={100}
            className="rounded-full shadow-lg coin-image"
          />
        </div>

        {/* Interactive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-screen-lg mt-10">
          {tokenomicsData.map((item, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-xl shadow-lg border-2 ${
                openCardIndex === index ? 'border-orange-400 scale-105' : 'border-yellow-400'
              } hover:scale-105 hover:border-yellow-600 transition-all duration-300`}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">{item.title}</h2>
              <p className="text-xl md:text-2xl text-gray-800">{item.value}</p>
              <button
                onClick={() => toggleCard(index)}
                className="mt-5 bg-gradient-to-br from-yellow-600 to-yellow-600 hover:from-orange-600 hover:to-orange-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
              >
                {openCardIndex === index ? 'Close' : 'Details'}
              </button>
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  openCardIndex === index ? 'max-h-40 p-4' : 'max-h-0 p-0'
                }`}
              >
                <p className="text-gray-700">{item.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .fade-in-scroll {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .fade-in-scroll.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .car-image {
          transition: transform 0.5s ease-out;
        }

        .coin-image {
          transform-style: preserve-3d;
          transition: transform 0.1s ease-out;
          will-change: transform;
        }
      `}</style>
    </section>
  );
};

export default TokenomicsSection;
