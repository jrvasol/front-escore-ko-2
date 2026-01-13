"use client";

import { getAssetPath } from "@/lib/basePath";
import { motion } from "framer-motion";
import Image from "next/image";
import FadeInUp from "../animations/FadeInUp";

const games = [
  { name: "League of Legends", image: "/game-icons/lol.png" },
  { name: "Dota 2", image: "/game-icons/dota-2.png" },
  { name: "CS2", image: "/game-icons/cs2.png" },
  { name: "Valorant", image: "/game-icons/valorant.png" },
  { name: "Mobile Legends", image: "/game-icons/mlbb.png" },
  { name: "PUBG: Battlegrounds", image: "/game-icons/pubg.png" },
  { name: "Rocket League", image: "/game-icons/rocket-league.png" },
  { name: "Rainbow Six Siege", image: "/game-icons/rainbow-six-siege.png" },
  { name: "Overwatch 2", image: "/game-icons/overwatch.png" },
  { name: "Call of Duty", image: "/game-icons/cod.png" },
];

// Create multiple copies for seamless infinite loop
const duplicatedGames = [...games, ...games, ...games];

export default function GamesMarquee() {
  return (
    <section className="relative py-16 sm:py-24 bg-black overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <FadeInUp>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-12 sm:mb-16">
            Supported E-Sports Games
          </h2>
        </FadeInUp>

        {/* Marquee Container */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-8 sm:gap-12 md:gap-16"
            animate={{
              x: ["0%", "-33.333%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
            style={{
              width: "fit-content",
            }}
          >
            {duplicatedGames.map((game, index) => (
              <div
                key={`game-${index}`}
                className="shrink-0 w-48 sm:w-56 md:w-64 h-24 sm:h-28 md:h-32 flex items-center justify-center group cursor-pointer"
              >
                {/* Logo container */}
                <div className="relative w-full h-full flex items-center justify-center p-4 transition-all duration-300 overflow-hidden">
                  {/* Grayscale filter by default, removed on hover */}
                  <div className="absolute inset-0 z-10 opacity-50 group-hover:bg-transparent transition-all duration-300" />

                  {/* Game logo image */}
                  <Image
                    src={getAssetPath(game.image)}
                    alt={game.name}
                    width={200}
                    height={80}
                    className="relative z-0 w-full h-full object-contain grayscale transition-all duration-300 opacity-60 hover:opacity-100"
                  />

                  {/* Glow effect on hover */}
                  <div className="absolute inset-0  rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
