import TestimonialCard from "@/components/TestimonialCard";

const testimonials = [
  {
    quote: "Excellent insurance advisor. Helped me choose the best health insurance for my family in Dubai. Highly recommend!",
    name: "Ahmed Al Maktoum",
    role: "Business Owner, Dubai",
    rating: 5,
  },
  {
    quote: "Very professional and knowledgeable. Got me a great deal on comprehensive car insurance with full coverage.",
    name: "Sarah Johnson",
    role: "Marketing Manager, Abu Dhabi",
    rating: 5,
  },
  {
    quote: "PrimeCover made insurance simple. They compared multiple providers and found the perfect life insurance plan for us.",
    name: "Rajesh Sharma",
    role: "IT Consultant, Sharjah",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Trusted by hundreds of individuals and families across the UAE.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
