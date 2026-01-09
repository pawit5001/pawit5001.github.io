import React from "react";

type Props = { lang?: string };

const Footer: React.FC<Props> = ({ lang = "en" }) => (
  <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-20">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <p className="text-center text-sm text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} {lang === "th" ? "Pawit Weerakoop" : "Pawit Weerakoop"}</p>
    </div>
  </footer>
);

export default Footer;