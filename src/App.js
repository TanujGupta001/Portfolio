import { useState, useEffect, useRef } from "react";

const skills = {
  Languages: ["C++", "JavaScript", "Python", "SQL", "HTML5", "CSS3"],
  Frontend: ["React.js", "Redux Toolkit", "TailwindCSS", "Bootstrap"],
  "Backend / APIs": ["Node.js", "Express.js", "RESTful APIs", "WebSockets", "JWT"],
  Databases: ["MongoDB", "MySQL"],
  Tools: ["Git", "GitHub", "Postman", "OpenAI API", "Cloudinary", "Vercel", "Render"],
};

const projects = [
  {
    title: "Imprintly",
    subtitle: "AI-Powered eBook Creator",
    desc: "Full-stack MERN platform for real-time AI eBook creation with multi-format export. Features a Markdown editor with live preview and drag-and-drop chapter reordering.",
    tech: ["React.js", "Node.js", "MongoDB", "OpenAI API", "PDFKit", "TailwindCSS"],
    live: "#",
    github: "https://github.com/TanujGupta001/AI-eBook_Creator",
    highlights: ["<3s end-to-end latency", "sub-50ms interaction", "PDF & DOCX export"],
    color: "#7c6fcd",
  },
  {
    title: "Modulo",
    subtitle: "Real-Time Coding Interview Platform",
    desc: "Collaborative interview platform with WebSocket-powered live coding, video calls, and multi-language code execution in sandboxed environments.",
    tech: ["React.js", "WebSocket", "Monaco Editor", "GetStream.io", "Clerk", "Inngest"],
    live: "#",
    github: "https://github.com/TanujGupta001",
    highlights: ["<100ms latency", "4 languages", "Role-based access"],
    color: "#1d9e75",
  },
  {
    title: "Smart-Vyapari",
    subtitle: "Business Management App",
    desc: "Full-featured business management solution built with the MERN stack.",
    tech: ["React.js", "Node.js", "MongoDB", "Express.js"],
    live: "#",
    github: "https://github.com/TanujGupta001/Smart-Vyapari",
    highlights: ["MERN stack", "Full-stack"],
    color: "#d85a30",
  },
  {
    title: "Job Portal",
    subtitle: "Job Listing & Application Platform",
    desc: "End-to-end job portal with listings, filtering, and application management.",
    tech: ["React.js", "Node.js", "MongoDB"],
    live: "#",
    github: "https://github.com/TanujGupta001/Job-Portal",
    highlights: ["Job matching", "Application tracking"],
    color: "#185fa5",
  },
];

const experience = [
  {
    role: "Software Development Intern",
    company: "Cynbit Technologies",
    period: "Jun 2025 – Aug 2025",
    location: "Jaipur, Rajasthan",
    points: [
      "Engineered RESTful APIs reducing client-server latency by 30%",
      "Implemented Redux Toolkit eliminating 40% of redundant re-renders",
      "Developed 10+ reusable React.js components cutting code redundancy by 30%",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "KisTechno Software",
    period: "Jul 2024 – Aug 2024",
    location: "Jaipur, Rajasthan",
    points: [
      "Optimized frontend with code-splitting & lazy loading, improving load time by 40%",
      "Boosted Lighthouse performance scores to 90+",
      "Built scalable component libraries reducing feature dev time by 30%",
    ],
  },
];

const achievements = [
  { icon: "🏆", text: "800+ problems solved on LeetCode, CodeChef & Codeforces" },
  { icon: "⭐", text: "LeetCode max rating 1828 — Top 6% globally" },
  { icon: "🚀", text: "Regional Qualifier — NEXT WAVE National Hackathon 2025 (10,000+ participants)" },
  { icon: "📜", text: "Full Stack Web Development Certification — GeeksforGeeks" },
  { icon: "🗄️", text: "SQL 50 Badge on LeetCode" },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold }
    );

    if (ref.current) obs.observe(ref.current);

    return () => obs.disconnect();
  }, [threshold]);

  return [ref, visible];
}

