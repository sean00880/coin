"use client";
import React from "react";
import Image from "next/image";

interface RoadmapPhase {
  phase: string;
  description: string;
  image: string;
}

const RoadmapSection: React.FC = () => {
  const roadmapPhases: RoadmapPhase[] = [
    {
      phase: "Genesis of $COIN: The Big Bang",
      description:
        "In the beginning, there was $COIN. Born from the cosmic dust of a thousand memes, $COIN embarks on a journey to unite the internet under one banner: sheer, unadulterated fun. First stop, getting listed on exchanges that don't even know what's coming.",
      image: "/images/coin2.gif",
    },
    {
      phase: "HODL and Prosper: The $COIN Way",
      description:
        "You bought $COIN? Smart move. Now, we HODL. Through bull markets and bear markets, through tweets and retweets, our diamond hands will not waver. Also, maybe tell your friends? We're not pushy, but $COIN is kinda a big deal.",
      image: "/images/coin3.gif",
    },
    {
      phase: "Meme Takeover: To Infinity and Beyond",
      description:
        "With our wallets full and our spirits high, we unleash the meme lords. Their mission: to spread the gospel of $COIN far and wide. Expect epic memes, viral tweets, and maybe a TikTok dance or two. The internet won't know what hit it.",
      image: "/images/coin4.gif",
    },
    {
      phase: "$COIN: The Future is Now",
      description:
        "What's next? World domination? A $COIN-themed amusement park? The first meme coin on Mars? The sky's the limit when you're fueled by memes and dreams. Buckle up, buttercup. It's going to be a wild ride.",
      image: "/images/coin5.gif",
    },
  ];

  return (
    <section
      className="m-20 rounded-3xl border-white border-4 roadmap-section flex flex-col bg-fixed py-16 px-4 md:px-8 text-white relative"
      style={{ backgroundImage: "url('/images/coin5.gif')" }}
    >
      {/* Section Title */}
      <h2 className="text-center text-4xl md:text-6xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
        Roadmap to the Moon
      </h2>

      {/* Roadmap Phases */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {roadmapPhases.map((item, index) => (
          <div
            key={index}
            className="group relative bg-black/80 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
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
            <h3 className="text-2xl font-bold mb-2 group-hover:text-yellow-200 transition-colors duration-300">
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

      {/* Floating Decorative Coins */}
      <div className="absolute top-10 left-10 animate-coin-float">
        <Image
          src="/icons/favicon.ico"
          alt="Coin"
          width={40}
          height={40}
          className="text-white"
        />
      </div>
      <div className="absolute top-20 right-20 animate-coin-float">
        <Image
          src="/icons/favicon.ico"
          alt="Coin"
          width={30}
          height={30}
          className="text-white"
        />
      </div>

      {/* Styling */}
      <style jsx>{`
        @keyframes coin-float {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(180deg);
          }
          100% {
            transform: translateY(0) rotate(360deg);
          }
        }

        .animate-coin-float {
          animation: coin-float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default RoadmapSection;
