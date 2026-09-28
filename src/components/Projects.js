import Section from "./Section";
import Reveal from "./Reveal";
import ProjectImage from "./ProjectImage";
import { GitHubIcon } from "./Icons";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <Section id="projects" title="Featured Projects">
      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <li key={project.title}>
            <Reveal delay={i * 80} className="h-full">
              <article className="card group flex h-full flex-col overflow-hidden hover:-translate-y-1 hover:border-accent/60">
                <div className="aspect-video overflow-hidden border-b border-edge">
                  <ProjectImage src={project.image} title={project.title} />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-2xl font-semibold">{project.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{project.description}</p>
                  <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
                    {project.technologies.map((tech) => (
                      <li key={tech} className="badge">
                        {tech}
                      </li>
                    ))}
                  </ul>
                  {(project.github || project.demo) && (
                    <div className="mt-6 flex flex-wrap gap-4 text-base">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-accent hover:text-white"
                        >
                          <GitHubIcon className="h-4 w-4" />
                          Code
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent hover:text-white"
                        >
                          Demo
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
