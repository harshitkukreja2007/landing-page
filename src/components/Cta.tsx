import { Button } from "./ui/button";

export const Cta = () => {
  return (
    <section
      id="cta"
      className="bg-muted/50 py-16 my-24 sm:my-32"
    >
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold ">
            Start recovering
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}
              lost revenue{" "}
            </span>
            today
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0 leading-relaxed">
            Deploy Funnel in 5 minutes and observe live visitor actions. No setup fees, no complex workflows.
          </p>
        </div>

        <div className="space-y-4 lg:space-y-0 lg:space-x-4 lg:col-start-2 flex flex-col sm:flex-row w-full justify-center lg:justify-end">
          <a
            href="#newsletter"
            className="w-full sm:w-auto"
          >
            <Button className="w-full sm:w-auto">Get Early Access</Button>
          </a>
          <a
            href="#howItWorks"
            className="w-full sm:w-auto"
          >
            <Button
              variant="outline"
              className="w-full sm:w-auto"
            >
              See How It Works
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
