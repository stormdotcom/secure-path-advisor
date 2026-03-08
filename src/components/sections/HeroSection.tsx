import { Button } from "@/components/ui/button";
import { Shield, Users, Building2, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { icon: Shield, label: "Licensed Insurance Advisor", value: "" },
  { icon: Building2, label: "10+ Insurance Providers", value: "" },
  { icon: Users, label: "500+ Clients Assisted", value: "" },
];

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 gradient-hero opacity-85" />

      <div className="relative container mx-auto px-4 py-32">
        <div className="max-w-3xl">
          <div
            className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 mb-8 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <Shield className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent">Trusted Insurance Advisory</span>
          </div>

          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground leading-tight mb-6 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Protect What{" "}
            <span className="text-gradient">Matters Most</span>
          </h1>

          <p
            className="text-lg md:text-xl text-primary-foreground/70 max-w-xl mb-10 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.35s" }}
          >
            Trusted Insurance Advisor in UAE helping individuals and families
            choose the right coverage for health, vehicle, life, and travel insurance.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 mb-16 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            <a href="#contact">
              <Button variant="hero" size="lg" className="text-base px-8">
                Get Free Consultation <ArrowRight className="ml-1 h-5 w-5" />
              </Button>
            </a>
            <a href="#services">
              <Button variant="hero-outline" size="lg" className="text-base px-8">
                Compare Insurance Plans
              </Button>
            </a>
          </div>

          <div
            className="flex flex-wrap gap-6 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.65s" }}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-3 bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-lg px-5 py-3"
              >
                <stat.icon className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium text-primary-foreground/90">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
