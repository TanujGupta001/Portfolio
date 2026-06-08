import { socialLinks } from "../data";
import { Section, AnimatedSection, SectionHeader } from "./UI";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <Section id="contact">
      <AnimatedSection>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <SectionHeader
            label="// contact"
            title={
              <>
                Let's build something <span className="gradient-text">together</span>
              </>
            }
          />
          <p style={{ color: "#888", fontSize: 16, lineHeight: 1.7, marginBottom: 40 }}>
            Open to internships, full-time roles, and exciting collaborations.
            Drop a message or reach me directly!
          </p>

          {/* Social links */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 16,
              flexWrap: "wrap",
              marginBottom: 48,
            }}
          >
            {socialLinks.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noreferrer">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "12px 20px",
                    background: "#131320",
                    border: "1px solid #ffffff18",
                    borderRadius: 12,
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#ccc",
                    cursor: "pointer",
                  }}
                >
                  <span>{l.icon}</span>
                  <span>{l.label}</span>
                </div>
              </a>
            ))}
          </div>

          <ContactForm />
        </div>
      </AnimatedSection>
    </Section>
  );
}
