import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import Navbar from "./components/header/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Education from "./components/education/Education";
import Experience from "./components/experience/Experience";
import Skills from "./components/skill/Skills";
import Portfolio from "./components/portfolio/Portfolio";
import Blogs from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import "./App.css";
import "./Header.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS once when the component mounts
  }, []); // Only run once on mount

  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className="w-full overflow-x-hidden"
      style={{ backgroundColor: darkMode ? "#1e293b" : "#f9fafb" }}
    >
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* Main content wrapper with padding to offset the fixed navbar */}
      <main>
        {/* hero section */}
        <Hero />
        {/* about section */}
        <About />
        {/* Education */}
        <Education />
        {/* Experience */}
        <Experience />
        {/* Skills */}
        <Skills />
        {/* portfolio */}
        <Portfolio />
        {/* blogs */}
        <Blogs />
        {/* contact */}
        <Contact />
        {/* footer */}
        <Footer />
      </main>
    </div>
  );
}

export default App;
