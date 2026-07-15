import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      console.log("Requested Demo for:", email);
      setEmail("");
    }
  };

  return (
    <section id="newsletter">
      <hr className="w-11/12 mx-auto border-border" />

      <div className="container py-24 sm:py-32">
        <h3 className="text-center text-4xl md:text-5xl font-bold">
          Request{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Early Access
          </span>
        </h3>
        <p className="text-xl text-muted-foreground text-center mt-4 mb-8">
          Enter your work email to request early access and book a 10-minute demo.
        </p>

        {submitted ? (
          <div className="text-center p-4 border border-green-500/30 bg-green-500/10 rounded-lg max-w-md mx-auto">
            <p className="text-green-500 font-medium text-sm">✓ Request received! We will reach out shortly.</p>
          </div>
        ) : (
          <form
            className="flex flex-col w-full md:flex-row md:w-6/12 lg:w-4/12 mx-auto gap-4 md:gap-2"
            onSubmit={handleSubmit}
          >
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="work-email@company.com"
              className="bg-muted/50 dark:bg-muted/80 border-border focus-visible:ring-primary"
              aria-label="email"
              required
            />
            <Button type="submit">Book Demo</Button>
          </form>
        )}
      </div>

      <hr className="w-11/12 mx-auto border-border" />
    </section>
  );
};
