import Section from "./Section";
import Reveal from "./Reveal";
import { training } from "@/data/portfolio";

export default function Training() {
  return (
    <Section id="training" title="Training">
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {training.map((item, i) => (
          <li key={item.title}>
            <Reveal delay={i * 50} className="h-full">
              <div className="card h-full p-5 hover:border-accent/50">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                {(item.provider || item.year) && (
                  <p className="mt-2 text-base text-muted">
                    {[item.provider, item.year].filter(Boolean).join(", ")}
                  </p>
                )}
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
