import { useInView } from "../hooks";

// ─── Section wrapper ──────────────────────────────────────────────────────────
export function Section({ id, children, style }) {
  return (
    <section id={id} style={{ padding: "80px 0", ...style }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        {children}
      </div>
    </section>
  );
}

// ─── Animated fade-up wrapper ─────────────────────────────────────────────────
export function AnimatedSection({ children, delay = 0 }) {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

// ─── Coloured badge tag ───────────────────────────────────────────────────────
export function Tag({ children, color }) {
  return (
    <span
      style={{
        display: "inline-block",
        padding: "3px 10px",
        borderRadius: 20,
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: "0.03em",
        background: color ? `${color}22` : "#7c6fcd22",
        color: color || "#7c6fcd",
        border: `1px solid ${color || "#7c6fcd"}44`,
        marginRight: 6,
        marginBottom: 6,
      }}
    >
      {children}
    </span>
  );
}

// ─── Section header (mono label + big title) ──────────────────────────────────
export function SectionHeader({ label, title, accent = "#7c6fcd" }) {
  return (
    <>
      <div
        className="mono"
        style={{ color: accent, fontSize: 13, letterSpacing: "0.1em", marginBottom: 8 }}
      >
        {label}
      </div>
      <h2
        style={{
          fontSize: 38,
          fontWeight: 800,
          marginBottom: 40,
          letterSpacing: "-0.02em",
        }}
      >
        {title}
      </h2>
    </>
  );
}
