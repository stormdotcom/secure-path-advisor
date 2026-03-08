import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-7 w-7 text-accent" />
              <span className="text-xl font-bold font-display">PrimeCover</span>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Trusted insurance advisory in the UAE. Helping individuals and
              families find the best insurance coverage.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Insurance Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li>Health Insurance</li>
              <li>Vehicle Insurance</li>
              <li>Life Insurance</li>
              <li>Travel Insurance</li>
              <li>Business Insurance</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Locations</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li>Dubai</li>
              <li>Abu Dhabi</li>
              <li>Sharjah</li>
              <li>Ajman</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li>+971 50 123 4567</li>
              <li>info@primecover.ae</li>
              <li className="pt-2">
                <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center text-sm text-primary-foreground/40">
          © {new Date().getFullYear()} PrimeCover Insurance Advisory. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
