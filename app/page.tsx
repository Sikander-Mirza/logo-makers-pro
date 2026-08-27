
import Hero from "./components/Hero";
import HorizontalScrollSection from "./components/HomePage/HorizontalScrollSection";
import PortfolioSection from "./components/HomePage/PortfolioSection";
import PricingPackages from "./components/HomePage/PricingPackages";
import ReviewsSection from "./components/HomePage/ReviewsSection";
import ServicesSection from "./components/HomePage/ServicesSection";
import WhoWeAre from "./components/HomePage/WhoWeAre";

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