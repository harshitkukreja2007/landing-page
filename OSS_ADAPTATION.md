# OSS Adaptation Report: Funnel AI Landing Page

This document details the adaptation and extension of the open-source [shadcn-landing-page](https://github.com/leoMirandaa/shadcn-landing-page) repository to build the landing page for **Funnel AI** (the Autonomous AI Marketing Agent).

---

## 1. Original Repository & Architecture
* **Original Project**: `shadcn-landing-page-template` (React 18, Vite, TypeScript, Tailwind CSS v3, Radix UI primitives, `class-variance-authority`).
* **Coding Style**: Page sections are modular React components assembled inside `App.tsx` and styled using Tailwind classes driven by custom CSS HSL theme variables.

---

## 2. Component Adaptation Directory

| Component Name | File Path | Reuse Decision | Adaptation & Rationale |
| :--- | :--- | :--- | :--- |
| **Navbar** | `src/components/Navbar.tsx` | **Modified** | Kept responsive layout and Radix sheet triggers. Updated branding text to "Funnel AI", modified routing targets, and replaced GitHub links with a "Book Demo" anchor. |
| **Hero** | `src/components/Hero.tsx` | **Modified** | Maintained the two-column grid layout. Added stateful React logic to cycle three core slogans every 5 seconds (pausing when cursor hovers on the hero group). |
| **HeroCards** | `src/components/HeroCards.tsx` | **Modified** | **Primary adaptation**: Preserved the exact absolute card positioning coordinates, overlaps, shadows, and responsiveness. Replaced static template contents with a simulated stateful **AI Command Center Mockup** showing user logs, terminal processing, campaign dispatch, and telemetry meters, using simplified plain English terminology. Added blinking live indicators, progress bars, and React state counter fluctuations for live visitor active counts and risk levels to increase the look of active software. |
| **Sponsors** | `src/components/Sponsors.tsx` | **Modified** | Renamed section to "Works with your existing stack". Swapped corporate placeholder logos with generic Lucide icons showing CRM, Webhooks, Analytics, and Payment systems. |
| **About** | `src/components/About.tsx` | **Modified** | Retained the two-column info panel structure. Replaced the static pilot image asset with an adapted data-flow animation representing real-time telemetry inputs and campaign dispatch paths. |
| **Statistics** | `src/components/Statistics.tsx` | **Modified** | Kept layout grid. Swapped static template text counters for dynamic stateful counters representing live simulated telemetry (Signals Detected, Confidence Score, etc.) that increment/fluctuate. |
| **HowItWorks** | `src/components/HowItWorks.tsx` | **Modified** | Kept the 4-card sequence. Modified step descriptions to explain the four stages of the loop: **Observe** $\rightarrow$ **Reason** $\rightarrow$ **Act** $\rightarrow$ **Learn**, using custom Lucide icons and plain English headings. |
| **Features** | `src/components/Features.tsx` | **Modified** | Kept the badge clouds and 3-card layout. Replaced the original black-and-white character image files (`looking-ahead.png`, etc.) with customized, responsive inline SVG graphics demonstrating a complete visitor behavior sequence (Active Session $\rightarrow$ Comparing Plans $\rightarrow$ Hesitating $\rightarrow$ High Intent), exit intent popup alerts with checkmarks, and script header setups. |
| **Services** | `src/components/Services.tsx` | **Modified** | Re-labeled to "Trigger Actions Across Your Stack". Replaced the template illustration `cube-leg.png` with a custom inline SVG integration workflow map representing a real orchestration sequence (Website Event $\rightarrow$ Payment $\rightarrow$ Funnel core $\rightarrow$ Email $\rightarrow$ CRM $\rightarrow$ Webhook) and dynamic status updates. |
| **Cta** | `src/components/Cta.tsx` | **Modified** | Kept structure and buttons. Edited copy in plain English to prompt user early access signups. |
| **Testimonials** | `src/components/Testimonials.tsx` | **Repurposed**| Kept the grid card container. Converted fake customer reviews into a visual storyboard illustrating a conversion journey timeline (Entry $\rightarrow$ Telemetry $\rightarrow$ Intent $\rightarrow$ Dispatch $\rightarrow$ Secured) using clear, human-written descriptions. |
| **Newsletter** | `src/components/Newsletter.tsx` | **Repurposed**| Kept form structure. Transformed newsletter subscription fields into an Early Access request card with simulated submit confirmation feedback. |
| **FAQ** | `src/components/FAQ.tsx` | **Modified** | Reused Radix accordion controls. Swapped template details with specific questions explaining script performance and telemetry math. |
| **Footer** | `src/components/Footer.tsx` | **Modified** | Kept layout grid. Updated links and copyright strings. |
| **Team** | `src/components/Team.tsx` | **Removed from App.tsx**| *File preserved in codebase*: Hided from final rendered layout to keep page free of fake team records. |
| **Pricing** | `src/components/Pricing.tsx` | **Removed from App.tsx**| *File preserved in codebase*: Hided from final layout since pricing is not required. |

---

## 3. Global Styling & Theme Overrides
Instead of editing colors in individual components, we leveraged the OSS project's design system:
* **HSL Color Overrides**: Modified `--primary` and `--ring` variables in `src/App.css` to violet/indigo configurations (`262.1 83.3% 57.8%` and `263.4 70% 50.4%`).
* **Logo Adaption**: Preserved the icon component architecture of `LogoIcon` in `src/components/Icons.tsx` by keeping the outer `<svg>` layout and viewBox while replacing paths to draw a line-art funnel.

---

## 4. Diffusion Studio Lottie Integration
* **Skill Installed**: `npx skills add diffusionstudio/lottie`
* **Lottie JSON Asset**: Programmatically compiled via the `text-to-lottie` agent skill workflow, saved at `src/assets/about_animation.json`.
* **Visual Components**: Models real-time visitor signals (clicks, scrolling, mouse move, dwell time, exit intent) flowing into a central Funnel AI processor and routing dispatches to Email, CRM, Webhook, Analytics, and Payment systems.
* **Render Engine**: Integrated using the `lottie-react` runtime player inside [About.tsx](file:///c:/projects/shadcn-landing-page/src/components/About.tsx), preserving responsiveness and a transparent background matching the dark premium theme.
