import { useState, useEffect } from "react";

export const Statistics = () => {
  const [signals, setSignals] = useState(124530);
  const [campaigns, setCampaigns] = useState(8421);
  const [confidence, setConfidence] = useState(92.4);
  const [revenue, setRevenue] = useState(4281950);

  useEffect(() => {
    const timer = setInterval(() => {
      // Increment signals
      setSignals((prev) => prev + Math.floor(Math.random() * 3) + 1);
      
      // Fluctuate confidence score slightly
      setConfidence((prev) => {
        const delta = (Math.random() * 0.4 - 0.2);
        const next = prev + delta;
        return parseFloat(Math.min(94.5, Math.max(90.1, next)).toFixed(1));
      });

      // Increment revenue
      setRevenue((prev) => prev + Math.floor(Math.random() * 45) + 15);
      
      // Increment campaigns occasionally
      if (Math.random() > 0.8) {
        setCampaigns((prev) => prev + 1);
      }
    }, 1500);

    return () => clearInterval(timer);
  }, []);

  interface statsProps {
    quantity: string;
    description: string;
  }

  const stats: statsProps[] = [
    {
      quantity: signals.toLocaleString(),
      description: "Signals Detected",
    },
    {
      quantity: campaigns.toLocaleString(),
      description: "Active Campaigns",
    },
    {
      quantity: `${confidence}%`,
      description: "Confidence Score",
    },
    {
      quantity: `$${(revenue / 1000000).toFixed(2)}M`,
      description: "Recovered Revenue",
    },
  ];

  return (
    <section id="statistics">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map(({ quantity, description }: statsProps) => (
          <div
            key={description}
            className="space-y-2 text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold transition-all duration-300 font-mono">{quantity}</h2>
            <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
