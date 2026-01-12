"use client";

import { motion } from "framer-motion";
import { Activity, BarChart3, Calendar, Trophy } from "lucide-react";
import Image from "next/image";
import FadeInUp from "../animations/FadeInUp";

const features = [
  {
    icon: Activity,
    title: "Real-Time LIVE SCORE",
    description: "Real-time match situation anytime, anywhere.",
    image: "/app-preview-1.png",
  },
  {
    icon: Calendar,
    title: "Match Schedule at a Glance",
    description: "View schedules across all sports and e-sports easily.",
    image: "/app-preview-2.png",
  },
  {
    icon: BarChart3,
    title: "Detailed Match Information",
    description: "Deep statistics and event timelines.",
    image: "/app-preview-3.png",
  },
  {
    icon: Trophy,
    title: "Rankings & Standings",
    description: "League standings and scoring rankings at a glance.",
    image: "/app-preview-4.png",
  },
];

export default function FeatureHighlights() {
  return (
    <section id="features" className="relative py-24 sm:py-32 bg-black">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="space-y-16 sm:space-y-24">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isEven = index % 2 === 1; // Alternate layout

            return (
              <FadeInUp key={feature.title} delay={index * 0.1}>
                <div
                  className={`flex flex-col ${
                    isEven ? "lg:flex-row-reverse" : "lg:flex-row"
                  } items-center gap-8 lg:gap-12`}
                >
                  {/* Text Content */}
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    className={`flex-1 ${
                      isEven ? "lg:text-right" : "lg:text-left"
                    } text-center lg:text-left`}
                  >
                    <div
                      className={`mb-6 ${
                        isEven ? "lg:flex lg:justify-end" : ""
                      }`}
                    >
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#1a1a1a] flex items-center justify-center inline-flex">
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#c8ff01]" />
                      </div>
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>

                  {/* App Preview Image */}
                  <div className="flex-1 w-full">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="relative rounded-2xl overflow-hidden"
                    >
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        width={600}
                        height={1200}
                        className="w-full h-auto"
                        priority={index < 2}
                      />
                    </motion.div>
                  </div>
                </div>
              </FadeInUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
