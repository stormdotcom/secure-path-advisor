import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  rating: number;
}

const TestimonialCard = ({ quote, name, role, rating }: TestimonialCardProps) => {
  return (
    <div className="bg-card rounded-2xl p-8 shadow-card border border-border hover:shadow-card-hover transition-all duration-300">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${i < rating ? "text-accent fill-accent" : "text-border"}`}
          />
        ))}
      </div>
      <p className="text-foreground leading-relaxed mb-6 italic">"{quote}"</p>
      <div>
        <div className="font-semibold text-foreground">{name}</div>
        <div className="text-sm text-muted-foreground">{role}</div>
      </div>
    </div>
  );
};

export default TestimonialCard;
