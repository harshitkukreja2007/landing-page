import { Avatar, AvatarFallback } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Terminal, Shield, Activity, Eye, Zap, Check } from "lucide-react";

interface JourneyStepProps {
  icon: React.ReactNode;
  step: string;
  node: string;
  detail: string;
  badge: string;
}

const journeySteps: JourneyStepProps[] = [
  {
    icon: <Eye className="w-5 h-5 text-blue-500" />,
    step: "01. Visitor Lands",
    node: "@visitor_log",
    detail: "An anonymous visitor arrives on your pricing page from a Google search.",
    badge: "Step 1",
  },
  {
    icon: <Activity className="w-5 h-5 text-indigo-500" />,
    step: "02. Evaluates Actions",
    node: "@activity_evaluator",
    detail: "The visitor dwells on the page for 3 minutes, scrolling and comparing plan details.",
    badge: "Step 2",
  },
  {
    icon: <Terminal className="w-5 h-5 text-amber-500" />,
    step: "03. Detects Exit Intent",
    node: "@exit_intent",
    detail: "The visitor moves their cursor rapidly toward the tab close button.",
    badge: "Step 3",
  },
  {
    icon: <Shield className="w-5 h-5 text-primary" />,
    step: "04. Selects Campaign",
    node: "@campaign_selector",
    detail: "Funnel checks your rules and automatically matches the visitor with a recovery offer.",
    badge: "Step 4",
  },
  {
    icon: <Zap className="w-5 h-5 text-primary animate-pulse" />,
    step: "05. Sends Campaign",
    node: "@campaign_sender",
    detail: "The system automatically sends a personalized recovery email with an incentive code.",
    badge: "Step 5",
  },
  {
    icon: <Check className="w-5 h-5 text-green-500" />,
    step: "06. Recovers Customer",
    node: "@revenue_tracker",
    detail: "The visitor opens the email, clicks the link, and completes checkout. Cart recovered.",
    badge: "Recovered",
  },
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        See Funnel{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          In Action
        </span>
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        Here is how Funnel automatically detects intent and recovers a visitor step-by-step.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto space-y-0">
        {journeySteps.map(
          ({ icon, step, node, detail, badge }: JourneyStepProps) => (
            <Card
              key={step}
              className="overflow-hidden border-primary/10 bg-muted/20"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2 justify-between w-full">
                <div className="flex flex-row items-center gap-4">
                  <Avatar className="bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0">
                    <AvatarFallback className="bg-transparent">{icon}</AvatarFallback>
                  </Avatar>

                  <div className="flex flex-col">
                    <CardTitle className="text-sm font-bold">{step}</CardTitle>
                    <CardDescription className="text-[10px] text-muted-foreground font-mono">{node}</CardDescription>
                  </div>
                </div>
                <span className="text-[9px] uppercase tracking-wider bg-primary/10 border border-primary/20 text-primary px-1.5 py-0.5 rounded font-mono font-bold shrink-0 self-start mt-1">
                  {badge}
                </span>
              </CardHeader>

              <CardContent className="text-xs leading-relaxed text-zinc-300">{detail}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
