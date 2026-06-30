import Hero from "@/components/sections/Hero";
import Trust from "@/components/sections/Trust";
import About from "@/components/sections/About";
import ServicesPreview from "@/components/sections/ServicesPreview";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Process from "@/components/sections/Process";
import PortfolioPreview from "@/components/sections/PortfolioPreview";
import TestimonialsPreview from "@/components/sections/TestimonialsPreview";
import CTABand from "@/components/sections/CTABand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Trust />
      <About />
      <ServicesPreview />
      <WhyChooseUs />
      <Process />
      <PortfolioPreview />
      <TestimonialsPreview />
      <CTABand />
    </>
  );
}