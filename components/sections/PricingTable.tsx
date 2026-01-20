"use client";

import { Check } from "lucide-react";
import FadeInUp from "../animations/FadeInUp";
import Button from "../ui/Button";

const pricingTiers = [
  {
    name: "Pro",
    price: "$5,000",
    period: "month",
    requestLimit: "Unlimited",
    supportedGames: "All games",
    oddsType: "Live + Pre-match",
    updateFrequency: "Real-time",
    supportLevel: "Priority support",
    sla: null,
    cta: "Get API Access",
    ctaHref: "#pricing",
    recommended: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    requestLimit: "Unlimited",
    supportedGames: "All games",
    oddsType: "Live + Pre-match",
    updateFrequency: "Real-time",
    supportLevel: "Dedicated support",
    sla: "99.9% SLA",
    cta: "Contact Sales",
    ctaHref: "#contact",
    recommended: false,
  },
];

export default function PricingTable() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32 bg-gray-950">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <FadeInUp>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Pricing Plans
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Choose the plan that fits your platform's needs. All plans include
            comprehensive API documentation and developer support.
          </p>
        </FadeInUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <FadeInUp key={tier.name} delay={index * 0.1}>
              <div
                className={`relative rounded-2xl border transition-all duration-300 h-full flex flex-col ${
                  tier.recommended
                    ? "bg-gray-900 border-[#c8ff01] shadow-[0_0_30px_rgba(200,255,1,0.1)] scale-105"
                    : "bg-gray-900 border-gray-800 hover:border-gray-700"
                }`}
              >
                {/* Recommended Badge */}
                {tier.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-[#c8ff01] text-black text-xs font-semibold px-4 py-1 rounded-full uppercase tracking-wider">
                      Recommended
                    </span>
                  </div>
                )}

                <div className="p-6 sm:p-8 flex flex-col flex-grow">
                  {/* Plan Name */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    {tier.name}
                  </h3>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl sm:text-5xl font-bold text-[#c8ff01]">
                        {tier.price}
                      </span>
                      {tier.period && (
                        <span className="text-gray-400 text-lg">
                          /{tier.period}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-4 mb-8 flex-grow">
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#c8ff01] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-gray-300 font-medium">
                          {tier.requestLimit}
                        </span>
                        {tier.requestLimit !== "Unlimited" && (
                          <span className="text-gray-500"> API requests</span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#c8ff01] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-gray-300 font-medium">
                          {tier.supportedGames}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#c8ff01] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-gray-300 font-medium">
                          {tier.oddsType}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#c8ff01] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-gray-300 font-medium">
                          {tier.updateFrequency}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#c8ff01] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-gray-300 font-medium">
                          {tier.supportLevel}
                        </span>
                      </div>
                    </div>

                    {tier.sla && (
                      <div className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#c8ff01] shrink-0 mt-0.5" />
                        <div>
                          <span className="text-gray-300 font-medium">
                            {tier.sla}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* CTA Button */}
                  <Button
                    href={tier.ctaHref}
                    variant={tier.recommended ? "primary" : "secondary"}
                    className="w-full py-3 text-center mt-auto"
                  >
                    {tier.cta}
                  </Button>
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
