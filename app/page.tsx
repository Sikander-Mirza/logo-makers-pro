import Hero from "./components/Hero";
import PortfolioSection from "./components/PortfolioSection";
import ServicesSection from "./components/ServicesSection";
import WhoWeAre from "./components/WhoWeAre";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhoWeAre />
      <ServicesSection/>
      <PortfolioSection/>
      {/* More sections coming */}
    </main>
  );
}