import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface FeatureProps {
  title: string;
  description: string;
  visual: React.ReactNode;
}

const features: FeatureProps[] = [
  {
    title: "See What Every Visitor Is Doing",
    description:
      "Track user clicks, scrolling speed, and menu pauses to see exactly when someone is hesitating.",
    visual: (
      <div className="relative w-full h-32 bg-zinc-950/80 border border-border rounded-lg overflow-hidden p-2 shadow-inner">
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes drawLine {
            0% { stroke-dashoffset: 180; }
            25%, 75% { stroke-dashoffset: 80; }
            100% { stroke-dashoffset: 0; }
          }
          @keyframes visitorCursor {
            0% { transform: translate(20px, 80px); }
            25% { transform: translate(100px, 50px); }
            26%, 50% { transform: translate(100px, 50px); }
            52% { transform: translate(102px, 51px); }
            54% { transform: translate(98px, 49px); }
            56%, 75% { transform: translate(100px, 50px); }
            100% { transform: translate(180px, 20px); }
          }
          @keyframes pulseHeatmap {
            0%, 100% { transform: scale(1); opacity: 0.1; }
            50% { transform: scale(1.3); opacity: 0.4; }
          }
          @keyframes labelPhase1 {
            0%, 24% { opacity: 1; }
            25%, 100% { opacity: 0; }
          }
          @keyframes labelPhase2 {
            0%, 24% { opacity: 0; }
            25%, 49% { opacity: 1; }
            50%, 100% { opacity: 0; }
          }
          @keyframes labelPhase3 {
            0%, 49% { opacity: 0; }
            50%, 74% { opacity: 1; }
            75%, 100% { opacity: 0; }
          }
          @keyframes labelPhase4 {
            0%, 74% { opacity: 0; }
            75%, 100% { opacity: 1; }
          }
        `}} />
        <svg className="w-full h-full" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Grid lines */}
          <path d="M 0 25 L 200 25 M 0 50 L 200 50 M 0 75 L 200 75" stroke="#141419" strokeWidth="1" />
          <path d="M 50 0 L 50 100 M 100 0 L 100 100 M 150 0 L 150 100" stroke="#141419" strokeWidth="1" />

          {/* Pricing tier pause point */}
          <g transform="translate(100, 50)">
            <circle r="15" className="fill-indigo-500/10 stroke-none animate-[pulseHeatmap_3s_infinite]" />
            <circle r="5" className="fill-indigo-500/30 stroke-none" />
          </g>

          {/* Cursor Path */}
          <path
            d="M 20 80 C 50 80, 40 50, 70 50 C 95 50, 100 50, 100 50 C 120 50, 150 30, 180 20"
            className="stroke-primary/40"
            strokeWidth="1.5"
            strokeDasharray="180"
            strokeDashoffset="180"
            style={{ animation: 'drawLine 6s infinite linear' }}
          />

          {/* Status Overlay Panels */}
          <g transform="translate(15, 20)">
            <rect width="90" height="15" rx="2" fill="#09090b" stroke="#333" strokeWidth="0.5" />
            
            {/* Phase 1 Label */}
            <g style={{ animation: 'labelPhase1 6s infinite' }}>
              <circle cx="10" cy="7.5" r="2.5" fill="#3b82f6" className="animate-pulse" />
              <text x="18" y="10.5" fill="#d4d4d8" className="font-mono text-[7px]">Active Session</text>
            </g>

            {/* Phase 2 Label */}
            <g style={{ animation: 'labelPhase2 6s infinite' }}>
              <circle cx="10" cy="7.5" r="2.5" fill="#a78bfa" className="animate-pulse" />
              <text x="18" y="10.5" fill="#d4d4d8" className="font-mono text-[7px]">Comparing Plans</text>
            </g>

            {/* Phase 3 Label */}
            <g style={{ animation: 'labelPhase3 6s infinite' }}>
              <circle cx="10" cy="7.5" r="2.5" fill="#f59e0b" className="animate-pulse" />
              <text x="18" y="10.5" fill="#d4d4d8" className="font-mono text-[7px]">Hesitating...</text>
            </g>

            {/* Phase 4 Label */}
            <g style={{ animation: 'labelPhase4 6s infinite' }}>
              <circle cx="10" cy="7.5" r="2.5" fill="#ef4444" className="animate-pulse" />
              <text x="18" y="10.5" fill="#ef4444" className="font-mono text-[7px] font-bold">High Intent Flagged</text>
            </g>
          </g>

          {/* Animated Cursor */}
          <g style={{ animation: 'visitorCursor 6s infinite linear' }}>
            <path
              d="M0 0 L-2.5 -10 L2.5 -7.5 Z"
              fill="#fff"
              stroke="#000"
              strokeWidth="0.5"
              transform="rotate(25)"
            />
          </g>
        </svg>
      </div>
    ),
  },
  {
    title: "Recover Visitors Before They Leave",
    description:
      "Launch custom cart recovery and signup incentives automatically the moment exit behavior is detected.",
    visual: (
      <div className="relative w-full h-32 bg-zinc-950/80 border border-border rounded-lg overflow-hidden p-2 shadow-inner">
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes cursorMove {
            0% { transform: translate(50px, 80px); }
            30% { transform: translate(172px, 16px); }
            100% { transform: translate(172px, 16px); }
          }
          @keyframes popupSlide {
            0%, 48% { transform: translateY(60px) scale(0.95); opacity: 0; }
            58%, 100% { transform: translateY(0) scale(1); opacity: 1; }
          }
          @keyframes pulseCta {
            0%, 55%, 100% { transform: scale(1); }
            70% { transform: scale(1.05); }
          }
          @keyframes statusP1 {
            0%, 28% { opacity: 1; }
            29%, 100% { opacity: 0; }
          }
          @keyframes statusP2 {
            0%, 28% { opacity: 0; }
            29%, 46% { opacity: 1; }
            47%, 100% { opacity: 0; }
          }
          @keyframes statusP3 {
            0%, 46% { opacity: 0; }
            47%, 62% { opacity: 1; }
            63%, 100% { opacity: 0; }
          }
          @keyframes statusP4 {
            0%, 62% { opacity: 0; }
            63%, 100% { opacity: 1; }
          }
        `}} />
        <svg className="w-full h-full" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Browser Container */}
          <rect x="10" y="10" width="180" height="80" rx="4" fill="#09090b" stroke="#222" strokeWidth="1" />
          
          {/* Browser Header Bar */}
          <rect x="10" y="10" width="180" height="14" rx="2" fill="#17171c" />
          <circle cx="18" cy="17" r="2.0" fill="#ef4444" />
          <circle cx="24" cy="17" r="2.0" fill="#eab308" />
          <circle cx="30" cy="17" r="2.0" fill="#22c55e" />
          {/* Close Area */}
          <rect x="165" y="12" width="18" height="10" rx="1.5" fill="#ef4444" fillOpacity="0.1" stroke="#ef4444" strokeWidth="0.5" />
          <text x="171" y="19" fill="#ef4444" className="font-bold text-[7px]">x</text>

          {/* Status Label Box */}
          <g transform="translate(18, 30)">
            <rect width="90" height="13" rx="2" fill="#0c0c10" stroke="#333" strokeWidth="0.5" />
            
            {/* P1: Browsing */}
            <g style={{ animation: 'statusP1 6s infinite' }}>
              <text x="8" y="9" fill="#d4d4d8" className="font-mono text-[6px]">Visitor Activity Logged</text>
            </g>
            {/* P2: Exit intent */}
            <g style={{ animation: 'statusP2 6s infinite' }}>
              <text x="8" y="9" fill="#ef4444" className="font-mono text-[6px] font-bold">Exit Intent Detected!</text>
            </g>
            {/* P3: Triggering campaign */}
            <g style={{ animation: 'statusP3 6s infinite' }}>
              <text x="8" y="9" fill="#a78bfa" className="font-mono text-[6px] font-bold">Launching Campaign...</text>
            </g>
            {/* P4: Campaign Active */}
            <g style={{ animation: 'statusP4 6s infinite' }}>
              <text x="8" y="9" fill="#22c55e" className="font-mono text-[6px] font-bold">Campaign Active ✓</text>
            </g>
          </g>

          {/* Recovery Offer Modal Popup (slides in) */}
          <g style={{ animation: 'popupSlide 6s infinite cubic-bezier(0.16, 1, 0.3, 1)', transformOrigin: 'center bottom' }}>
            <rect x="40" y="48" width="120" height="36" rx="3" fill="var(--primary)" fillOpacity="0.08" stroke="var(--primary)" strokeWidth="1" />
            <text x="48" y="60" fill="#fff" className="font-semibold text-[8px]">Don't leave empty-handed</text>
            
            {/* Pulsing CTA button */}
            <g style={{ transformOrigin: '65px 68px', animation: 'pulseCta 6s infinite ease-in-out' }}>
              <rect x="48" y="66" width="45" height="10" rx="1.5" fill="var(--primary)" />
              <text x="53" y="73" fill="var(--primary-foreground)" className="text-[5px] font-bold">Apply Discount</text>
            </g>

            {/* Success badge */}
            <g style={{ animation: 'statusP4 6s infinite' }}>
              <rect x="100" y="66" width="50" height="10" rx="1.5" fill="#22c55e" fillOpacity="0.15" stroke="#22c55e" strokeWidth="0.5" />
              <text x="104" y="73" fill="#22c55e" className="text-[5px] font-bold uppercase tracking-wider">Offer Sent</text>
            </g>
          </g>

          {/* Cursor moving to close window */}
          <g style={{ animation: 'cursorMove 6s infinite ease-in-out' }}>
            <path
              d="M0 0 L-2.5 -10 L2.5 -7.5 Z"
              fill="#fff"
              stroke="#000"
              strokeWidth="0.5"
              transform="rotate(25)"
            />
          </g>
        </svg>
      </div>
    ),
  },
  {
    title: "Set It Up Once. Funnel Does the Rest.",
    description:
      "Paste a single line of JavaScript into your header. We handle all tracking and campaign triggers automatically.",
    visual: (
      <div className="relative w-full h-32 bg-zinc-950/80 border border-border rounded-lg overflow-hidden p-2 shadow-inner">
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes statusInstall1 {
            0%, 30% { opacity: 1; }
            31%, 100% { opacity: 0; }
          }
          @keyframes statusInstall2 {
            0%, 30% { opacity: 0; }
            31%, 55% { opacity: 1; }
            56%, 100% { opacity: 0; }
          }
          @keyframes statusInstall3 {
            0%, 55% { opacity: 0; }
            56%, 75% { opacity: 1; }
            76%, 100% { opacity: 0; }
          }
          @keyframes statusInstall4 {
            0%, 75% { opacity: 0; }
            76%, 100% { opacity: 1; }
          }
          @keyframes linePulse {
            0%, 55% { stroke: #333; }
            56%, 75% { stroke: var(--primary); }
            76%, 100% { stroke: #22c55e; }
          }
        `}} />
        <svg className="w-full h-full" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Typing code */}
          <g>
            <text x="10" y="20" fill="var(--primary)" className="font-mono text-[8px]">&lt;script&gt;</text>
            <text x="20" y="32" fill="#d4d4d8" className="font-mono text-[8px]">import Funnel from 'funnel';</text>
            <text x="20" y="44" fill="#d4d4d8" className="font-mono text-[8px]">Funnel.init("fn_live_90af");</text>
            <text x="10" y="56" fill="var(--primary)" className="font-mono text-[8px]">&lt;/script&gt;</text>
            
            {/* SVG mask overlay for typing */}
            <rect x="0" y="10" width="180" height="50" fill="#09090b" className="origin-left">
              <animate attributeName="width" values="180; 0; 0; 180" keyTimes="0; 0.45; 0.9; 1" dur="6s" repeatCount="indefinite" />
            </rect>
          </g>

          {/* Connection flow path */}
          <path d="M 90 76 L 150 76" strokeWidth="1.5" strokeDasharray="3 3" style={{ animation: 'linePulse 6s infinite' }} />
          
          <circle cx="90" cy="76" r="10" fill="#1b1b1f" stroke="#333" strokeWidth="1" />
          <text x="86" y="79" fill="var(--primary)" className="font-bold font-mono text-[8px] select-none">JS</text>
          
          <circle cx="150" cy="76" r="10" strokeWidth="1" className="fill-zinc-900 stroke-zinc-800" />
          <text x="144" y="79" fill="#22c55e" className="font-bold font-mono text-[8px] select-none">API</text>

          {/* Status labels */}
          <g transform="translate(115, 12)">
            <rect width="70" height="13" rx="2" fill="#0c0c10" stroke="#333" strokeWidth="0.5" />
            
            <g style={{ animation: 'statusInstall1 6s infinite' }}>
              <text x="6" y="9" fill="#888" className="font-mono text-[6px]">Installing Code</text>
            </g>
            <g style={{ animation: 'statusInstall2 6s infinite' }}>
              <text x="6" y="9" fill="#a78bfa" className="font-mono text-[6px] font-bold">Connecting API</text>
            </g>
            <g style={{ animation: 'statusInstall3 6s infinite' }}>
              <text x="6" y="9" fill="#3b82f6" className="font-mono text-[6px] font-bold">Monitoring Live</text>
            </g>
            <g style={{ animation: 'statusInstall4 6s infinite' }}>
              <text x="6" y="9" fill="#22c55e" className="font-mono text-[6px] font-bold">Live & Active ✓</text>
            </g>
          </g>

          {/* Checkmark revealed on live */}
          <g style={{ transformOrigin: '150px 76px', animation: 'checkReveal 6s infinite ease-out' }}>
            <circle cx="160" cy="66" r="4.5" fill="#22c55e" />
            <path d="M 158 66 L 160 68 L 163 64" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    ),
  },
];

const featureList: string[] = [
  "Exit-Intent Detection",
  "Visitor Activity Logs",
  "Trigger Campaigns",
  "1:1 Personalization",
  "Self-Correcting Loops",
  "Omnichannel Delivery",
  "Analytics Dashboard",
  "Frictionless Setup",
  "GDPR Compliant",
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Stop Churn With{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Automatic Campaigns
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, visual }: FeatureProps) => (
          <Card key={title} className="border-primary/10 bg-muted/20 flex flex-col justify-between overflow-hidden">
            <CardHeader>
              <CardTitle className="text-lg font-bold">{title}</CardTitle>
            </CardHeader>

            <CardContent className="text-muted-foreground text-sm leading-relaxed flex-1">{description}</CardContent>

            <CardFooter className="pt-2 pb-6 px-6">
              <div className="w-full">
                {visual}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
