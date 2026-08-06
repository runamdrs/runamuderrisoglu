import { useState } from "react";

export default function Footer({
  tagline = "Software Engineering Internship Case Study",
}) {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("runa.muderrisoglu@gmail.com");
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <footer id="links" className="bg-white px-6 md:px-10 pb-14 pt-4 text-slate-900">
      <div className="mx-auto max-w-6xl">

        {/* Double rule, closing the document */}

        <div className="border-t-2 border-slate-900" />
        <div className="mt-1 border-t border-slate-900" />

        <div className="flex flex-col items-center pt-14 text-center">

          <h2 className="text-3xl font-bold">
            Runa Müderrisoğlu
          </h2>

          <p className="mt-6 max-w-4xl text-justify text-lg leading-8 text-slate-700 [hyphens:auto]">
            Computer Science student with an Engineering Physics minor at
            Lenoir-Rhyne University, interested in Artificial Intelligence,
            Robotics, and Biomedical Engineering. Passionate about building
            intelligent software systems through research, software engineering,
            and real-world innovation.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-12">

            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-gold-600">
                University
              </p>
              <p className="mt-2 text-lg">
                Lenoir-Rhyne University
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-gold-600">
                Major
              </p>
              <p className="mt-2 text-lg">
                Computer Science
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-gold-600">
                Minor
              </p>
              <p className="mt-2 text-lg">
                Engineering Physics
              </p>
            </div>

          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <a
              href="https://www.linkedin.com/in/runa-muderrisoglu/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-44 rounded-sm border border-slate-300 py-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-slate-700 transition hover:border-blue-600 hover:text-blue-600"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/runamdrs"
              target="_blank"
              rel="noopener noreferrer"
              className="w-44 rounded-sm border border-slate-300 py-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-slate-700 transition hover:border-blue-600 hover:text-blue-600"
            >
              GitHub
            </a>

          </div>

          <button
            onClick={copyEmail}
            className="mt-5 w-44 rounded-sm border border-slate-300 py-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-slate-700 transition hover:border-blue-600 hover:text-blue-600"
          >
            {copied ? "✓ Email Copied!" : "Copy Email"}
          </button>

          <p className="mt-4 text-sm italic text-slate-500">
            runa.muderrisoglu@gmail.com
          </p>

          <div className="mt-14 w-full border-t border-slate-200 pt-8 text-sm italic text-slate-500">
            © 2026 Runa Müderrisoğlu • {tagline}
          </div>

        </div>

      </div>
    </footer>
  );
}
