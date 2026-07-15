import { Database, LineChart, CreditCard, Webhook, Mail, Bell } from "lucide-react";

interface IntegrationProps {
  icon: React.ReactNode;
  name: string;
}

const integrations: IntegrationProps[] = [
  {
    icon: <Mail className="w-6 h-6 text-primary" />,
    name: "Email Services",
  },
  {
    icon: <Webhook className="w-6 h-6 text-primary" />,
    name: "Custom Webhooks",
  },
  {
    icon: <Database className="w-6 h-6 text-primary" />,
    name: "CRM Systems",
  },
  {
    icon: <LineChart className="w-6 h-6 text-primary" />,
    name: "Analytics APIs",
  },
  {
    icon: <CreditCard className="w-6 h-6 text-primary" />,
    name: "Payment Suites",
  },
  {
    icon: <Bell className="w-6 h-6 text-primary" />,
    name: "Notification APIs",
  },
];

export const Sponsors = () => {
  return (
    <section
      id="sponsors"
      className="container pt-24 sm:py-32"
    >
      <h2 className="text-center text-sm lg:text-base font-bold mb-8 text-primary uppercase tracking-widest">
        Works with your existing stack
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
        {integrations.map(({ icon, name }: IntegrationProps) => (
          <div
            key={name}
            className="flex items-center gap-2 text-muted-foreground/80 hover:text-foreground transition-colors duration-200"
          >
            <span>{icon}</span>
            <h3 className="text-md md:text-lg font-semibold">{name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};
