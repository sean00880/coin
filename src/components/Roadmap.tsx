"use client";
import React from "react";
import Image from "next/image";

const RoadmapSection: React.FC = () => {
  const roadmapPhases = [
    {
      phase: "Restore the forgotten honor",
      description: "As the oldest meme coin in the world, Bellscoin aims to revive its legacy.",
      image: "/images/phase3.png",
    },
    {
      phase: "Buy and HODL $BELLS",
      description: "Support Bellscoin by buying and holding. Join the community of believers.",
      image: "/images/phase1.gif",
    },
    {
      phase: "Buy More",
      description: "Buy more if you like Bellscoin! More Bells, more fun.",
      image: "/images/phase1.webp",
    },
    {
      phase: "Maybe make interesting things",
      description:
        "Explore opportunities like Op_cat on Bellscoin Layer 1. Who knows what the future holds?",
      image: "/images/bellscoin3.webp",
    },
  ];

  return (
    <section className="m-20 rounded-3xl border-white border-4 roadmap-section flex flex-col bg-fixed py-16 px-4 md:px-8 bg-gradient-to-b from-blue-300 to-blue-700 text-white relative">
      {/* Section Title */}
      <h2 className="text-center text-4xl md:text-6xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">
        Roadmap
      </h2>

      {/* Roadmap Phases */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {roadmapPhases.map((item, index) => (
          <div
            key={index}
            className="group relative bg-black/50 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            {/* Image */}
            <div className="relative h-40 w-full overflow-hidden rounded-lg mb-4">
              <Image
                src={item.image}
                alt={`Phase ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Phase Content */}
            <h3 className="text-2xl font-bold mb-2 group-hover:text-yellow-300 transition-colors duration-300">
              {item.phase}
            </h3>
            <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
              {item.description}
            </p>

            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-transparent to-yellow-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>

      {/* Floating Decorative Clouds */}
      <div className="absolute top-10 left-10 animate-float">
        <span className="text-white text-6xl font-bold">☁️</span>
      </div>
      <div className="absolute top-20 right-20 animate-float">
        <span className="text-white text-5xl font-bold">☁️</span>
      </div>

      {/* Styling */}
      <style jsx>{`
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

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default RoadmapSection;
