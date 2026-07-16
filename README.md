# Funnel AI

Funnel AI is a premium, AI-powered visitor recovery platform that detects visitor intent in real-time and automatically launches personalized marketing recovery campaigns before high-intent prospects leave your website. By observing mouse movements, scrolling patterns, and dwell times, Funnel AI orchestrates automated flows across your marketing and analytics stack.

## Demo

- **Live URL**: https://landing-page-ochre-three-76.vercel.app/

---

## Features

- **Autonomous Visitor telemetry**: Detects micro-behavior signals (scroll, click depth, pricing views, exit intent).
- **Interactive Command Center**: Live-simulated dashboard demonstrating real-time visitor logs, telemetry meters, and campaign triggers.
- **Conversion Storyboard**: Replaces standard reviews with a visual timeline mapping the complete customer journey.
- **Stack Orchestration**: Triggers actions across CRMs, Webhooks, Email clients, and Analytics providers.
- **Modern Responsive Layout**: Fully responsive, mobile-first design with interactive elements and smooth transitions.
- **Subtle Dark Mode Theme**: Sleek premium dark aesthetic matching modern SaaS platforms (like Stripe, Linear, or Vercel).

---

## Tech Stack

- **Framework**: [React](https://react.dev/) (v18.3)
- **Bundler**: [Vite](https://vitejs.dev/) & [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & `shadcn/ui` components
- **Component Styling primitives**: `class-variance-authority` & `tailwind-merge`
- **Icon Set**: [Lucide React](https://lucide.dev/)
- **Telemetry Animation**: [Diffusion Studio Lottie Workflow](https://github.com/diffusionstudio/lottie) & `lottie-react` player

---

## OSS Adaptation

This project was created by adapting the excellent open-source [shadcn-landing-page](https://github.com/leoMirandaa/shadcn-landing-page) repository by Leopoldo Miranda. The original template was extended, rebranded, and adapted to demonstrate a functional Funnel AI landing page.

The original project is licensed under the **MIT License**.

### What Was Reused

| Component Name | Description / Reuse details |
| :--- | :--- |
| **Navbar** | Kept responsive layout, mobile sheet trigger, and basic styling. |
| **Hero Layout** | Maintained two-column grid structure for slogan and card group. |
| **Card Layouts** | Reused absolute overlaps, card borders, and drop shadow styles. |
| **Statistics Layout** | Kept the responsive grid layout for key metrics. |
| **FAQ Accordion** | Reused Radix-driven Accordion styling and animations. |
| **Footer** | Kept responsive layout grids and navigation section structure. |
| **Responsive Structure** | Kept the overall viewport width break-points and structural margins. |

### What Was Modified

- **Branding & Copywriting**: Re-branded all copy to Funnel AI (Autonomous Intent Marketing).
- **Telemetry Command Center**: Converted static hero cards into a live-updating stateful UI dashboard showing logs, active sessions, risk gauges, and terminal activity.
- **Customer Storyboard**: Converted static testimonials into a visual conversion funnel (Entry $\rightarrow$ Telemetry $\rightarrow$ Intent $\rightarrow$ Dispatch $\rightarrow$ Secured).
- **Lottie Animation**: Integrated a custom, lightweight, and stable Lottie vector data flow animation illustrating signal telemetry inputs flowing into the Funnel AI processor and dispatching to Email.
- **Integrations workflow**: Swapped corporate placeholders with stack orchestrations (Email, CRM, Analytics, Webhooks, Payments).
- **Custom UI Graphics**: Swapped out placeholder images for inline responsive SVGs demonstrating session telemetry logs and exit intent popup mockups.
- **HSL Theme & Colors**: Modified primary and ring HSL variables to violet/indigo configurations to match the brand.

---

## Why This Approach

The objective of this project was to demonstrate the effectiveness of adapting an existing open-source software (OSS) codebase rather than building from scratch. By leveraging a high-quality existing landing page template, we preserved the solid underlying responsive grid architecture, styling tokens, and layout guidelines while investing time in building customized features, stateful telemetry gauges, custom vector paths, and interactive animations.

---

## Running Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/harshitkukreja2007/landing-page.git
   cd landing-page
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

---

## Build

To compile a optimized production bundle in the `dist` directory, run:
```bash
npm run build
```

---

## License

This project is an adaptation of the original MIT-licensed project. The original **MIT License** and copyright attribution to Leopoldo Miranda have been fully preserved in [LICENSE](file:///c:/projects/shadcn-landing-page/LICENSE).
