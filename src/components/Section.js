import Reveal from "./Reveal";

// Shared wrapper: gives every section the same spacing and heading style.
export default function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-16 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
            {title}
          </h2>
          <div className="mt-4 h-px w-16 bg-accent" />
        </Reveal>
        <div className="mt-10 md:mt-12">{children}</div>
      </div>
    </section>
  );
}
