import { theme } from "../data";
import { useTypewriter } from "../hooks";
import { scrollTo } from "../utils";

const { accent, accentGreen } = theme;

const stats = [
  ["1828", "LeetCode Rating"],
  ["Top 6%", "Globally"],
  ["800+", "Problems Solved"],
  ["2", "Internships"],
];

export default function Hero() {
  const typedText = useTypewriter();

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "120px 24px 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glows */}
      <div
        style={{
          position: "absolute", top: "20%", right: "10%",
          width: 400, height: 400,
          background: `radial-gradient(circle, ${accent}22 0%, transparent 70%)`,
          borderRadius: "50%", pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute", bottom: "10%", left: "5%",
          width: 300, height: 300,
          background: `radial-gradient(circle, ${accentGreen}18 0%, transparent 70%)`,
          borderRadius: "50%", pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1100, margin: "0 auto", width: "100%" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 40, alignItems: "center" }}>

          {/* Left: Text content */}
          <div>
            <div className="mono" style={{ color: accent, fontSize: 14, marginBottom: 16, letterSpacing: "0.1em" }}>
              Hello, world 👋
            </div>
            <h1
              style={{
                fontSize: "clamp(36px, 6vw, 68px)",
                fontWeight: 800,
                lineHeight: 1.1,
                marginBottom: 16,
                letterSpacing: "-0.03em",
              }}
            >
              I'm <span className="gradient-text">Tanuj Gupta</span>
            </h1>

            {/* Typewriter */}
            <div
              style={{
                fontSize: "clamp(18px, 3vw, 26px)",
                fontWeight: 600,
                color: "#888",
                marginBottom: 24,
                minHeight: 40,
              }}
            >
              <span style={{ color: "#e8e6f0" }}>{typedText}</span>
              <span style={{ color: accent, animation: "pulse-glow 1s infinite" }}>|</span>
            </div>

            <p style={{ fontSize: 17, color: "#999", lineHeight: 1.7, maxWidth: 540, marginBottom: 36 }}>
              MERN stack developer specializing in AI-integrated, production-grade web apps.
              Top 6% on LeetCode with 800+ problems solved.
            </p>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <button className="btn-primary" onClick={() => scrollTo("projects")}>
                View Projects
              </button>
              <button className="btn-outline" onClick={() => scrollTo("contact")}>
                Contact Me
              </button>
            </div>

            {/* Stats */}
            <div style={{ display: "flex", gap: 20, marginTop: 40, flexWrap: "wrap" }}>
              {stats.map(([v, l]) => (
                <div key={l}>
                  <div style={{ fontSize: 22, fontWeight: 800, color: accent }}>{v}</div>
                  <div style={{ fontSize: 12, color: "#666", letterSpacing: "0.05em" }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Avatar + code snippet */}
          <div
            className="float"
            style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-end" }}
          >
            <div
              style={{
                width: 200, height: 200, borderRadius: "50%",
                background: `linear-gradient(135deg, ${accent}44, ${accentGreen}44)`,
                border: `3px solid ${accent}55`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 72, animation: "pulse-glow 3s infinite",
              }}
            >
              👨‍💻
            </div>
            <div className="mono" style={{ fontSize: 12, color: "#555", textAlign: "right" }}>
              <div style={{ color: accent }}>{"const dev = {"}</div>
              <div style={{ paddingLeft: 16 }}>{"name: 'Tanuj',"}</div>
              <div style={{ paddingLeft: 16 }}>{"stack: 'MERN',"}</div>
              <div style={{ paddingLeft: 16 }}>{"ai: true"}</div>
              <div style={{ color: accent }}>{"}"}</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
