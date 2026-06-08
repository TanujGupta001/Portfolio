import { theme } from "../data";
import { Section, AnimatedSection, SectionHeader } from "./UI";

const { accent } = theme;

const infoCards = [
  ["🎓", "B.Tech CSE (IoT)", "SKIT Jaipur, 2027"],
  ["📍", "Based in", "Jaipur, Rajasthan"],
  ["💼", "Experience", "2 Internships"],
  ["🧠", "Speciality", "MERN + AI Integration"],
];

export default function About() {
  return (
    <Section id="about" style={{ background: "#0d0d18" }}>
      <AnimatedSection>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>

          {/* Text */}
          <div>
            <SectionHeader label="// about me" title={<>Building things that <span className="gradient-text">matter</span></>} />
            <p style={{ color: "#999", lineHeight: 1.8, fontSize: 16, marginBottom: 16 }}>
              I'm a Full Stack Developer (MERN) and Competitive Programmer currently pursuing
              B.Tech in Computer Science & Engineering (IoT) at SKIT, Jaipur — graduating in
              2027 with a CGPA of 8.64.
            </p>
            <p style={{ color: "#999", lineHeight: 1.8, fontSize: 16 }}>
              I specialize in AI-integrated, production-grade web applications — from real-time
              collaborative coding platforms to AI-powered eBook generators. I've interned at
              two companies, shipping features used in production.
            </p>
          </div>

          {/* Info cards grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {infoCards.map(([icon, label, val]) => (
              <div key={label} className="card" style={{ padding: "20px 18px" }}>
                <div style={{ fontSize: 24, marginBottom: 8 }}>{icon}</div>
                <div style={{ fontSize: 12, color: "#666", marginBottom: 4 }}>{label}</div>
                <div style={{ fontWeight: 700, fontSize: 14 }}>{val}</div>
              </div>
            ))}
          </div>

        </div>
      </AnimatedSection>
    </Section>
  );
}
