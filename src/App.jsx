import { useState, useEffect } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CursorTrail from "./components/CursorTrail";
import FloatingNav from "./components/FloatingNav";

import "./App.css";

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen relative overflow-x-hidden bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500">
        <CursorTrail mousePosition={mousePosition} />
        <FloatingNav />

        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
