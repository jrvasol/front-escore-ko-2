"use client";

import FadeInUp from "../animations/FadeInUp";

export default function ValueProposition() {
  return (
    <section className="relative py-24 sm:py-32 bg-gray-950">
      <div className="w-full max-w-4xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <FadeInUp>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-12">
            Enterprise-Grade API.
            <br />
            <span className="text-gray-500">Built for Scale.</span>
          </h2>
        </FadeInUp>

        <div className="space-y-6 text-center w-full">
          <FadeInUp delay={0.1}>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Real-time odds delivery with ultra-low latency. Our infrastructure
              is designed to handle millions of requests while maintaining
              sub-100ms response times.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
              Scalable architecture that grows with your platform.
              Developer-friendly REST endpoints with comprehensive documentation
              and dedicated support.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
              99.9% uptime SLA with reliable infrastructure built for
              mission-critical betting platforms and e-sports analytics
              services.
            </p>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
