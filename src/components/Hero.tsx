import { useState, useEffect } from "react";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";

const headlines = [
  "Turn Visitor Behavior Into Revenue.",
  "Recover Lost Customers on Autopilot.",
  "Automatically Stop Checkout Drop-offs.",
];

export const Hero = () => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % headlines.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div
        className="text-center lg:text-start space-y-6"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <main className="text-4xl md:text-5xl lg:text-6xl font-bold h-[150px] sm:h-[120px] md:h-[150px] flex items-center select-none justify-center lg:justify-start">
          <h1 className="leading-tight transition-all duration-500 ease-in-out">
            <span className="bg-gradient-to-r from-[#A78BFA] via-[#8B5CF6] to-[#6366F1] text-transparent bg-clip-text">
              {headlines[index]}
            </span>
          </h1>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0 leading-relaxed">
          Funnel tracks user activity, predicts exit intent, and automatically runs targeted campaigns to recover lost signups and carts. No complex setup, no manual workflows.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row">
          <a
            href="#newsletter"
            className={`w-full md:w-1/3 text-center ${buttonVariants({
              variant: "default",
            })}`}
          >
            Get Early Access
          </a>

          <a
            href="#howItWorks"
            className={`w-full md:w-1/3 text-center ${buttonVariants({
              variant: "outline",
            })}`}
          >
            See How It Works
          </a>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
