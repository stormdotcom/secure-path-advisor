import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.15),transparent_50%)]" />
      <div className="relative container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground mb-6">
          Get the Best Insurance Plan Today
        </h2>
        <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto mb-10">
          Let us help you find the perfect coverage. Book a free consultation
          and compare plans from top UAE insurance providers.
        </p>
        <a href="#contact">
          <Button variant="hero" size="lg" className="text-base px-10">
            Book Free Consultation <ArrowRight className="ml-1 h-5 w-5" />
          </Button>
        </a>
      </div>
    </section>
  );
};

export default CTASection;
