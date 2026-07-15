import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Email Recovery Workflows",
    description:
      "Trigger custom email recovery flows immediately after a visitor abandons checkout.",
    icon: <WalletIcon />,
  },
  {
    title: "Developer Webhooks",
    description:
      "Dispatch behavioral payload data to Segment, Zapier, or your custom API endpoint instantly.",
    icon: <ChartIcon />,
  },
  {
    title: "CRM & Analytics Sync",
    description:
      "Keep customer lists, pipeline properties, and analytics events updated in your active database.",
    icon: <MagnifierIcon />,
  },
];

export const Services = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Trigger Actions{" "}
            </span>
            Across Your Stack
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 leading-relaxed">
            You don't need to rebuild your flows or migrate databases. Funnel integrates directly with your existing platform tools to trigger automated actions.
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title} className="border-primary/10">
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl shrink-0 text-primary">
                    {icon}
                  </div>
                  <div>
                    <CardTitle className="text-lg">{title}</CardTitle>
                    <CardDescription className="text-sm mt-2 text-muted-foreground leading-relaxed">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Live Orchestration Story Visual */}
        <div className="w-full max-w-[450px] aspect-square border border-primary/20 bg-zinc-950/80 rounded-xl relative overflow-hidden flex items-center justify-center p-6 shadow-xl shadow-black/30">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
          
          <style dangerouslySetInnerHTML={{ __html: `
            @keyframes centerPulse {
              0%, 15%, 32%, 100% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(139, 92, 246, 0)); }
              20%, 28% { transform: scale(1.06); filter: drop-shadow(0 0 8px rgba(139, 92, 246, 0.4)); }
            }
            @keyframes pathGlowTop {
              0%, 30% { stroke: #222; }
              31%, 47% { stroke: var(--primary); }
              48%, 100% { stroke: #222; }
            }
            @keyframes pathGlowBottom {
              0%, 47% { stroke: #222; }
              48%, 61% { stroke: var(--primary); }
              62%, 100% { stroke: #222; }
            }
            @keyframes pathGlowRight {
              0%, 61% { stroke: #222; }
              62%, 77% { stroke: var(--primary); }
              78%, 100% { stroke: #222; }
            }
            @keyframes pathGlowLeft {
              0%, 77% { stroke: #222; }
              78%, 94% { stroke: var(--primary); }
              95%, 100% { stroke: #222; }
            }
            @keyframes pathGlowIn {
              0% { stroke: #222; }
              2%, 15% { stroke: var(--primary); }
              16%, 100% { stroke: #222; }
            }
            @keyframes flowIn {
              0% { transform: translate(0, 0); opacity: 0; }
              2% { opacity: 1; }
              15%, 100% { transform: var(--translate-in); opacity: 0; }
            }
            @keyframes flowOutTop {
              0%, 30% { transform: translateY(70px); opacity: 0; }
              31% { opacity: 1; }
              47%, 100% { transform: translateY(0); opacity: 0; }
            }
            @keyframes flowOutBottom {
              0%, 47% { transform: translateY(-70px); opacity: 0; }
              48% { opacity: 1; }
              61%, 100% { transform: translateY(0); opacity: 0; }
            }
            @keyframes flowOutRight {
              0%, 61% { transform: translateX(-60px); opacity: 0; }
              62% { opacity: 1; }
              77%, 100% { transform: translateX(0); opacity: 0; }
            }
            @keyframes flowOutLeft {
              0%, 77% { transform: translateX(60px); opacity: 0; }
              78% { opacity: 1; }
              94%, 100% { transform: translateX(0); opacity: 0; }
            }
            @keyframes centralLabelP1 {
              0%, 15% { opacity: 1; }
              16%, 100% { opacity: 0; }
            }
            @keyframes centralLabelP2 {
              0%, 15% { opacity: 0; }
              16%, 30% { opacity: 1; }
              31%, 95% { opacity: 0; }
              96%, 100% { opacity: 1; }
            }
            @keyframes textEmail {
              0%, 30% { opacity: 0; }
              31%, 47% { opacity: 1; }
              48%, 100% { opacity: 0; }
            }
            @keyframes textCrm {
              0%, 47% { opacity: 0; }
              48%, 61% { opacity: 1; }
              62%, 100% { opacity: 0; }
            }
            @keyframes textPayment {
              0%, 61% { opacity: 0; }
              62%, 77% { opacity: 1; }
              78%, 100% { opacity: 0; }
            }
            @keyframes textWebhook {
              0%, 77% { opacity: 0; }
              78%, 94% { opacity: 1; }
              95%, 100% { opacity: 0; }
            }
          `}} />

          <svg viewBox="0 0 200 200" className="w-full h-full relative z-10" fill="none" xmlns="http://www.w3.org/2000/svg">
             {/* Central Hub Node */}
             <g style={{ transformOrigin: '100px 100px', animation: 'centerPulse 8s infinite ease-in-out' }}>
               <rect x="75" y="75" width="50" height="50" rx="6" className="fill-primary/10 stroke-primary" strokeWidth="1.5" />
               <text x="83" y="96" fill="var(--primary)" className="font-mono font-bold text-[8px] select-none">FUNNEL</text>
               
               {/* Center Status labels */}
               <g style={{ animation: 'centralLabelP1 8s infinite' }}>
                 <text x="83" y="108" fill="#d4d4d8" className="font-mono text-[6px] select-none">Receiving...</text>
               </g>
               <g style={{ animation: 'centralLabelP2 8s infinite' }}>
                 <text x="83" y="108" fill="#a78bfa" className="font-mono text-[6px] select-none font-bold">Analyzing</text>
               </g>
             </g>
             
             {/* Connecting Lines (glow only when data passes) */}
             <line x1="100" y1="46" x2="100" y2="75" strokeWidth="1.5" strokeDasharray="3 3" style={{ animation: 'pathGlowTop 8s infinite' }} />
             <line x1="160" y1="100" x2="125" y2="100" strokeWidth="1.5" strokeDasharray="3 3" style={{ animation: 'pathGlowRight 8s infinite' }} />
             <line x1="100" y1="154" x2="100" y2="125" strokeWidth="1.5" strokeDasharray="3 3" style={{ animation: 'pathGlowBottom 8s infinite' }} />
             <line x1="40" y1="100" x2="75" y2="100" strokeWidth="1.5" strokeDasharray="3 3" style={{ animation: 'pathGlowLeft 8s infinite' }} />

             {/* Inbound packets lines (glow 0s to 1.5s) */}
             <line x1="100" y1="30" x2="100" y2="75" strokeWidth="1" strokeDasharray="2 2" style={{ animation: 'pathGlowIn 8s infinite' }} />
             <line x1="160" y1="100" x2="125" y2="100" strokeWidth="1" strokeDasharray="2 2" style={{ animation: 'pathGlowIn 8s infinite' }} />
             <line x1="100" y1="170" x2="100" y2="125" strokeWidth="1" strokeDasharray="2 2" style={{ animation: 'pathGlowIn 8s infinite' }} />
             <line x1="40" y1="100" x2="75" y2="100" strokeWidth="1" strokeDasharray="2 2" style={{ animation: 'pathGlowIn 8s infinite' }} />

             {/* Inbound Packets (travel inwards) */}
             <g style={{ transformOrigin: '100px 30px', '--translate-in': 'translateY(70px)', animation: 'flowIn 8s infinite linear' } as React.CSSProperties}>
               <circle r="2.5" fill="var(--primary)" />
             </g>
             <g style={{ transformOrigin: '100px 170px', '--translate-in': 'translateY(-70px)', animation: 'flowIn 8s infinite linear' } as React.CSSProperties}>
               <circle r="2.5" fill="var(--primary)" />
             </g>
             <g style={{ transformOrigin: '40px 100px', '--translate-in': 'translateX(60px)', animation: 'flowIn 8s infinite linear' } as React.CSSProperties}>
               <circle r="2.5" fill="var(--primary)" />
             </g>
             <g style={{ transformOrigin: '160px 100px', '--translate-in': 'translateX(-60px)', animation: 'flowIn 8s infinite linear' } as React.CSSProperties}>
               <circle r="2.5" fill="var(--primary)" />
             </g>

             {/* Outbound Packets */}
             <g style={{ transformOrigin: '100px 30px', animation: 'flowOutTop 8s infinite linear' }}><circle r="2.5" fill="var(--primary)" /></g>
             <g style={{ transformOrigin: '100px 170px', animation: 'flowOutBottom 8s infinite linear' }}><circle r="2.5" fill="var(--primary)" /></g>
             <g style={{ transformOrigin: '160px 100px', animation: 'flowOutRight 8s infinite linear' }}><circle r="2.5" fill="var(--primary)" /></g>
             <g style={{ transformOrigin: '40px 100px', animation: 'flowOutLeft 8s infinite linear' }}><circle r="2.5" fill="var(--primary)" /></g>

             {/* Outer nodes */}
             {/* Top: Email */}
             <circle cx="100" cy="30" r="16" className="fill-zinc-900 stroke-zinc-800" strokeWidth="1" />
             <text x="100" y="33" textAnchor="middle" fill="#888" className="text-[7px] font-medium select-none">Email</text>
             <g style={{ animation: 'textEmail 8s infinite' }}>
               <rect x="72.5" y="1" width="55" height="9" rx="1.5" fill="#22c55e" fillOpacity="0.15" stroke="#22c55e" strokeWidth="0.5" />
               <text x="100" y="7.5" textAnchor="middle" fill="#22c55e" className="text-[5px] font-bold uppercase tracking-wider select-none">Campaign Sent</text>
             </g>
             
             {/* Bottom: CRM */}
             <circle cx="100" cy="170" r="16" className="fill-zinc-900 stroke-zinc-800" strokeWidth="1" />
             <text x="100" y="173" textAnchor="middle" fill="#888" className="text-[7px] font-medium select-none">CRM</text>
             <g style={{ animation: 'textCrm 8s infinite' }}>
               <rect x="77.5" y="190" width="45" height="9" rx="1.5" fill="#22c55e" fillOpacity="0.15" stroke="#22c55e" strokeWidth="0.5" />
               <text x="100" y="196.5" textAnchor="middle" fill="#22c55e" className="text-[5px] font-bold uppercase tracking-wider select-none">Updated</text>
             </g>

             {/* Right: Payment */}
             <circle cx="160" cy="100" r="16" className="fill-zinc-900 stroke-zinc-800" strokeWidth="1" />
             <text x="160" y="103" textAnchor="middle" fill="#888" className="text-[7px] font-medium select-none">Payment</text>
             <g style={{ animation: 'textPayment 8s infinite' }}>
               <rect x="137.5" y="72" width="45" height="9" rx="1.5" fill="#22c55e" fillOpacity="0.15" stroke="#22c55e" strokeWidth="0.5" />
               <text x="160" y="78.5" textAnchor="middle" fill="#22c55e" className="text-[5px] font-bold uppercase tracking-wider select-none">Synced</text>
             </g>

             {/* Left: Webhooks */}
             <circle cx="40" cy="100" r="16" className="fill-zinc-900 stroke-zinc-800" strokeWidth="1" />
             <text x="40" y="103" textAnchor="middle" fill="#888" className="text-[7px] font-medium select-none">Webhook</text>
             <g style={{ animation: 'textWebhook 8s infinite' }}>
               <rect x="12.5" y="72" width="55" height="9" rx="1.5" fill="#22c55e" fillOpacity="0.15" stroke="#22c55e" strokeWidth="0.5" />
               <text x="40" y="78.5" textAnchor="middle" fill="#22c55e" className="text-[5px] font-bold uppercase tracking-wider select-none">Webhook Fired</text>
             </g>
          </svg>
        </div>
      </div>
    </section>
  );
};
