import Hero from "@/components/sections/Hero";
import ValueProposition from "@/components/sections/ValueProposition";
import FeatureHighlights from "@/components/sections/FeatureHighlights";
import DataCredibility from "@/components/sections/DataCredibility";
import AppPreview from "@/components/sections/AppPreview";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <ValueProposition />
      <FeatureHighlights />
      <DataCredibility />
      <AppPreview />
      <FinalCTA />
      <Footer />
    </main>
  );
}
