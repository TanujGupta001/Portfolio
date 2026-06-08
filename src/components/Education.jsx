import { theme } from "../data";
import { Section, AnimatedSection, SectionHeader } from "./UI";

const { accentGreen } = theme;

const coursework = [
  "Data Structures & Algorithms",
  "DBMS",
  "Object-Oriented Programming",
  "Operating Systems",
  "Computer Networks",
  "Internet of Things",
  "Discrete Mathematics",
  "Software Engineering",
];

const highlights = [
  ["🏫", "Expected Graduation", "May 2027"],
  ["📚", "Specialisation", "IoT (Internet of Things)"],
];

export default function Education() {
  return (
    <Section id="education">
      <AnimatedSection>
        <SectionHeader label="// education" title="Academic background" />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 24,
          }}
        >
          {/* Degree card */}
          <AnimatedSection delay={0.05}>
            <div
              className="card"
              style={{
                padding: "28px 28px",
                borderLeft: `4px solid ${accentGreen}`,
                borderRadius: 16,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
                <div style={{ fontSize: 36 }}>🎓</div>
                <div>
                  <div
                    style={{
                      fontSize: 11, color: "#666", fontWeight: 700,
                      letterSpacing: "0.08em", marginBottom: 4,
                    }}
                  >
                    DEGREE
                  </div>
                  <div style={{ fontSize: 18, fontWeight: 800, lineHeight: 1.2 }}>
                    B.Tech — Computer Science & Engineering (IoT)
                  </div>
                </div>
              </div>

              <div style={{ color: accentGreen, fontWeight: 700, fontSize: 15, marginBottom: 8 }}>
                Swami Keshvanand Institute of Technology
              </div>

              <div style={{ display: "flex", gap: 20, flexWrap: "wrap", marginBottom: 16 }}>
                <div>
                  <div style={{ fontSize: 11, color: "#666", marginBottom: 2 }}>DURATION</div>
                  <div className="mono" style={{ fontSize: 13, color: "#aaa" }}>Aug 2023 – May 2027</div>
                </div>
                <div>
                  <div style={{ fontSize: 11, color: "#666", marginBottom: 2 }}>LOCATION</div>
                  <div style={{ fontSize: 13, color: "#aaa" }}>Jaipur, Rajasthan</div>
                </div>
              </div>

              {/* CGPA badge */}
              <div
                style={{
                  background: `${accentGreen}18`,
                  border: `1px solid ${accentGreen}44`,
                  borderRadius: 10,
                  padding: "12px 16px",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <span style={{ fontSize: 22 }}>⭐</span>
                <div>
                  <div style={{ fontSize: 11, color: accentGreen, fontWeight: 700, letterSpacing: "0.06em" }}>
                    CURRENT CGPA
                  </div>
                  <div style={{ fontSize: 22, fontWeight: 800, color: "#e8e6f0" }}>
                    8.80{" "}
                    <span style={{ fontSize: 13, color: "#888", fontWeight: 400 }}>/ 10.0</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Coursework card */}
          <AnimatedSection delay={0.12}>
            <div className="card" style={{ padding: "28px 28px", height: "100%" }}>
              <div
                style={{
                  fontSize: 11, color: "#666", fontWeight: 700,
                  letterSpacing: "0.08em", marginBottom: 16,
                }}
              >
                KEY COURSEWORK
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {coursework.map((c) => (
                  <span
                    key={c}
                    style={{
                      padding: "6px 12px",
                      background: "#1a1a2e",
                      border: "1px solid #ffffff18",
                      borderRadius: 20,
                      fontSize: 12,
                      fontWeight: 600,
                      color: "#c8c5e0",
                    }}
                  >
                    {c}
                  </span>
                ))}
              </div>

              <div style={{ marginTop: 24 }}>
                <div
                  style={{
                    fontSize: 11, color: "#666", fontWeight: 700,
                    letterSpacing: "0.08em", marginBottom: 12,
                  }}
                >
                  HIGHLIGHTS
                </div>
                {highlights.map(([icon, label, val]) => (
                  <div key={label} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                    <span style={{ fontSize: 18 }}>{icon}</span>
                    <span style={{ fontSize: 13, color: "#666" }}>{label}:</span>
                    <span style={{ fontSize: 13, color: "#ccc", fontWeight: 600 }}>{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

        </div>
      </AnimatedSection>
    </Section>
  );
}
