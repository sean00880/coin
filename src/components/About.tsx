'use client';
import React from 'react';
import Image from 'next/image';

const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className=" py-20"
    >
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-extrabold text-center text-gray-200 mb-12">
          About $BELLS
        </h1>

        {/* Top Row - Large Image */}
        <div className="flex justify-center mb-16">
          <Image
            src="/images/bellscoin.png" // Replace with your image path
            alt="Bells Large Image"
            width={350}
            height={350}
            className="animate-fade-in-up"
          />
        </div>

        {/* Middle Row - Interactive Text Left, Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 mb-16">
          {/* Interactive Text */}
          <div className="bg-white p-8 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105">
            <h2 className="text-3xl font-bold text-yellow-500 mb-4">
              The Origin of $BELLS
            </h2>
            <p className="text-lg text-gray-800">
              BellsCoin was created in 2013 by BillyM2K and is considered the world's first meme coin. It paved the way for the creation of Dogecoin, setting the foundation for meme-based cryptocurrency.
            </p>
          </div>

          {/* Image */}
          <div>
            <Image
              src="/images/doge.png" // Replace with your image path
              alt="Bells Origin"
              width={500}
              height={400}
              className="animate-fade-in-up"
            />
          </div>
        </div>

        {/* Bottom Row - Image Left, Interactive Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
          {/* Image */}
          <div>
            <Image
              src="/images/dogebells.png" // Replace with your image path
              alt="Bells Future"
              width={500}
              height={400}
              className="animate-fade-in-up"
            />
          </div>

          {/* Interactive Text */}
          <div className="bg-white p-8 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105">
            <h2 className="text-3xl font-bold text-yellow-500 mb-4">
              The Future of $BELLS
            </h2>
            <p className="text-lg text-gray-800">
              With its decentralized community and historical significance, BellsCoin continues to evolve as a platform for artists, developers, and crypto enthusiasts worldwide.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
