import { Check, X, Zap, Shield, Wifi, Users, Clock, Award } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface PlanComparisonModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const plans = [
  {
    name: "Basic",
    speed: "100 Mbps",
    price: 75,
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Pro",
    speed: "500 Mbps",
    price: 95,
    popular: true,
    color: "from-primary to-blue-600",
  },
  {
    name: "Ultra",
    speed: "1 Gbps",
    price: 135,
    color: "from-purple-500 to-pink-500",
  },
];

const features = [
  { name: "Download Speed", icon: Zap, basic: "100 Mbps", pro: "500 Mbps", ultra: "1 Gbps" },
  { name: "Upload Speed", icon: Zap, basic: "20 Mbps", pro: "50 Mbps", ultra: "50 Mbps" },
  { name: "Devices Supported", icon: Wifi, basic: "10+", pro: "30+", ultra: "50+" },
  { name: "VLAN Security", icon: Shield, basic: false, pro: true, ultra: true },
  { name: "Guest Network Control", icon: Users, basic: false, pro: true, ultra: true },
  { name: "IoT Device Isolation", icon: Shield, basic: false, pro: true, ultra: true },
  { name: "Priority Support", icon: Clock, basic: false, pro: true, ultra: true },
  { name: "Enterprise Router Included", icon: Wifi, basic: false, pro: true, ultra: true },
  { name: "ACSU Giveaway Entry", icon: Award, basic: true, pro: true, ultra: true },
  { name: "No Lock-in Contract", icon: Check, basic: true, pro: true, ultra: true },
  { name: "Professional Installation", icon: Check, basic: "$99", pro: "$99", ultra: "$99" },
  { name: "36-Month Free Install", icon: Check, basic: false, pro: true, ultra: true },
];

const PlanComparisonModal = ({ open, onOpenChange }: PlanComparisonModalProps) => {
  const navigate = useNavigate();

  const renderValue = (value: boolean | string) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check className="w-5 h-5 text-green-500 mx-auto" />
      ) : (
        <X className="w-5 h-5 text-muted-foreground/40 mx-auto" />
      );
    }
    return <span className="text-sm font-medium">{value}</span>;
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Compare Our Plans
          </DialogTitle>
          <p className="text-muted-foreground text-center text-sm">
            Find the perfect plan for your household
          </p>
        </DialogHeader>

        <div className="mt-6">
          {/* Plan Headers */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="col-span-1" />
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative text-center p-4 rounded-xl bg-gradient-to-br ${plan.color} text-white`}
              >
                {plan.popular && (
                  <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-0.5 rounded-full">
                    Most Popular
                  </span>
                )}
                <h3 className="font-bold text-lg">{plan.name}</h3>
                <p className="text-sm opacity-90">{plan.speed}</p>
                <p className="text-2xl font-bold mt-2">
                  ${plan.price}
                  <span className="text-sm font-normal">/mo</span>
                </p>
              </div>
            ))}
          </div>

          {/* Feature Comparison Table */}
          <div className="border rounded-xl overflow-hidden">
            {features.map((feature, index) => (
              <div
                key={feature.name}
                className={`grid grid-cols-4 gap-4 p-4 items-center ${
                  index % 2 === 0 ? "bg-muted/30" : "bg-background"
                }`}
              >
                <div className="flex items-center gap-2">
                  <feature.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{feature.name}</span>
                </div>
                <div className="text-center">{renderValue(feature.basic)}</div>
                <div className="text-center">{renderValue(feature.pro)}</div>
                <div className="text-center">{renderValue(feature.ultra)}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="grid grid-cols-4 gap-4 mt-6">
            <div className="col-span-1" />
            {plans.map((plan) => (
              <Button
                key={plan.name}
                variant={plan.popular ? "default" : "outline"}
                className="w-full"
                onClick={() => {
                  onOpenChange(false);
                  navigate(`/signup?plan=${plan.name}`);
                }}
              >
                Choose {plan.name}
              </Button>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PlanComparisonModal;
