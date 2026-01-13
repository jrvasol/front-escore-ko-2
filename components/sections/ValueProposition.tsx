"use client";

import FadeInUp from "../animations/FadeInUp";

export default function ValueProposition() {
  return (
    <section className="relative py-24 sm:py-32 bg-gray-950">
      <div className="w-full max-w-4xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <FadeInUp>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-12">
            Everything You Need.
            <br />
            <span className="text-gray-500">Nothing You Don't.</span>
          </h2>
        </FadeInUp>

        <div className="space-y-6 text-center w-full">
          <FadeInUp delay={0.1}>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              #API delivers instant access to live sports data without the
              clutter. No ads. No distractions. Just the scores, stats, and
              schedules you need, when you need them.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
              Built for speed and reliability, #API ensures you're always up to
              date with real-time updates across all major sports and e-sports
              leagues.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
              Clean, intuitive design means you get the information you're
              looking for in seconds — not minutes.
            </p>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
