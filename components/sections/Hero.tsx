"use client";

import { getAssetPath } from "@/lib/basePath";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={getAssetPath("/hero-banner.mp4")} type="video/mp4" />
        </video>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Gradient orbs for accent */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#c8ff01]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#c8ff01]/5 rounded-full blur-3xl"></div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(200,255,1,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(200,255,1,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-24 sm:py-32">
        <div className="text-center w-full">
          {/* App Logo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mb-4"
          >
            <Image
              src={getAssetPath("/app-logo.png")}
              alt="#API app logo"
              width={160}
              height={160}
              className="mx-auto h-32 w-32 sm:h-40 sm:w-40"
              priority
            />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6"
          >
            Real-Time E-Sports
            <br />
            <span className="text-[#c8ff01]">Odds API</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-8 text-pretty"
          >
            Scalable, reliable odds data for competitive E-Sports platforms.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <Button
              href="#pricing"
              variant="primary"
              className="px-8 py-4 text-lg"
            >
              Get API Access
            </Button>
          </motion.div>

          {/* Secondary CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button
              href="#docs"
              variant="text"
              className="text-gray-400 hover:text-white"
            >
              View Documentation
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
