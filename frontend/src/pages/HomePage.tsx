import HeroSection from "@/components/home/HeroSection";
import Highlights from "@/components/home/Highlights";
import FeaturedVillas from "@/components/home/FeaturedVillas";
import AreaHighlights from "@/components/home/AreaHighlights";
import ExperienceSection from "@/components/home/ExperienceSection";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Highlights />
      <FeaturedVillas />
      <AreaHighlights />
      <ExperienceSection />
      <Testimonials />
      <CTASection />
    </>
  );
}
