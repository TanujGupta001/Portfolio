import { projects } from "../data";
import { Section, AnimatedSection, SectionHeader, Tag } from "./UI";

function ProjectCard({ project }) {
  const { title, subtitle, desc, tech, github, highlights, color } = project;

  return (
    <div className="card" style={{ padding: 28, height: "100%", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 16 }}>
        <div>
          <div style={{ fontSize: 20, fontWeight: 800, marginBottom: 2 }}>{title}</div>
          <div style={{ fontSize: 13, color, fontWeight: 600 }}>{subtitle}</div>
        </div>
        <a href={github} target="_blank" rel="noreferrer">
          <div
            style={{
              padding: "6px 12px",
              background: "#1e1e30",
              border: "1px solid #ffffff18",
              borderRadius: 8,
              fontSize: 12,
              fontWeight: 600,
              color: "#ccc",
            }}
          >
            GitHub
          </div>
        </a>
      </div>

      {/* Description */}
      <p style={{ color: "#888", fontSize: 14, lineHeight: 1.7, marginBottom: 16, flex: 1 }}>
        {desc}
      </p>

      {/* Highlights */}
      <div style={{ marginBottom: 14 }}>
        {highlights.map((h) => <Tag key={h} color={color}>{h}</Tag>)}
      </div>

      {/* Tech stack */}
      <div>
        {tech.map((t) => <Tag key={t}>{t}</Tag>)}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <Section id="projects" style={{ background: "#0d0d18" }}>
      <AnimatedSection>
        <SectionHeader label="// projects" title="Things I've built" />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(440px, 1fr))",
            gap: 24,
          }}
        >
          {projects.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 0.1}>
              <ProjectCard project={p} />
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>
    </Section>
  );
}
