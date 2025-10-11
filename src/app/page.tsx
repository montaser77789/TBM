import AboutSection from "./_components/AboutSection";
import BoardOfAdvisory from "./_components/BoardOfAdvisory";
import ContactUs from "./_components/ContactUs";
import Footer from "./_components/Footer";
import HaveAquestion from "./_components/HaveAquestion";
import Header from "./_components/Header";
import HeroSection from "./_components/HeroSection";
import OurIntegrated from "./_components/OurIntegrated";
import OurNumbers from "./_components/OurNumbers";
import OurVision from "./_components/OurVision";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <AboutSection />
      <OurVision />
      <BoardOfAdvisory />
      <OurIntegrated />
      <OurNumbers />
      <HaveAquestion />
      <ContactUs />
      <Footer />
    </main>
  );
}
