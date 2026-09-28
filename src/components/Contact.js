import Reveal from "./Reveal";
import SocialLinks from "./SocialLinks";
import { DownloadIcon } from "./Icons";
import { contact, site } from "@/data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 border-t border-edge py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <h2 className="font-display text-5xl font-semibold tracking-tight md:text-7xl">
            {contact.heading}
          </h2>
          <p className="mt-5 max-w-xl text-xl text-muted">{contact.text}</p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <SocialLinks variant="buttons" />
            <a href={site.cvFile} download="CV.pdf" className="btn btn-primary">
              <DownloadIcon className="h-4 w-4" />
              Download CV
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
