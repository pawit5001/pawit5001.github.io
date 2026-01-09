import React from "react";

type Props = { lang?: string };

const Contact: React.FC<Props> = ({ lang = "en" }) => (
  <section id="contact" className="py-16 px-2 md:px-0 bg-white/70 dark:bg-gray-900/60 backdrop-blur rounded-3xl max-w-2xl mx-auto my-12 shadow-xl border border-gray-200 dark:border-gray-800">
    <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center tracking-wide text-gray-800 dark:text-white">{lang === "th" ? "ติดต่อ" : "Contact"}</h2>
    <div className="bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-8 flex flex-col items-center">
      <div className="flex flex-col items-center gap-2 mb-8">
        <span className="text-gray-700 dark:text-gray-200 text-base font-medium">Email: example@email.com</span>
        <div className="flex gap-4">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 font-medium">GitHub</a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 font-medium">LinkedIn</a>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;