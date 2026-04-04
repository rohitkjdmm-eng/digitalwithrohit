import Navbar from "./Navbar";
import Hero from "./Hero";
import MarketingAnimation from "./MarketingAnimation";
import About from "./About";
import PortfolioSkills from "./PortfolioSkills";
import Training from "./Training";
import Projects from "./Projects";
import EducationCertifications from "./EducationCertifications";
import Contact from "./Contact";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-dark-bg selection:bg-primary-blue selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <MarketingAnimation />
        <About />
        <PortfolioSkills />
        <Training />
        <Projects />
        <EducationCertifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
