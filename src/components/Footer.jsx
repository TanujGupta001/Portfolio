import { useState } from "react";
import { theme } from "../data";

const { accent } = theme;

const footerLinks = [
  { label: "GitHub", href: "https://github.com/TanujGupta001" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/tanuj-gupta-2bbb132b9/" },
  { label: "Email", href: "mailto:tanuj131124@gmail.com" },
];

function FooterLink({ label, href }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{
        color: hovered ? accent : "#555",
        fontSize: 13,
        fontWeight: 600,
        transition: "color 0.2s",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {label}
    </a>
  );
}

export default function Footer() {
  return (
    <div
      style={{
        borderTop: "1px solid #ffffff0a",
        padding: "28px 24px",
        textAlign: "center",
        color: "#444",
        fontSize: 13,
      }}
    >
      <div style={{ display: "flex", justifyContent: "center", gap: 20, marginBottom: 12 }}>
        {footerLinks.map((l) => (
          <FooterLink key={l.label} {...l} />
        ))}
      </div>
      <span className="mono">
        // Designed & built by{" "}
        <span style={{ color: accent }}>Tanuj Gupta</span> · {new Date().getFullYear()}
      </span>
    </div>
  );
}
