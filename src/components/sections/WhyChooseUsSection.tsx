import { UserCheck, GitCompare, Target, Eye, Zap } from "lucide-react";

const reasons = [
  { icon: UserCheck, title: "Independent Advisor", desc: "Unbiased advice from a licensed, independent insurance professional." },
  { icon: GitCompare, title: "Compare Multiple Providers", desc: "Access plans from 10+ top insurance companies in the UAE." },
  { icon: Target, title: "Personalized Recommendations", desc: "Tailored insurance plans that match your needs and budget." },
  { icon: Eye, title: "Transparent Advice", desc: "No hidden fees or commissions — just honest, clear guidance." },
  { icon: Zap, title: "Fast Claim Support", desc: "Dedicated assistance throughout the claims process." },
];

const WhyChooseUsSection = () => {
  return (
    <section id="why-us" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">Why PrimeCover</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3 mb-4">
            Why Clients Choose Us
          </h2>
          <p className="text-muted-foreground text-lg">
            We go beyond selling insurance — we build lasting relationships based on trust and expertise.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="flex gap-4 p-6 rounded-xl bg-card border border-border hover:shadow-card-hover transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <r.icon className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{r.title}</h3>
                <p className="text-sm text-muted-foreground">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
