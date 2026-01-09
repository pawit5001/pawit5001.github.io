import React from "react";

type Props = { lang?: string; onToggle?: () => void };

const LanguageToggle: React.FC<Props> = ({ lang = "en", onToggle }) => (
  <button
    className="fixed top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded shadow hover:bg-blue-600"
    onClick={onToggle}
    aria-label="Toggle language"
  >
    {lang === "th" ? "EN" : "TH"}
  </button>
);

export default LanguageToggle;