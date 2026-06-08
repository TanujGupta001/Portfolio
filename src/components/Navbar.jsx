import { theme, navLinks } from "../data";
import { useActiveNav } from "../hooks";
import { scrollTo } from "../utils";

const { accent } = theme;

export default function Navbar() {
  const activeNav = useActiveNav();

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: "#0a0a0fcc",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid #ffffff0a",
        padding: "16px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* Logo */}
      <div style={{ fontWeight: 800, fontSize: 18, letterSpacing: "-0.02em" }}>
        <span className="gradient-text">Tanuj Gupta</span>
      </div>

      {/* Nav links */}
      <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
        {navLinks.map((l) => (
          <span
            key={l}
            className={`nav-link ${activeNav === l.toLowerCase() ? "active" : ""}`}
            onClick={() => scrollTo(l)}
          >
            {l}
          </span>
        ))}
      </div>

      {/* CTA buttons */}
      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <a
          href="https://www.linkedin.com/in/tanuj-gupta-2bbb132b9/"
          target="_blank"
          rel="noreferrer"
        >
          <button className="btn-outline" style={{ padding: "8px 20px", fontSize: 13 }}>
            LinkedIn
          </button>
        </a>
        <a href="https://github.com/TanujGupta001" target="_blank" rel="noreferrer">
          <button className="btn-primary" style={{ padding: "8px 20px", fontSize: 13 }}>
            GitHub
          </button>
        </a>
      </div>
    </nav>
  );
}
