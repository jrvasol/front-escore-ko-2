"use client";

import FadeInUp from "../animations/FadeInUp";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AppPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 5]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, -3]);

  return (
    <section ref={ref} className="relative py-24 sm:py-32 bg-gray-950 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <FadeInUp>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-16 sm:mb-20">
            Designed for Speed.
            <br />
            Built for Fans.
          </h2>
        </FadeInUp>

        <div className="flex items-center justify-center gap-4 sm:gap-8">
          {/* Phone mockups - using placeholder approach */}
          <FadeInUp delay={0.1} className="hidden sm:block">
            <motion.div
              style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
              }}
              className="perspective-1000"
            >
              <div className="relative w-48 sm:w-56 md:w-64">
                {/* Phone frame */}
                <div className="relative bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl border border-gray-800">
                  {/* Screen */}
                  <div className="aspect-[9/19.5] bg-black rounded-[2rem] overflow-hidden">
                    {/* Placeholder UI - dark theme */}
                    <div className="h-full bg-gradient-to-b from-gray-900 to-black p-4">
                      <div className="space-y-3">
                        <div className="h-4 bg-gray-800 rounded w-3/4"></div>
                        <div className="h-20 bg-[#1a1a1a] rounded"></div>
                        <div className="space-y-2">
                          <div className="h-3 bg-gray-800 rounded w-full"></div>
                          <div className="h-3 bg-gray-800 rounded w-5/6"></div>
                          <div className="h-3 bg-gray-800 rounded w-4/6"></div>
                        </div>
                        <div className="h-16 bg-[#c8ff01]/10 border border-[#c8ff01]/20 rounded"></div>
                      </div>
                    </div>
                  </div>
                  {/* Notch */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-full"></div>
                </div>
              </div>
            </motion.div>
          </FadeInUp>

          {/* Single phone for mobile */}
          <FadeInUp className="sm:hidden">
            <div className="relative w-48">
              <div className="relative bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl border border-gray-800">
                <div className="aspect-[9/19.5] bg-black rounded-[2rem] overflow-hidden">
                  <div className="h-full bg-gradient-to-b from-gray-900 to-black p-4">
                    <div className="space-y-3">
                      <div className="h-4 bg-gray-800 rounded w-3/4"></div>
                      <div className="h-20 bg-[#1a1a1a] rounded"></div>
                      <div className="space-y-2">
                        <div className="h-3 bg-gray-800 rounded w-full"></div>
                        <div className="h-3 bg-gray-800 rounded w-5/6"></div>
                        <div className="h-3 bg-gray-800 rounded w-4/6"></div>
                      </div>
                      <div className="h-16 bg-[#c8ff01]/10 border border-[#c8ff01]/20 rounded"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-full"></div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
