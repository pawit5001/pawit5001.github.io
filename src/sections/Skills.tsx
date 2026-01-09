import React from "react";

type Props = { lang?: string };

const Skills: React.FC<Props> = ({ lang = "en" }) => (
  <section id="skills" className="max-w-3xl mx-auto py-12 px-4 scroll-mt-20">
    <h2 className="text-2xl font-bold mb-8">{lang === "th" ? "ทักษะ" : "Skills"}</h2>

    <div className="mb-6">
      <p><strong>Programming:</strong> Python, JavaScript, HTML, CSS, SQL, Lua, C</p>
    </div>
    <div className="mb-6">
      <p><strong>Frameworks & Libraries:</strong> React, FastAPI, Bootstrap, Tailwind CSS</p>
    </div>
    <div className="mb-6">
      <p><strong>ML/AI:</strong> TensorFlow, Keras, OpenCV</p>
    </div>
    <div className="mb-6">
      <p><strong>Database:</strong> MySQL, MongoDB</p>
    </div>
    <div className="mb-6">
      <p><strong>Tools:</strong> Git, GitHub, VS Code, Jupyter Notebook, Figma</p>
    </div>
  </section>
);

export default Skills;