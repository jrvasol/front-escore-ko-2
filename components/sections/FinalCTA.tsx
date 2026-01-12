"use client";

import { getAssetPath } from "@/lib/basePath";
import { motion } from "framer-motion";
import AppStoreBadge from "../ui/AppStoreBadge";
import GooglePlayBadge from "../ui/GooglePlayBadge";

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
          className="absolute inset-0 w-full h-full object-cover"
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
          Never Miss a Moment.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          Get real-time scores and stats wherever you are.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
            whileTap={{ scale: 0.95 }}
            className="relative inline-block transition-all"
          >
            <div className="absolute -inset-2 bg-[#c8ff01] rounded-xl blur-xl opacity-30"></div>
            <div className="relative">
              <AppStoreBadge />
            </div>
          </motion.a>

          <motion.a
            href="#"
            whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
            whileTap={{ scale: 0.95 }}
            className="relative inline-block transition-all"
          >
            <div className="absolute -inset-2 bg-[#c8ff01] rounded-xl blur-xl opacity-30"></div>
            <div className="relative">
              <GooglePlayBadge />
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
