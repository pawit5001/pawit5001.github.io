import React, { useState } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import BackToTop from "./components/layout/BackToTop";
import LanguageToggle from "./components/layout/LanguageToggle";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Projects from "./sections/Projects";
import Awards from "./sections/Awards";

function App() {
  const [lang, setLang] = useState<"en" | "th">("en");

  const toggleLang = () => setLang((l) => (l === "th" ? "en" : "th"));

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar lang={lang} onToggleLang={toggleLang} />
      <Hero lang={lang} />
      <Skills lang={lang} />
      <Experience lang={lang} />
      <Education lang={lang} />
      <Projects lang={lang} />
      <Awards lang={lang} />
      <Footer />
      <BackToTop />
      <LanguageToggle lang={lang} onToggle={toggleLang} />
    </div>
  );
}

export default App;