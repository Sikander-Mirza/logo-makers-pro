
import Hero from "./components/Hero";
import HorizontalScrollSection from "./components/HorizontalScrollSection";
import PortfolioSection from "./components/PortfolioSection";
import PricingPackages from "./components/PricingPackages";
import ReviewsSection from "./components/ReviewsSection";
import ServicesSection from "./components/ServicesSection";
import WhoWeAre from "./components/WhoWeAre";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhoWeAre />
      <ServicesSection/>
      <PortfolioSection/>
      <PricingPackages/>
      <HorizontalScrollSection/>
      <ReviewsSection/>
      
    </main>
  );
}