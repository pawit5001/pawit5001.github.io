import React, { useState, useEffect } from "react";

const BackToTop: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 p-2 rounded-full border border-gray-400 dark:border-gray-600 bg-white/90 dark:bg-gray-900/90 text-gray-800 dark:text-gray-100 shadow hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-105 transition-all duration-200 ${show ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      aria-label="Back to top"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
};

export default BackToTop;