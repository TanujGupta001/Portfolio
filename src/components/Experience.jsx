import { experience, theme } from "../data";
import { Section, AnimatedSection, SectionHeader } from "./UI";

const { accent, accentGreen } = theme;

function ExperienceCard({ exp }) {
  const { role, company, period, location, points } = exp;

  return (
    <div style={{ display: "flex", gap: 24, marginBottom: 40, position: "relative" }}>
      <div className="timeline-dot" style={{ position: "absolute", left: -37 }} />
      <div className="card" style={{ padding: "24px 28px", flex: 1 }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: 12,
          }}
        >
          <div>
            <div style={{ fontSize: 18, fontWeight: 800 }}>{role}</div>
            <div style={{ color: accent, fontWeight: 700, fontSize: 14 }}>{company}</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div className="mono" style={{ fontSize: 12, color: "#888" }}>{period}</div>
            <div style={{ fontSize: 12, color: "#666" }}>{location}</div>
          </div>
        </div>
        <ul style={{ listStyle: "none", paddingLeft: 0 }}>
          {points.map((pt) => (
            <li
              key={pt}
              style={{
                fontSize: 14,
                color: "#999",
                lineHeight: 1.7,
                paddingLeft: 16,
                position: "relative",
                marginBottom: 6,
              }}
            >
              <span style={{ position: "absolute", left: 0, color: accentGreen, fontWeight: 700 }}>
                →
              </span>
              {pt}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <Section id="experience">
      <AnimatedSection>
        <SectionHeader label="// experience" title="Work history" />
        <div style={{ position: "relative", paddingLeft: 30 }}>
          {/* Timeline line */}
          <div
            style={{
              position: "absolute",
              left: 6, top: 0, bottom: 0,
              width: 2,
              background: `linear-gradient(${accent}, ${accentGreen})`,
              borderRadius: 2,
            }}
          />
          {experience.map((e, i) => (
            <AnimatedSection key={e.company} delay={i * 0.15}>
              <ExperienceCard exp={e} />
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>
    </Section>
  );
}
