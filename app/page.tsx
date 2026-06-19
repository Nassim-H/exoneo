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
import LogoMarquee from "./components/Logo";
import Hero2 from "./components/Hero2";

export const metadata = {
  title: "Avocats fiscalistes pour freelances, professions libérales et TPE/PME",
  description:
    "Réduisez votre charge fiscale avec Exonéo, cabinet d’avocats fiscalistes accompagnant freelances, professions libérales et TPE/PME en France et au Luxembourg.",
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero2 />
        <LogoMarquee />
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