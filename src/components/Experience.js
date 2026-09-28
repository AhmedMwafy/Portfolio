import Section from "./Section";
import Reveal from "./Reveal";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="ml-2 max-w-3xl border-l border-edge">
        {experience.map((job, i) => (
          <li key={job.organization} className="relative pb-12 pl-8 last:pb-0">
            {/* timeline dot */}
            <span
              className="absolute -left-[7px] top-2 h-3 w-3 rounded-full border-2 border-accent bg-ink"
              aria-hidden="true"
            />
            <Reveal delay={i * 60}>
              <h3 className="font-display text-2xl font-semibold">{job.role}</h3>
              <p className="mt-1 text-accent">{job.organization}</p>
              {job.period && <p className="mt-1 text-base text-muted">{job.period}</p>}
              <ul className="mt-4 space-y-2 text-muted">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
