import Lottie from "lottie-react";
import aboutAnimation from "../assets/about_animation.json";
import { Statistics } from "./Statistics";

export const About = () => {
  console.log("Funnel Lottie Animation Data:", aboutAnimation);
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12 items-center">
          
          {/* Lottie Animation Canvas */}
          <div className="w-[300px] h-[300px] shrink-0 border border-primary/20 bg-zinc-950/80 rounded-xl relative overflow-hidden flex items-center justify-center p-4 shadow-xl shadow-black/30">
            {/* Grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />
            
            {/* Lottie React Player */}
            <Lottie
              animationData={aboutAnimation}
              loop={true}
              className="w-full h-full relative z-10"
            />
          </div>

          <div className="bg-green-0 flex flex-col justify-between flex-1">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  Recover Visitors{" "}
                </span>
                Before They Leave
              </h2>
              <p className="text-xl text-muted-foreground mt-4 leading-relaxed">
                Most platforms wait until a user has abandoned their cart before sending a follow-up email. Funnel works in real-time. By observing mouse movements, scrolling patterns, and page dwell times, our system detects when a visitor is about to leave and triggers recovery campaigns before they close the tab.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
