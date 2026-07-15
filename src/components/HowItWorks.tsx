import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Eye, Brain, Zap, RotateCw } from "lucide-react";

interface StepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const steps: StepProps[] = [
  {
    icon: <Eye className="w-10 h-10 text-primary" />,
    title: "See What Every Visitor Is Doing",
    description:
      "Observe cursor movements, scrolling behavior, and checkout dwell times in real-time.",
  },
  {
    icon: <Brain className="w-10 h-10 text-primary" />,
    title: "Detect Exit Intent Instantly",
    description:
      "Calculate exit probabilities and predict when a visitor is about to close the page.",
  },
  {
    icon: <Zap className="w-10 h-10 text-primary" />,
    title: "Reach Out Before They Leave",
    description:
      "Trigger customized recovery campaigns over emails, webhooks, or CRM integrations automatically.",
  },
  {
    icon: <RotateCw className="w-10 h-10 text-primary" />,
    title: "Optimize Campaigns Automatically",
    description:
      "Let the system learn which offers perform best to improve your checkout recovery rate.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        How Funnel{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Works{" "}
        </span>
        Step-by-Step Guide
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground leading-relaxed">
        A simple script integration gives you a live dashboard of visitor actions and automatic recovery campaigns.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map(({ icon, title, description }: StepProps) => (
          <Card
            key={title}
            className="bg-muted/50 border-primary/10"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center text-lg leading-tight">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm leading-relaxed">{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
