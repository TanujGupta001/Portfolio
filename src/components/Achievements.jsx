import { achievements } from "../data";
import { Section, AnimatedSection, SectionHeader } from "./UI";

export default function Achievements() {
  return (
    <Section id="achievements" style={{ background: "#0d0d18" }}>
      <AnimatedSection>
        <SectionHeader label="// achievements" title="Milestones" />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 16,
          }}
        >
          {achievements.map((a, i) => (
            <AnimatedSection key={a.text} delay={i * 0.08}>
              <div
                className="card"
                style={{ padding: "20px 24px", display: "flex", gap: 16, alignItems: "flex-start" }}
              >
                <span style={{ fontSize: 26 }}>{a.icon}</span>
                <span style={{ color: "#bbb", fontSize: 14, lineHeight: 1.6 }}>{a.text}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>
    </Section>
  );
}
