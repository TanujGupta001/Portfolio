export const skills = {
  Languages: ["C++", "JavaScript", "Python", "SQL", "HTML5", "CSS3"],
  Frontend: ["React.js", "Redux Toolkit", "NextJS", "TailwindCSS", "Bootstrap"],
  "Backend / APIs": ["Node.js", "Express.js", "RESTful APIs", "WebSockets", "JWT"],
  Databases: ["MongoDB", "MySQL"],
  "Cloud/AI": ["RAG", "LANGCHAIN", "LANGGRAPH", "MCP", "Transformers", "DOCKER", "AWS"],
  Tools: ["Git", "GitHub", "Postman", "OpenAI API", "Cloudinary", "Vercel", "Render", "Inngest", "Clerk"],
};

export const projects = [
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

export const experience = [
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

export const achievements = [
  { icon: "🏆", text: "800+ problems solved on LeetCode, CodeChef & Codeforces" },
  { icon: "⭐", text: "LeetCode max rating 1828 — Top 6% globally" },
  { icon: "🚀", text: "Regional Qualifier — NEXT WAVE National Hackathon 2025 (10,000+ participants)" },
  { icon: "📜", text: "Full Stack Web Development Certification — GeeksforGeeks" },
  { icon: "🗄️", text: "SQL 50 Badge on LeetCode" },
];

export const navLinks = ["About", "Skills", "Projects", "Experience", "Education", "Achievements", "Contact"];

export const roles = [
  "Full Stack Developer",
  "MERN Stack Engineer",
  "Competitive Programmer",
  "AI Integrations Builder",
];

export const theme = {
  accent: "#7c6fcd",
  accentGreen: "#1d9e75",
};

export const socialLinks = [
  { label: "tanuj131124@gmail.com", href: "mailto:tanuj131124@gmail.com", icon: "📧" },
  { label: "GitHub", href: "https://github.com/TanujGupta001", icon: "💻" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/tanuj-gupta-2bbb132b9/", icon: "🔗" },
];
