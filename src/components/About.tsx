'use client';
import React from 'react';
import Image from 'next/image';

const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className=" py-20"
    >
      <div className="container bg-white mx-auto px-4">
        <h1 className="text-5xl font-extrabold text-center text-yellow-500 mb-12">
          About $COIN
        </h1>

        {/* Top Row - Large Image */}
        <div className="flex justify-center mb-16">
          <Image
            src="/images/coin.png"
            alt="$COIN Large Image"
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
              The Birth of $COIN
            </h2>
            <p className="text-lg text-gray-800">
              $COIN was born in a meme-filled Discord chat when someone joked, "What if we made a coin... but called it COIN?" Little did they know, this would become the most ironically serious cryptocurrency project in history. Our mascot, Coinny McCoinface, was designed by a 12-year-old in MS Paint and we're proud of it!
            </p>
            <div className="mt-4">
              <button 
                className="bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600 transition-colors"
                onClick={() => alert('You just earned 0.0000001 $COIN!')}
              >
                Click for Free $COIN!
              </button>
            </div>
          </div>

          {/* Image */}
          <div>
            <Image
              src="/images/coin.gif"
              alt="$COIN Origin"
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
              src="/images/coin2.gif"
              alt="$COIN Future"
              width={500}
              height={400}
              className="animate-fade-in-up"
            />
          </div>

          {/* Interactive Text */}
          <div className="bg-white p-8 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105">
            <h2 className="text-3xl font-bold text-yellow-500 mb-4">
              The Future of $COIN
            </h2>
            <p className="text-lg text-gray-800">
              $COIN is revolutionizing the crypto space by doing absolutely nothing new, but with more memes! Our roadmap includes:
              <ul className="list-disc pl-6 mt-2">
                <li>Launching $COIN 2.0 (it's the same but with a 2)</li>
                <li>Creating a metaverse where you can lose virtual $COIN</li>
                <li>Partnering with Elon Musk to tweet about us (maybe)</li>
              </ul>
            </p>
            <div className="mt-4">
              <button 
                className="bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600 transition-colors"
                onClick={() => alert('You just flipped a coin! Heads: You win! Tails: You also win!')}
              >
                Flip a $COIN!
              </button>
            </div>
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
