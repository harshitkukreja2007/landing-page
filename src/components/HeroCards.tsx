import { useState, useEffect } from "react";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Check, Eye, Pointer, AlertCircle, Terminal, Sparkles } from "lucide-react";

interface EventItem {
  icon: React.ReactNode;
  text: string;
  time: string;
}

interface Scenario {
  user: {
    name: string;
    handle: string;
    initials: string;
  };
  events: EventItem[];
  reasoning: string[];
  campaign: {
    name: string;
    value: string;
    status: string;
    details: string[];
  };
  telemetry: {
    confidence: string;
    signals: string;
  };
}

const scenarios: Scenario[] = [
  {
    user: {
      name: "Sarah K.",
      handle: "@visitor_70a2",
      initials: "SK",
    },
    events: [
      { icon: <Eye className="w-3.5 h-3.5 text-blue-500" />, text: "Viewed pricing page", time: "2m ago" },
      { icon: <Pointer className="w-3.5 h-3.5 text-indigo-500" />, text: "Added Pro Plan to cart", time: "1m ago" },
      { icon: <AlertCircle className="w-3.5 h-3.5 text-amber-500" />, text: "Left checkout page", time: "just now" },
    ],
    reasoning: [
      "Analyzing visitor activity...",
      "Exit movement detected",
      "Selecting recovery campaign",
    ],
    campaign: {
      name: "Cart Recovery",
      value: "Free Month",
      status: "Sent",
      details: ["Sent recovery email", "Applied $49 discount", "Target: Sarah K."],
    },
    telemetry: {
      confidence: "High Exit Risk",
      signals: "Dwelled 3m on checkout",
    },
  },
  {
    user: {
      name: "Alex Chen",
      handle: "@visitor_90bf",
      initials: "AC",
    },
    events: [
      { icon: <Eye className="w-3.5 h-3.5 text-blue-500" />, text: "Compared plans", time: "4m ago" },
      { icon: <Eye className="w-3.5 h-3.5 text-blue-500" />, text: "Dwelled on signup page", time: "1m ago" },
      { icon: <AlertCircle className="w-3.5 h-3.5 text-amber-500" />, text: "Closed browser window", time: "just now" },
    ],
    reasoning: [
      "Analyzing scrolling speed...",
      "Exit vector detected",
      "Selecting signup incentive",
    ],
    campaign: {
      name: "Signup Incentive",
      value: "15% Discount",
      status: "Sent",
      details: ["Dispatched email promo", "Applied 15% code", "Target: Alex Chen"],
    },
    telemetry: {
      confidence: "Medium Exit Risk",
      signals: "Scrolled past limits 3x",
    },
  },
];

export const HeroCards = () => {
  const [activeScenario, setActiveScenario] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveScenario((prev) => (prev === 0 ? 1 : 0));
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const current = scenarios[activeScenario];

  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      
      {/* Event Log Card */}
      <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-indigo-500/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar className="bg-primary/10 border border-primary/20 text-primary flex items-center justify-center font-bold">
            <AvatarFallback>{current.user.initials}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <CardTitle className="text-lg flex items-center gap-2">
              {current.user.name}
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </div>
            </CardTitle>
            <CardDescription className="text-xs text-muted-foreground">{current.user.handle}</CardDescription>
          </div>
        </CardHeader>

        <CardContent className="space-y-3">
          {current.events.map((event, idx) => (
            <div key={idx} className="flex items-center justify-between text-xs text-zinc-300">
              <div className="flex items-center gap-2">
                {event.icon}
                <span>{event.text}</span>
              </div>
              <span className="text-[10px] text-zinc-500">{event.time}</span>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Diagnostics Terminal */}
      <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-indigo-500/10">
        <CardHeader className="mt-8 flex justify-center items-center pb-2 w-full">
          <div className="absolute -top-10 rounded-full w-20 h-20 bg-primary/20 border border-primary/40 flex items-center justify-center text-primary shadow-lg shadow-primary/15">
            <Terminal className="w-10 h-10" />
          </div>
          <CardTitle className="text-center text-md mt-6">Visitor Activity Engine</CardTitle>
          <CardDescription className="text-xs text-primary uppercase font-bold tracking-wider flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Analyzing Session
          </CardDescription>
        </CardHeader>

        <CardContent className="text-center pb-8 w-full px-4">
          <div className="font-mono text-[10px] space-y-1.5 bg-zinc-950 p-2.5 rounded-lg border border-border w-full text-left text-zinc-400 select-none">
            <div className="flex items-center justify-between text-zinc-600 border-b border-border pb-1 mb-1.5">
              <span>$ funnel_agent --run</span>
              <span className="text-[8px] animate-pulse">● LIVE</span>
            </div>
            {current.reasoning.map((log, idx) => (
              <span key={idx} className="block text-zinc-300">
                {idx === current.reasoning.length - 1 ? "⚡ " : "✓ "} {log}
              </span>
            ))}
            <span className="inline-block w-1.5 h-3 bg-primary animate-pulse ml-0.5" />
          </div>
        </CardContent>
      </Card>

      {/* Campaign Dispatch Card */}
      <Card className="absolute top-[170px] left-[40px] w-72 drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-indigo-500/10">
        <CardHeader>
          <CardTitle className="flex items-center justify-between text-md">
            {current.campaign.name}
            <Badge variant="secondary" className="text-[10px] text-primary">
              {current.campaign.status}
            </Badge>
          </CardTitle>
          <div>
            <span className="text-2xl font-bold">{current.campaign.value}</span>
            <span className="text-xs text-muted-foreground"> / Campaign</span>
          </div>
          <CardDescription className="text-xs">
            Trigger rule matched. Running automated campaign.
          </CardDescription>
        </CardHeader>

        <CardContent className="py-2">
          <Button className="w-full text-xs h-8 cursor-default pointer-events-none" variant="default">
            Active Campaign
          </Button>
        </CardContent>

        <hr className="w-4/5 m-auto mb-3 border-border" />

        <CardFooter className="flex pb-4">
          <div className="space-y-2">
            {current.campaign.details.map((detail, idx) => (
              <span key={idx} className="flex items-center text-xs text-zinc-300">
                <Check className="text-green-500 w-4 h-4 mr-2 shrink-0" />
                <span>{detail}</span>
              </span>
            ))}
          </div>
        </CardFooter>
      </Card>

      {/* Metrics Card */}
      <Card className="absolute w-[350px] -right-[10px] bottom-[35px] drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-indigo-500/10">
        <CardHeader className="space-y-1 flex flex-row justify-start items-start gap-4 p-4">
          <div className="mt-1 bg-primary/20 p-2 rounded-xl text-primary shrink-0">
            <Sparkles className="w-5 h-5 animate-pulse" />
          </div>
          <div className="flex-1 min-w-0">
            <CardTitle className="text-sm">Visitor Analytics</CardTitle>
            <CardDescription className="text-xs mt-1 text-zinc-300">
              Risk Evaluated: {current.telemetry.confidence}
            </CardDescription>
            <CardDescription className="text-[10px] text-muted-foreground mt-0.5">
              Indicators: {current.telemetry.signals}
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};
