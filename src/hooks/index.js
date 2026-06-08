import { useState, useEffect, useRef } from "react";
import { roles } from "../data";

// Intersection Observer hook for scroll animations
export function useInView(threshold = 0.15) {
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

// Typewriter effect hook
export function useTypewriter() {
  const [typedText, setTypedText] = useState("");
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
        } else {
          setCharIdx((c) => c + 1);
        }
      } else {
        setTypedText(current.slice(0, charIdx - 1));
        if (charIdx - 1 === 0) {
          setDeleting(false);
          setRoleIdx((r) => (r + 1) % roles.length);
          setCharIdx(0);
        } else {
          setCharIdx((c) => c - 1);
        }
      }
    }, deleting ? 40 : 70);
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, roleIdx]);

  return typedText;
}

// Active nav section tracker
export function useActiveNav() {
  const [activeNav, setActiveNav] = useState("hero");

  useEffect(() => {
    const sections = [
      "hero", "about", "skills", "projects",
      "experience", "education", "achievements", "contact",
    ];
    const handleScroll = () => {
      for (const s of [...sections].reverse()) {
        const el = document.getElementById(s);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveNav(s);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return activeNav;
}
