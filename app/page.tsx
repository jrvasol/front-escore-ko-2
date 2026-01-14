import Hero from "@/components/sections/Hero";
import GamesMarquee from "@/components/sections/GamesMarquee";
import ValueProposition from "@/components/sections/ValueProposition";
import FeatureHighlights from "@/components/sections/FeatureHighlights";
import DataCredibility from "@/components/sections/DataCredibility";
import PricingTable from "@/components/sections/PricingTable";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <GamesMarquee />
      <ValueProposition />
      <FeatureHighlights />
      <DataCredibility />
      <PricingTable />
      <FinalCTA />
      <Footer />
    </main>
  );
}
