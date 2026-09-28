import Section from "./Section";
import Reveal from "./Reveal";
import { skillGroups } from "@/data/portfolio";

export default function Skills() {
  return (
    <Section id="skills" title="Technical Skills">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 60} className="h-full">
            <div className="card h-full p-6 hover:border-accent/50">
              <h3 className="font-display text-2xl font-semibold">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="badge">
                    {item}
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
