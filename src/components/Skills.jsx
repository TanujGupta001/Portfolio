import { skills } from "../data";
import { Section, AnimatedSection, SectionHeader } from "./UI";

export default function Skills() {
  return (
    <Section id="skills">
      <AnimatedSection>
        <SectionHeader label="// technical skills" title="What I work with" />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 20,
          }}
        >
          {Object.entries(skills).map(([cat, items], i) => (
            <AnimatedSection key={cat} delay={i * 0.08}>
              <div className="card" style={{ padding: "24px 20px", height: "100%" }}>
                <div
                  style={{
                    fontSize: 12,
                    color: "#7c6fcd",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    marginBottom: 14,
                  }}
                >
                  {cat.toUpperCase()}
                </div>
                <div>
                  {items.map((s) => (
                    <span key={s} className="skill-pill">{s}</span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>
    </Section>
  );
}
