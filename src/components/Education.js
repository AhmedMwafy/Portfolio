import Section from "./Section";
import Reveal from "./Reveal";
import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="max-w-3xl space-y-6">
        {education.map((item) => (
          <Reveal key={item.school}>
            <div className="card p-6 sm:p-8">
              <p className="text-base text-muted">{item.period}</p>
              <h3 className="mt-2 font-display text-3xl font-semibold">{item.school}</h3>
              <p className="mt-1 text-accent">{item.degree}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {item.details.map((d) => (
                  <li key={d} className="badge">
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
