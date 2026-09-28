import Section from "./Section";
import Reveal from "./Reveal";
import { about } from "@/data/portfolio";

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal className="max-w-prose space-y-5 leading-relaxed text-muted">
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Reveal>

        <Reveal delay={100}>
          <dl className="grid grid-cols-2 overflow-hidden rounded-xl border border-edge bg-edge gap-px">
            {about.stats.map((s) => (
              <div key={s.label} className="bg-panel p-5 sm:p-6">
                <dt className="text-sm text-muted">{s.label}</dt>
                <dd className="mt-2 font-display text-2xl font-semibold leading-tight sm:text-3xl">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
