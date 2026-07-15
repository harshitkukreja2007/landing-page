import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "How does the Funnel JS script track user behavior without latency?",
    answer: "Our tracking script is extremely lightweight (<1KB) and runs asynchronously, meaning it never blocks your main page rendering or API requests. It records behavioral micro-signals (like cursor acceleration and dwell vectors) client-side and dispatches them in tiny, batched payloads.",
    value: "item-1",
  },
  {
    question: "What micro-interactions count as behavior signals?",
    answer: "Funnel tracks exit velocity (rapid movement toward browser exit zones), tab focus shifts, custom element hover durations, scroll velocity changes, and inactivity markers within checkout fields. These signals are mapped to evaluate churn probabilities.",
    value: "item-2",
  },
  {
    question: "How does the AI select the optimal campaign to trigger?",
    answer: "Our telemetry orchestrator evaluates incoming behavior logs against configured criteria. If exit-intent is detected, it runs a real-time confidence evaluation to match the customer profile with the campaign (e.g. Email sequence or custom CRM webhook) that has the highest conversion probability.",
    value: "item-3",
  },
  {
    question: "Do we need engineering resources to set up new campaigns?",
    answer: "No. Once the initial lightweight tracking tag is installed on your site, all trigger rules, campaign logic, and content payloads are managed inside our dashboard. Integrations connect automatically over generic API nodes.",
    value: "item-4",
  },
  {
    question: "Is Funnel's behavioral tracking GDPR compliant?",
    answer: "Yes, fully. All telemetry events are strictly anonymized on the client side before dispatch. We do not store cookies containing PII (Personally Identifiable Information), nor do we track users across external sites.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
            className="border-primary/10"
          >
            <AccordionTrigger className="text-left hover:no-underline hover:text-primary transition-colors">
              {question}
            </AccordionTrigger>

            <AccordionContent className="text-muted-foreground text-sm leading-relaxed">{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4 text-sm">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="#newsletter"
          className="text-primary transition-all border-primary hover:border-b-[1px]"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
