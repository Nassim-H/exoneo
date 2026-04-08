import Hero from "./components/Hero";
import CabinetSection from "./components/CabinetSection";
import AudienceSection from "./components/AudienceSection";
import CitationSection from "./components/CitationSection";
import TestimonialSection from "./components/TestimonialSection";
import InfosSection from "./components/InfosSection";
import ExpertiseSection from "./components/ExpertiseSection";
import DemarcheSection from "./components/DemarcheSection";
import Navbar from "./components/NavBar";
import RdvSection from "./components/RdvSection";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AudienceSection />
        <CitationSection />
        <TestimonialSection />
        <InfosSection />
        <ExpertiseSection />
        <DemarcheSection />
        <CabinetSection />
        <RdvSection />
        <Faq />
      </main>
      <Footer />
    </>
  );
}