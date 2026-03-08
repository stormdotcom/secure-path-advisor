import { useState } from "react";
import { Check, X } from "lucide-react";

type PlanType = "health" | "vehicle" | "life";

const plans: Record<PlanType, { provider: string; price: string; features: Record<string, boolean> }[]> = {
  health: [
    { provider: "BasicCare", price: "AED 3,500/yr", features: { "Inpatient": true, "Outpatient": true, "Dental": false, "Maternity": false, "International": false } },
    { provider: "MedPlus", price: "AED 6,200/yr", features: { "Inpatient": true, "Outpatient": true, "Dental": true, "Maternity": true, "International": false } },
    { provider: "PremiumHealth", price: "AED 12,000/yr", features: { "Inpatient": true, "Outpatient": true, "Dental": true, "Maternity": true, "International": true } },
  ],
  vehicle: [
    { provider: "DriveBasic", price: "AED 1,200/yr", features: { "Third Party": true, "Comprehensive": false, "Roadside Assist": false, "Agency Repair": false, "Rental Car": false } },
    { provider: "AutoGuard", price: "AED 2,800/yr", features: { "Third Party": true, "Comprehensive": true, "Roadside Assist": true, "Agency Repair": false, "Rental Car": false } },
    { provider: "EliteDrive", price: "AED 5,500/yr", features: { "Third Party": true, "Comprehensive": true, "Roadside Assist": true, "Agency Repair": true, "Rental Car": true } },
  ],
  life: [
    { provider: "LifeStart", price: "AED 2,000/yr", features: { "Term Life": true, "Critical Illness": false, "Investment": false, "Family Cover": false, "Education Fund": false } },
    { provider: "SecureLife", price: "AED 5,000/yr", features: { "Term Life": true, "Critical Illness": true, "Investment": false, "Family Cover": true, "Education Fund": false } },
    { provider: "WealthGuard", price: "AED 10,000/yr", features: { "Term Life": true, "Critical Illness": true, "Investment": true, "Family Cover": true, "Education Fund": true } },
  ],
};

const tabs: { label: string; value: PlanType }[] = [
  { label: "Health Insurance", value: "health" },
  { label: "Vehicle Insurance", value: "vehicle" },
  { label: "Life Insurance", value: "life" },
];

const ComparisonSection = () => {
  const [active, setActive] = useState<PlanType>("health");
  const data = plans[active];
  const featureKeys = Object.keys(data[0].features);

  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">Compare Plans</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3 mb-4">
            Find the Right Coverage
          </h2>
          <p className="text-muted-foreground text-lg">
            Compare insurance plans side by side to find the best fit for your needs and budget.
          </p>
        </div>

        <div className="flex justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActive(tab.value)}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                active === tab.value
                  ? "gradient-accent text-accent-foreground shadow-accent"
                  : "bg-card text-muted-foreground border border-border hover:border-accent/30"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left p-4 text-sm font-medium text-muted-foreground">Features</th>
                {data.map((plan) => (
                  <th key={plan.provider} className="p-4 text-center">
                    <div className="font-display font-bold text-foreground">{plan.provider}</div>
                    <div className="text-accent font-semibold text-sm mt-1">{plan.price}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {featureKeys.map((key) => (
                <tr key={key} className="border-t border-border">
                  <td className="p-4 text-sm text-foreground font-medium">{key}</td>
                  {data.map((plan) => (
                    <td key={plan.provider} className="p-4 text-center">
                      {plan.features[key] ? (
                        <Check className="h-5 w-5 text-accent mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground/40 mx-auto" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
