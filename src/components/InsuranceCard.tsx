import { LucideIcon } from "lucide-react";

interface InsuranceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

const InsuranceCard = ({ icon: Icon, title, description, features }: InsuranceCardProps) => {
  return (
    <div className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border">
      <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="h-7 w-7 text-accent-foreground" />
      </div>
      <h3 className="text-xl font-display font-bold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-5">{description}</p>
      <ul className="space-y-2">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
            <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InsuranceCard;
