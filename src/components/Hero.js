import { site } from "@/data/portfolio";
import SocialLinks from "./SocialLinks";
import RacingTrack from "./RacingTrack";
import { DownloadIcon } from "./Icons";

export default function Hero() {
  return (
    <section id="home" className="relative scroll-mt-16 overflow-hidden">
      <div className="hero-grid absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <h1 className="font-display text-6xl font-semibold leading-[0.95] tracking-tight sm:text-7xl xl:text-8xl">
            {site.name}
          </h1>
          <p className="mt-6 text-xl font-medium text-accent sm:text-2xl">{site.title}</p>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">{site.description}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href={site.cvFile} download="CV.pdf" className="btn btn-secondary">
              <DownloadIcon className="h-4 w-4" />
              Download CV
            </a>
          </div>

          <div className="mt-8">
            <SocialLinks variant="icons" />
          </div>
        </div>

        <RacingTrack />
      </div>
    </section>
  );
}