function Section({ id, children, style }) {
  return (
    <section id={id} style={{ padding: "80px 0", ...style }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>{children}</div>
    </section>
  );
}

function Tag({ children, color }) {
  return (
    <span style={{
      display: "inline-block", padding: "3px 10px", borderRadius: 20,
      fontSize: 12, fontWeight: 600, letterSpacing: "0.03em",
      background: color ? `${color}22` : "#7c6fcd22",
      color: color || "#7c6fcd", border: `1px solid ${color || "#7c6fcd"}44`,
      marginRight: 6, marginBottom: 6,
    }}>{children}</span>
  );
}

function AnimatedSection({ children, delay = 0 }) {
  const [ref, visible] = useInView();
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(32px)",
      transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
    }}>{children}</div>
  );
}

export default function Portfolio() {
  const [activeNav, setActiveNav] = useState("hero");
  const [typedText, setTypedText] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const roles = ["Full Stack Developer", "MERN Stack Engineer", "Competitive Programmer", "AI Integrations Builder"];
  const [roleIdx, setRoleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = roles[roleIdx];
      if (!deleting) {
        setTypedText(current.slice(0, charIdx + 1));
        if (charIdx + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1400);
        } else setCharIdx(c => c + 1);
      } else {
        setTypedText(current.slice(0, charIdx - 1));
        if (charIdx - 1 === 0) {
          setDeleting(false);
          setRoleIdx(r => (r + 1) % roles.length);
          setCharIdx(0);
        } else setCharIdx(c => c - 1);
      }
    }, deleting ? 40 : 70);
    return () => clearTimeout(timeout);
}, [charIdx, deleting, roleIdx, roles]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "projects", "experience", "education", "achievements", "contact"];
      for (const s of sections.reverse()) {
        const el = document.getElementById(s);
        if (el && window.scrollY >= el.offsetTop - 120) { setActiveNav(s); break; }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["About", "Skills", "Projects", "Experience", "Education", "Achievements", "Contact"];

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const accent = "#7c6fcd";
  const accentGreen = "#1d9e75";

  return (
    <div style={{ fontFamily: "'Syne', 'Space Grotesk', sans-serif", background: "#0a0a0f", color: "#e8e6f0", minHeight: "100vh", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0a0a0f; }
        ::-webkit-scrollbar-thumb { background: ${accent}; border-radius: 2px; }
        a { color: inherit; text-decoration: none; }
        .nav-link { cursor: pointer; font-size: 14px; font-weight: 600; letter-spacing: 0.05em; padding: 6px 0; position: relative; transition: color 0.2s; color: #888; }
        .nav-link:hover, .nav-link.active { color: #e8e6f0; }
        .nav-link.active::after { content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 2px; background: ${accent}; border-radius: 2px; }
        .btn-primary { display: inline-block; padding: 12px 28px; background: ${accent}; color: #fff; border-radius: 8px; font-weight: 700; font-size: 14px; letter-spacing: 0.05em; cursor: pointer; transition: transform 0.15s, box-shadow 0.15s; border: none; }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 32px ${accent}55; }
        .btn-outline { display: inline-block; padding: 11px 26px; background: transparent; color: ${accent}; border: 2px solid ${accent}; border-radius: 8px; font-weight: 700; font-size: 14px; letter-spacing: 0.05em; cursor: pointer; transition: all 0.15s; }
        .btn-outline:hover { background: ${accent}; color: #fff; }
        .card { background: #131320; border: 1px solid #ffffff14; border-radius: 16px; transition: border-color 0.2s, transform 0.2s; }
        .card:hover { border-color: ${accent}55; transform: translateY(-4px); }
        .skill-pill { display: inline-block; padding: 6px 14px; background: #1a1a2e; border: 1px solid #ffffff18; border-radius: 20px; font-size: 13px; font-weight: 600; margin: 4px; color: #c8c5e0; transition: all 0.2s; cursor: default; }
        .skill-pill:hover { background: ${accent}22; border-color: ${accent}55; color: #e8e6f0; }
        .mono { font-family: 'JetBrains Mono', monospace; }
        .gradient-text { background: linear-gradient(135deg, ${accent}, ${accentGreen}); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .timeline-dot { width: 14px; height: 14px; background: ${accent}; border-radius: 50%; border: 3px solid #0a0a0f; box-shadow: 0 0 0 2px ${accent}; flex-shrink: 0; margin-top: 4px; }
        .input-field { width: 100%; padding: 12px 16px; background: #131320; border: 1px solid #ffffff18; border-radius: 10px; color: #e8e6f0; font-size: 14px; font-family: inherit; outline: none; transition: border-color 0.2s; }
        .input-field:focus { border-color: ${accent}; }
        .input-field::placeholder { color: #555; }
        @keyframes pulse-glow { 0%,100% { box-shadow: 0 0 0 0 ${accent}55; } 50% { box-shadow: 0 0 0 12px ${accent}00; } }
        @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .float { animation: float 4s ease-in-out infinite; }
      `}</style>

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "#0a0a0fcc", backdropFilter: "blur(12px)", borderBottom: "1px solid #ffffff0a", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", maxWidth: "100%", }}>
        <div style={{ fontWeight: 800, fontSize: 18, letterSpacing: "-0.02em" }}>
          <span className="gradient-text">TG</span>
        </div>
        <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
          {navLinks.map(l => (
            <span key={l} className={`nav-link ${activeNav === l.toLowerCase() ? "active" : ""}`} onClick={() => scrollTo(l.toLowerCase())}>{l}</span>
          ))}
        </div>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <a href="https://www.linkedin.com/in/tanuj-gupta-2bbb132b9/" target="_blank" rel="noreferrer">
            <button className="btn-outline" style={{ padding: "8px 20px", fontSize: 13 }}>LinkedIn</button>
          </a>
          <a href="https://github.com/TanujGupta001" target="_blank" rel="noreferrer">
            <button className="btn-primary" style={{ padding: "8px 20px", fontSize: 13 }}>GitHub</button>
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section id="hero" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "120px 24px 80px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "20%", right: "10%", width: 400, height: 400, background: `radial-gradient(circle, ${accent}22 0%, transparent 70%)`, borderRadius: "50%", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "10%", left: "5%", width: 300, height: 300, background: `radial-gradient(circle, ${accentGreen}18 0%, transparent 70%)`, borderRadius: "50%", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1100, margin: "0 auto", width: "100%" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 40, alignItems: "center" }}>
            <div>
              <div className="mono" style={{ color: accent, fontSize: 14, marginBottom: 16, letterSpacing: "0.1em" }}>Hello, world 👋</div>
              <h1 style={{ fontSize: "clamp(36px, 6vw, 68px)", fontWeight: 800, lineHeight: 1.1, marginBottom: 16, letterSpacing: "-0.03em" }}>
                I'm <span className="gradient-text">Tanuj Gupta</span>
              </h1>
              <div style={{ fontSize: "clamp(18px, 3vw, 26px)", fontWeight: 600, color: "#888", marginBottom: 24, minHeight: 40 }}>
                <span style={{ color: "#e8e6f0" }}>{typedText}</span>
                <span style={{ color: accent, animation: "pulse-glow 1s infinite" }}>|</span>
              </div>
              <p style={{ fontSize: 17, color: "#999", lineHeight: 1.7, maxWidth: 540, marginBottom: 36 }}>
                MERN stack developer specializing in AI-integrated, production-grade web apps. Top 6% on LeetCode with 800+ problems solved.
              </p>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <button className="btn-primary" onClick={() => scrollTo("projects")}>View Projects</button>
                <button className="btn-outline" onClick={() => scrollTo("contact")}>Contact Me</button>
              </div>
              <div style={{ display: "flex", gap: 20, marginTop: 40, flexWrap: "wrap" }}>
                {[["1828", "LeetCode Rating"], ["Top 6%", "Globally"], ["800+", "Problems Solved"], ["2", "Internships"]].map(([v, l]) => (
                  <div key={l}>
                    <div style={{ fontSize: 22, fontWeight: 800, color: accent }}>{v}</div>
                    <div style={{ fontSize: 12, color: "#666", letterSpacing: "0.05em" }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="float" style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-end" }}>
              <div style={{ width: 200, height: 200, borderRadius: "50%", background: `linear-gradient(135deg, ${accent}44, ${accentGreen}44)`, border: `3px solid ${accent}55`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 72, animation: "pulse-glow 3s infinite" }}>👨‍💻</div>
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

      {/* ABOUT */}
      <Section id="about" style={{ background: "#0d0d18" }}>
        <AnimatedSection>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
            <div>
              <div className="mono" style={{ color: accent, fontSize: 13, letterSpacing: "0.1em", marginBottom: 8 }}>// about me</div>
              <h2 style={{ fontSize: 38, fontWeight: 800, marginBottom: 20, letterSpacing: "-0.02em" }}>Building things that <span className="gradient-text">matter</span></h2>
              <p style={{ color: "#999", lineHeight: 1.8, fontSize: 16, marginBottom: 16 }}>
                I'm a Full Stack Developer (MERN) and Competitive Programmer currently pursuing B.Tech in Computer Science & Engineering (IoT) at SKIT, Jaipur — graduating in 2027 with a CGPA of 8.64.
              </p>
              <p style={{ color: "#999", lineHeight: 1.8, fontSize: 16 }}>
                I specialize in AI-integrated, production-grade web applications — from real-time collaborative coding platforms to AI-powered eBook generators. I've interned at two companies, shipping features used in production.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {[["🎓", "B.Tech CSE (IoT)", "SKIT Jaipur, 2027"], ["📍", "Based in", "Jaipur, Rajasthan"], ["💼", "Experience", "2 Internships"], ["🧠", "Speciality", "MERN + AI Integration"]].map(([icon, label, val]) => (
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

      {/* SKILLS */}
      <Section id="skills">
        <AnimatedSection>
          <div className="mono" style={{ color: accent, fontSize: 13, letterSpacing: "0.1em", marginBottom: 8 }}>// technical skills</div>
          <h2 style={{ fontSize: 38, fontWeight: 800, marginBottom: 40, letterSpacing: "-0.02em" }}>What I work with</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
            {Object.entries(skills).map(([cat, items], i) => (
              <AnimatedSection key={cat} delay={i * 0.08}>
                <div className="card" style={{ padding: "24px 20px", height: "100%" }}>
                  <div style={{ fontSize: 12, color: accent, fontWeight: 700, letterSpacing: "0.08em", marginBottom: 14 }}>{cat.toUpperCase()}</div>
                  <div>{items.map(s => <span key={s} className="skill-pill">{s}</span>)}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" style={{ background: "#0d0d18" }}>
        <AnimatedSection>
          <div className="mono" style={{ color: accent, fontSize: 13, letterSpacing: "0.1em", marginBottom: 8 }}>// projects</div>
          <h2 style={{ fontSize: 38, fontWeight: 800, marginBottom: 40, letterSpacing: "-0.02em" }}>Things I've built</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(440px, 1fr))", gap: 24 }}>
            {projects.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.1}>
                <div className="card" style={{ padding: 28, height: "100%", display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 16 }}>
                    <div>
                      <div style={{ fontSize: 20, fontWeight: 800, marginBottom: 2 }}>{p.title}</div>
                      <div style={{ fontSize: 13, color: p.color, fontWeight: 600 }}>{p.subtitle}</div>
                    </div>
                    <div style={{ display: "flex", gap: 8 }}>
                      <a href={p.github} target="_blank" rel="noreferrer" style={{ padding: "6px 12px", background: "#1e1e30", border: "1px solid #ffffff18", borderRadius: 8, fontSize: 12, fontWeight: 600, color: "#ccc", transition: "all 0.2s" }}>GitHub</a>
                    </div>
                  </div>
                  <p style={{ color: "#888", fontSize: 14, lineHeight: 1.7, marginBottom: 16, flex: 1 }}>{p.desc}</p>
                  <div style={{ marginBottom: 14 }}>
                    {p.highlights.map(h => (
                      <Tag key={h} color={p.color}>{h}</Tag>
                    ))}
                  </div>
                  <div>{p.tech.map(t => <Tag key={t}>{t}</Tag>)}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience">
        <AnimatedSection>
          <div className="mono" style={{ color: accent, fontSize: 13, letterSpacing: "0.1em", marginBottom: 8 }}>// experience</div>
          <h2 style={{ fontSize: 38, fontWeight: 800, marginBottom: 40, letterSpacing: "-0.02em" }}>Work history</h2>
          <div style={{ position: "relative", paddingLeft: 30 }}>
            <div style={{ position: "absolute", left: 6, top: 0, bottom: 0, width: 2, background: `linear-gradient(${accent}, ${accentGreen})`, borderRadius: 2 }} />
            {experience.map((e, i) => (
              <AnimatedSection key={e.company} delay={i * 0.15}>
                <div style={{ display: "flex", gap: 24, marginBottom: 40, position: "relative" }}>
                  <div className="timeline-dot" style={{ position: "absolute", left: -37 }} />
                  <div className="card" style={{ padding: "24px 28px", flex: 1 }}>
                    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                      <div>
                        <div style={{ fontSize: 18, fontWeight: 800 }}>{e.role}</div>
                        <div style={{ color: accent, fontWeight: 700, fontSize: 14 }}>{e.company}</div>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <div className="mono" style={{ fontSize: 12, color: "#888" }}>{e.period}</div>
                        <div style={{ fontSize: 12, color: "#666" }}>{e.location}</div>
                      </div>
                    </div>
                    <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                      {e.points.map(pt => (
                        <li key={pt} style={{ fontSize: 14, color: "#999", lineHeight: 1.7, paddingLeft: 16, position: "relative", marginBottom: 6 }}>
                          <span style={{ position: "absolute", left: 0, color: accentGreen, fontWeight: 700 }}>→</span>{pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* EDUCATION */}
      <Section id="education">
        <AnimatedSection>
          <div className="mono" style={{ color: accent, fontSize: 13, letterSpacing: "0.1em", marginBottom: 8 }}>// education</div>
          <h2 style={{ fontSize: 38, fontWeight: 800, marginBottom: 40, letterSpacing: "-0.02em" }}>Academic background</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>
            <AnimatedSection delay={0.05}>
              <div className="card" style={{ padding: "28px 28px", borderLeft: `4px solid ${accentGreen}`, borderRadius: 16 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
                  <div style={{ fontSize: 36 }}>🎓</div>
                  <div>
                    <div style={{ fontSize: 11, color: "#666", fontWeight: 700, letterSpacing: "0.08em", marginBottom: 4 }}>DEGREE</div>
                    <div style={{ fontSize: 18, fontWeight: 800, lineHeight: 1.2 }}>B.Tech — Computer Science & Engineering (IoT)</div>
                  </div>
                </div>
                <div style={{ color: accentGreen, fontWeight: 700, fontSize: 15, marginBottom: 8 }}>Swami Keshvanand Institute of Technology</div>
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
                <div style={{ background: `${accentGreen}18`, border: `1px solid ${accentGreen}44`, borderRadius: 10, padding: "12px 16px", display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ fontSize: 22 }}>⭐</span>
                  <div>
                    <div style={{ fontSize: 11, color: accentGreen, fontWeight: 700, letterSpacing: "0.06em" }}>CURRENT CGPA</div>
                    <div style={{ fontSize: 22, fontWeight: 800, color: "#e8e6f0" }}>8.64 <span style={{ fontSize: 13, color: "#888", fontWeight: 400 }}>/ 10.0</span></div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.12}>
              <div className="card" style={{ padding: "28px 28px", height: "100%" }}>
                <div style={{ fontSize: 11, color: "#666", fontWeight: 700, letterSpacing: "0.08em", marginBottom: 16 }}>KEY COURSEWORK</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {["Data Structures & Algorithms", "DBMS", "Object-Oriented Programming", "Operating Systems", "Computer Networks", "Internet of Things", "Discrete Mathematics", "Software Engineering"].map(c => (
                    <span key={c} style={{ padding: "6px 12px", background: "#1a1a2e", border: "1px solid #ffffff18", borderRadius: 20, fontSize: 12, fontWeight: 600, color: "#c8c5e0" }}>{c}</span>
                  ))}
                </div>
                <div style={{ marginTop: 24 }}>
                  <div style={{ fontSize: 11, color: "#666", fontWeight: 700, letterSpacing: "0.08em", marginBottom: 12 }}>HIGHLIGHTS</div>
                  {[["🏫", "Expected Graduation", "May 2027"], ["📚", "Specialisation", "IoT (Internet of Things)"], ["🏆", "Academic Standing", "Top performer in batch"]].map(([icon, label, val]) => (
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

      {/* ACHIEVEMENTS */}
      <Section id="achievements" style={{ background: "#0d0d18" }}>
        <AnimatedSection>
          <div className="mono" style={{ color: accent, fontSize: 13, letterSpacing: "0.1em", marginBottom: 8 }}>// achievements</div>
          <h2 style={{ fontSize: 38, fontWeight: 800, marginBottom: 40, letterSpacing: "-0.02em" }}>Milestones</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 16 }}>
            {achievements.map((a, i) => (
              <AnimatedSection key={a.text} delay={i * 0.08}>
                <div className="card" style={{ padding: "20px 24px", display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <span style={{ fontSize: 26 }}>{a.icon}</span>
                  <span style={{ color: "#bbb", fontSize: 14, lineHeight: 1.6 }}>{a.text}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* CONTACT */}
      <Section id="contact">
        <AnimatedSection>
          <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
            <div className="mono" style={{ color: accent, fontSize: 13, letterSpacing: "0.1em", marginBottom: 8 }}>// contact</div>
            <h2 style={{ fontSize: 38, fontWeight: 800, marginBottom: 16, letterSpacing: "-0.02em" }}>Let's build something <span className="gradient-text">together</span></h2>
            <p style={{ color: "#888", fontSize: 16, lineHeight: 1.7, marginBottom: 40 }}>
              Open to internships, full-time roles, and exciting collaborations. Drop a message or reach me directly!
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap", marginBottom: 48 }}>
              {[
                { label: "tanuj131124@gmail.com", href: "mailto:tanuj131124@gmail.com", icon: "📧" },
                { label: "GitHub", href: "https://github.com/TanujGupta001", icon: "💻" },
                { label: "LinkedIn", href: "https://www.linkedin.com/in/tanuj-gupta-2bbb132b9/", icon: "🔗" },
                { label: "+91 9588250793", href: "tel:+919588250793", icon: "📞" },
              ].map(l => (
                <a key={l.label} href={l.href} target="_blank" rel="noreferrer">
                  <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "12px 20px", background: "#131320", border: "1px solid #ffffff18", borderRadius: 12, fontSize: 14, fontWeight: 600, color: "#ccc", transition: "all 0.2s", cursor: "pointer" }}>
                    <span>{l.icon}</span><span>{l.label}</span>
                  </div>
                </a>
              ))}
            </div>
            <ContactForm accent={accent} />
          </div>
        </AnimatedSection>
      </Section>

      {/* FOOTER */}
      <div style={{ borderTop: "1px solid #ffffff0a", padding: "28px 24px", textAlign: "center", color: "#444", fontSize: 13 }}>
        <div style={{ display: "flex", justifyContent: "center", gap: 20, marginBottom: 12 }}>
          {[
            { label: "GitHub", href: "https://github.com/TanujGupta001" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/tanuj-gupta-2bbb132b9/" },
            { label: "Email", href: "mailto:tanuj131124@gmail.com" },
          ].map(l => (
            <a key={l.label} href={l.href} target="_blank" rel="noreferrer" style={{ color: "#555", fontSize: 13, fontWeight: 600, transition: "color 0.2s" }}
              onMouseEnter={e => e.target.style.color = accent} onMouseLeave={e => e.target.style.color = "#555"}>
              {l.label}
            </a>
          ))}
        </div>
        <span className="mono">// Designed & built by <span style={{ color: accent }}>Tanuj Gupta</span> · {new Date().getFullYear()}</span>
      </div>
    </div>
  );
}

function ContactForm({ accent }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = e => {
    e.preventDefault();
    const mailto = `mailto:tanuj131124@gmail.com?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(form.message + "\n\nFrom: " + form.email)}`;
    window.open(mailto);
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };
  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14, textAlign: "left" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <input className="input-field" name="name" placeholder="Your name" value={form.name} onChange={handleChange} required />
        <input className="input-field" name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
      </div>
      <textarea className="input-field" name="message" placeholder="Your message..." rows={5} value={form.message} onChange={handleChange} required style={{ resize: "vertical" }} />
      <button className="btn-primary" type="submit" style={{ alignSelf: "center", minWidth: 180 }}>
        {sent ? "✅ Opening Mail..." : "Send Message →"}
      </button>
    </form>
  );
}
