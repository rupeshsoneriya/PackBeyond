import HeroSection from "@/components/sections/home/HeroSection";
import FeaturedServicesSection from "@/components/sections/home/FeaturedServicesSection";
import HowItWorksSection from "@/components/sections/home/HowItWorksSection";
import TestimonialsSection from "@/components/sections/home/TestimonialsSection";
import SolutionsSection from "@/components/sections/home/SolutionsSection";
import ServicesSection from "@/components/sections/home/ServicesSection";
import ResourcesSection from "@/components/sections/home/ResourcesSection";
import InstagramSection from "@/components/sections/home/InstagramSection";
import FAQSection from "@/components/sections/home/FAQSection";

export default function Home() {
  return (
    <div className="pb-55">
      <HeroSection />
       <FeaturedServicesSection /> 
      <HowItWorksSection />
     <TestimonialsSection />
      <SolutionsSection />
    <ServicesSection />
    <ResourcesSection />
    <FAQSection />
         <InstagramSection />
    </div>
  );
}
