import { CheckCircle } from "lucide-react";

const focusAreas = [
  "Life Insurance",
  "Health Insurance",
  "Vehicle Insurance",
  "Family Protection Plans",
  "Business Insurance",
  "Travel Insurance",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">About Us</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3 mb-6">
              Your Trusted Insurance Advisor
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              As an independent insurance advisor in the UAE, we help clients navigate
              the complex insurance landscape by comparing plans from multiple top-rated
              providers. Our goal is to find the best coverage at the most competitive
              premiums — tailored to your unique needs.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              With years of experience in the UAE insurance market and partnerships with
              10+ leading insurance companies, we provide transparent, unbiased advice
              that puts your family's security first.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {focusAreas.map((area) => (
                <div key={area} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">{area}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-muted rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 gradient-accent opacity-10 rounded-bl-full" />
              <div className="space-y-8">
                <div className="text-center">
                  <div className="text-5xl font-bold font-display text-gradient mb-2">500+</div>
                  <div className="text-muted-foreground text-sm">Clients Assisted</div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center bg-card rounded-xl p-6 shadow-card">
                    <div className="text-3xl font-bold font-display text-foreground mb-1">10+</div>
                    <div className="text-muted-foreground text-xs">Insurance Providers</div>
                  </div>
                  <div className="text-center bg-card rounded-xl p-6 shadow-card">
                    <div className="text-3xl font-bold font-display text-foreground mb-1">98%</div>
                    <div className="text-muted-foreground text-xs">Client Satisfaction</div>
                  </div>
                  <div className="text-center bg-card rounded-xl p-6 shadow-card">
                    <div className="text-3xl font-bold font-display text-foreground mb-1">5+</div>
                    <div className="text-muted-foreground text-xs">Years Experience</div>
                  </div>
                  <div className="text-center bg-card rounded-xl p-6 shadow-card">
                    <div className="text-3xl font-bold font-display text-foreground mb-1">24/7</div>
                    <div className="text-muted-foreground text-xs">Claims Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
