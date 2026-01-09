import React, { useState, useEffect } from "react";

type Props = { lang?: string };

const Hero: React.FC<Props> = ({ lang = "en" }) => {
  const [copied, setCopied] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const email = "pawit.wee@hotmail.com";

  useEffect(() => {
    let t: number | undefined;
    if (copied) {
      t = window.setTimeout(() => setCopied(false), 3000);
    }
    return () => {
      if (t) clearTimeout(t);
    };
  }, [copied]);

  useEffect(() => {
    let t2: number | undefined;
    if (showEmail) {
      t2 = window.setTimeout(() => setShowEmail(false), 3000);
    }
    return () => {
      if (t2) clearTimeout(t2);
    };
  }, [showEmail]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setShowEmail(true);
    } catch (e) {
      setShowEmail(true);
    }
  };
  const thHtml = `ผมเป็นนักศึกษาชั้นปีที่ 4 สาขาวิทยาการคอมพิวเตอร์ ที่มหาวิทยาลัยเทคโนโลยีราชมงคลตะวันออก<br>มีความสนใจในด้าน AI และการพัฒนาซอฟต์แวร์ ผมชอบที่จะเปลี่ยนไอเดียใหม่ๆให้เป็นโซลูชันที่สามารถใช้งานได้จริง`;
  const enHtml = `I'm a final-year Computer Science student at Rajamangala University of Technology Tawan-ok with an interest in AI and software development. Experienced in turning ideas into practical solutions.`;

  return (
    <section id="home" className="max-w-3xl mx-auto pt-20 md:pt-24 pb-12 px-4 text-center">
      <h1 className="text-2xl md:text-3xl font-bold mb-4">{lang === "th" ? "สวัสดีครับ" : "Hello..."}</h1>
      <p className="text-lg mb-2" dangerouslySetInnerHTML={{ __html: lang === "th" ? thHtml : enHtml }} />
      <div className="flex flex-col items-center gap-2 mt-4 text-blue-600">
        <div className="flex justify-center items-start gap-8 w-full max-w-md">
          <div className="flex-1 max-w-[60px] flex flex-col items-center">
            <div className="text-sm text-gray-600 mb-1">Resume</div>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Open resume" className="p-2 rounded border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v12m0 0l-4-4m4 4l4-4M21 12v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6" />
              </svg>
            </a>
          </div>

          <div className="flex-1 max-w-[60px] flex flex-col items-center">
            <div className="text-sm text-gray-600 mb-1">GitHub</div>
            <a href="https://github.com/pawit5001" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2 rounded border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.94 3.2 9.12 7.64 10.6.56.1.76-.24.76-.53 0-.26-.01-1-.02-1.95-3.11.68-3.77-1.5-3.77-1.5-.51-1.3-1.25-1.65-1.25-1.65-1.02-.69.08-.68.08-.68 1.13.08 1.72 1.16 1.72 1.16 1 .72 2.62.51 3.26.39.1-.3.39-.51.71-.63-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.43-2.21 1.14-2.99-.12-.28-.5-1.4.11-2.92 0 0 .93-.3 3.05 1.14a10.6 10.6 0 0 1 2.78-.37c.94 0 1.88.13 2.78.37 2.12-1.44 3.05-1.14 3.05-1.14.62 1.52.24 2.64.12 2.92.71.78 1.14 1.77 1.14 2.99 0 4.29-2.62 5.24-5.11 5.52.4.34.76 1.02.76 2.06 0 1.49-.01 2.69-.01 3.05 0 .29.2.64.77.53C19.05 20.87 22.25 16.69 22.25 11.75 22.25 5.48 17.27.5 12 .5z" />
              </svg>
            </a>
          </div>

          <div className="flex-1 max-w-[60px] flex flex-col items-center">
            <div className="text-sm text-gray-600 mb-1">Email</div>
            <button onClick={handleCopyEmail} aria-label="Send email" className="p-2 rounded border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" />
              </svg>
            </button>
          </div>
        </div>

        {/* copy/notification area */}
        <div className="text-sm text-gray-600 mt-1 text-center">
          <div aria-live="polite" className="min-h-[1rem]">
            {copied ? <span className="text-green-600">Copied email to clipboard</span> : null}
          </div>
          {showEmail ? (
            <div className="mt-1 text-gray-700 select-all">{email}</div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default Hero;
