"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import FadeInUp from "../animations/FadeInUp";

const stats = [
  {
    value: "10K+",
    label: "Matches Tracked",
    suffix: "K+",
    startValue: 0,
    endValue: 10,
  },
  {
    value: "50+",
    label: "Sports & Leagues",
    suffix: "+",
    startValue: 0,
    endValue: 50,
  },
  {
    value: "Real-time",
    label: "Data Updates",
    suffix: "",
    startValue: 0,
    endValue: 0,
    isText: true,
  },
  {
    value: "99.9%",
    label: "Uptime",
    suffix: "%",
    startValue: 0,
    endValue: 99.9,
  },
];

function AnimatedCounter({
  endValue,
  suffix = "",
  duration = 2,
  isText = false,
}: {
  endValue: number;
  suffix?: string;
  duration?: number;
  isText?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView || isText) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min(
        (currentTime - startTime) / (duration * 1000),
        1
      );

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = endValue * easeOutQuart;

      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(endValue);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, endValue, duration, isText]);

  if (isText) {
    return <span>Real-time</span>;
  }

  return (
    <span ref={ref}>
      {endValue >= 100
        ? `${Math.floor(displayValue)}${suffix}`
        : `${displayValue.toFixed(1)}${suffix}`}
    </span>
  );
}

export default function DataCredibility() {
  return (
    <section className="relative py-24 sm:py-32 bg-gray-950">
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
          {stats.map((stat, index) => (
            <FadeInUp key={stat.label} delay={index * 0.1}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center group cursor-default"
              >
                <div className="relative mb-4">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-[#c8ff01]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.15,
                      type: "spring",
                      stiffness: 100,
                    }}
                    className="relative"
                  >
                    <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#c8ff01] mb-2">
                      {stat.isText ? (
                        <motion.span
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 }}
                        >
                          Real-time
                        </motion.span>
                      ) : (
                        <AnimatedCounter
                          endValue={stat.endValue}
                          suffix={stat.suffix}
                          duration={2}
                        />
                      )}
                    </div>

                    {/* Animated underline */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                      className="h-0.5 bg-[#c8ff01] mx-auto mt-2"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                    className="text-sm sm:text-base text-gray-400 uppercase tracking-wider mt-4"
                  >
                    {stat.label}
                  </motion.div>
                </div>
              </motion.div>
            </FadeInUp>
          ))}
        </div>

        {/* Animated divider lines */}
        <motion.div
          className="mt-16 sm:mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent origin-center"
              />
            ))}
          </div>
        </motion.div>

        {/* Enhanced data visualization */}
        <FadeInUp delay={0.6}>
          <div className="mt-16 sm:mt-20 flex items-center justify-center">
            <div className="w-full max-w-2xl">
              <div className="space-y-4">
                {/* Animated line chart with pulse effect */}
                <div className="flex items-end justify-between h-32 gap-2 relative">
                  {/* Background grid lines */}
                  <div className="absolute inset-0 flex flex-col justify-between opacity-20">
                    {[0, 1, 2, 3].map((i) => (
                      <div key={i} className="h-px bg-gray-700"></div>
                    ))}
                  </div>

                  {[0.3, 0.6, 0.4, 0.8, 0.5, 0.7, 0.9, 0.6, 0.8, 1.0].map(
                    (height, index) => (
                      <motion.div
                        key={index}
                        initial={{ height: 0, opacity: 0 }}
                        whileInView={{
                          height: `${height * 100}%`,
                          opacity: 1,
                        }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.8,
                          delay: 0.7 + index * 0.05,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        whileHover={{
                          scale: 1.1,
                          filter: "brightness(1.2)",
                        }}
                        className="flex-1 bg-gradient-to-t from-[#c8ff01]/30 via-[#c8ff01]/20 to-[#c8ff01]/40 rounded-t relative group cursor-pointer"
                      >
                        {/* Glow effect on hover */}
                        <div className="absolute inset-0 bg-[#c8ff01] rounded-t opacity-0 group-hover:opacity-20 blur-sm transition-opacity"></div>
                      </motion.div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
