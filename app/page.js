import Footer from "@/components/Footer";
import Header from "@/components/Header";
import BusinessSection from "@/components/sections/BusinessSection";
import ConsultationSection from "@/components/sections/ConsultationSection";
import FaqSection from "@/components/sections/FaqSection";
import HeroSection from "@/components/sections/HeroSection";
import PartnerSection from "@/components/sections/PartnerSection";
import RecommendationSection from "@/components/sections/RecommendationSection";
import WeOfferSection from "@/components/sections/WeOfferSection";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <HeroSection />
        <BusinessSection />
        <WeOfferSection />
        <RecommendationSection />
        <FaqSection />
        <PartnerSection />
        <ConsultationSection />
      </main>
      <Footer />
    </div>
  );
}
