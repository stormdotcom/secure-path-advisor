import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phone = "971501234567";
  const message = encodeURIComponent("Hi, I'd like to get a free insurance consultation.");

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-accent flex items-center justify-center shadow-accent hover:scale-110 transition-transform duration-200"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-accent-foreground" />
    </a>
  );
};

export default WhatsAppButton;
