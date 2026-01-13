"use client";

import { getAssetPath } from "@/lib/basePath";
import { motion } from "framer-motion";
import Button from "../ui/Button";

export default function FinalCTA() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-position-[50%_30%]"
        >
          <source src={getAssetPath("/footer-bg.mp4")} type="video/mp4" />
        </video>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Glow effect behind CTA */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute w-full max-w-2xl h-96 bg-[#c8ff01]/10 rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
        >
          Ready to Integrate?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          Start building with our reliable E-Sports odds API today. Get access
          to real-time data and scale your platform with confidence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            href="#pricing"
            variant="primary"
            className="px-8 py-4 text-lg"
          >
            Get API Access
          </Button>
          <Button
            href="#docs"
            variant="text"
            className="text-gray-400 hover:text-white"
          >
            View Documentation
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
