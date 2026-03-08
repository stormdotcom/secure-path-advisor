import { Helmet } from "react-helmet-async";
import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Best Insurance Advisor in UAE | Health, Vehicle & Life Insurance</title>
        <meta
          name="description"
          content="Trusted insurance advisor in UAE helping individuals and families find the best health, vehicle, life, and travel insurance plans. Free consultation available."
        />
        <meta name="keywords" content="UAE insurance agent, best insurance advisor UAE, health insurance UAE, vehicle insurance UAE, life insurance UAE, Dubai insurance advisor, Abu Dhabi insurance consultant" />
        <link rel="canonical" href="https://primecover.ae" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "InsuranceAgency",
            name: "PrimeCover Insurance Advisory",
            description: "Trusted insurance advisor in UAE",
            url: "https://primecover.ae",
            areaServed: ["Dubai", "Abu Dhabi", "Sharjah"],
            telephone: "+971501234567",
            address: {
              "@type": "PostalAddress",
              addressCountry: "AE",
              addressRegion: "Dubai",
            },
          })}
        </script>
      </Helmet>

      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <ComparisonSection />
        <TestimonialsSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Index;
