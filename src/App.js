import GlobalStyles from "./components/GlobalStyles";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div
      style={{
        fontFamily: "'Syne', 'Space Grotesk', sans-serif",
        background: "#0a0a0f",
        color: "#e8e6f0",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <GlobalStyles />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}
