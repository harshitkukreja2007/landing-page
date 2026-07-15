import { LogoIcon } from "./Icons";

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto border-border" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a
            rel="noreferrer noopener"
            href="/"
            className="font-bold text-xl flex items-center"
          >
            <LogoIcon />
            Funnel AI
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Product</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#features"
              className="opacity-60 hover:opacity-100"
            >
              Features
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#howItWorks"
              className="opacity-60 hover:opacity-100"
            >
              How It Works
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#testimonials"
              className="opacity-60 hover:opacity-100"
            >
              Customer Journey
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Company</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#about"
              className="opacity-60 hover:opacity-100"
            >
              About
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#faq"
              className="opacity-60 hover:opacity-100"
            >
              FAQ
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#newsletter"
              className="opacity-60 hover:opacity-100"
            >
              Early Access
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Community</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              GitHub
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Twitter
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Discord
            </a>
          </div>
        </div>
      </section>

      <section className="container pb-14 text-center text-xs text-muted-foreground">
        <h3>
          &copy; {new Date().getFullYear()} Funnel AI. Adapted from the open-source{" "}
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://github.com/leoMirandaa/shadcn-landing-page.git"
            className="text-primary transition-all border-primary hover:border-b-[1px]"
          >
            shadcn-landing-page
          </a>{" "}
          repository.
        </h3>
      </section>
    </footer>
  );
};
