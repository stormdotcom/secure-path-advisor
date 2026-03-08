import { Heart, Car, Shield, Plane, Building2 } from "lucide-react";
import InsuranceCard from "@/components/InsuranceCard";

const services = [
  {
    icon: Heart,
    title: "Health Insurance",
    description: "Comprehensive medical insurance plans covering hospitalisation, emergency care, and family health protection.",
    features: ["Individual & family plans", "UAE hospital network", "Affordable premiums"],
  },
  {
    icon: Car,
    title: "Vehicle Insurance",
    description: "Reliable car insurance coverage for drivers in UAE including accident protection and third party liability.",
    features: ["Comprehensive coverage", "Third party insurance", "Quick claims process"],
  },
  {
    icon: Shield,
    title: "Life Insurance",
    description: "Secure your family's financial future with tailored life insurance plans.",
    features: ["Term life plans", "Long-term protection", "Investment-linked policies"],
  },
  {
    icon: Plane,
    title: "Travel Insurance",
    description: "Travel safely with international travel insurance covering medical emergencies and trip protection.",
    features: ["Worldwide coverage", "Medical emergencies", "Trip cancellation"],
  },
  {
    icon: Building2,
    title: "Business Insurance",
    description: "Protect your business operations, employees, and assets with tailored commercial insurance.",
    features: ["Employee coverage", "Asset protection", "Liability insurance"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3 mb-4">
            Insurance Solutions for Every Need
          </h2>
          <p className="text-muted-foreground text-lg">
            We offer comprehensive insurance advisory services to protect you,
            your family, and your business in the UAE.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <InsuranceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
