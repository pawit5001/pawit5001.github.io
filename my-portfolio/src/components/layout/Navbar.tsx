import React, { useState } from "react";

type Props = { lang?: string; onToggleLang?: () => void };

const Navbar: React.FC<Props> = ({ lang = "en", onToggleLang }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleLang = () => {
    if (onToggleLang) onToggleLang();
    setIsOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 z-50 shadow-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between h-14 md:h-16">
              <div className="flex items-center gap-2">
                <button aria-label="Toggle menu" onClick={() => setIsOpen(!isOpen)} className="md:hidden p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {isOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </button>

                {/* language toggle on small screens */}
                <div className="md:hidden">
                  <button onClick={toggleLang} className="px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-semibold text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">{lang === "th" ? "EN" : "TH"}</button>
                </div>
              </div>

              <div className="flex-1 flex justify-center">
                <a href="#home" className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 md:static md:top-auto md:transform-none text-xl md:text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity z-50">{lang === "th" ? "ปวิช วีรคุปต์" : "Pawit Weerakoop"}</a>
              </div>

              <div className="flex items-center gap-4">
                <ul className="hidden md:flex gap-3 lg:gap-6">
                  <li><a href="#home" className="px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 text-base md:text-base font-medium transition-colors">{lang === "th" ? "หน้าแรก" : "Home"}</a></li>
                  <li><a href="#skills" className="px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 text-base md:text-base font-medium transition-colors">{lang === "th" ? "ทักษะ" : "Skills"}</a></li>
                  <li><a href="#experience" className="px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 text-base md:text-base font-medium transition-colors">{lang === "th" ? "ประสบการณ์" : "Experience"}</a></li>
                  <li><a href="#education" className="px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 text-base md:text-base font-medium transition-colors">{lang === "th" ? "การศึกษา" : "Education"}</a></li>
                  <li><a href="#projects" className="px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 text-base md:text-base font-medium transition-colors">{lang === "th" ? "โปรเจกต์" : "Projects"}</a></li>
                  <li><a href="#awards" className="px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 text-base md:text-base font-medium transition-colors">{lang === "th" ? "รางวัล" : "Awards"}</a></li>
                </ul>

                <div className="hidden md:block">
                  <button onClick={toggleLang} className="px-4 py-2 rounded bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-semibold text-base hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">{lang === "th" ? "EN" : "TH"}</button>
                </div>
              </div>
            </div>
        </div>

      </nav>

      {isOpen && (
        <div className="md:hidden fixed left-0 right-0 top-14 z-40 border-t border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg">
          <ul className="px-4 py-3 space-y-2">
            <li><a href="#home" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 font-medium transition-colors">{lang === "th" ? "หน้าแรก" : "Home"}</a></li>
            <li><a href="#skills" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 font-medium transition-colors">{lang === "th" ? "ทักษะ" : "Skills"}</a></li>
            <li><a href="#experience" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 font-medium transition-colors">{lang === "th" ? "ประสบการณ์" : "Experience"}</a></li>
            <li><a href="#education" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 font-medium transition-colors">{lang === "th" ? "การศึกษา" : "Education"}</a></li>
            <li><a href="#projects" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 font-medium transition-colors">{lang === "th" ? "โปรเจกต์" : "Projects"}</a></li>
            <li><a href="#awards" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 font-medium transition-colors">{lang === "th" ? "รางวัล" : "Awards"}</a></li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;