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
    <footer id="links" className="bg-slate-950 px-8 py-20 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center text-center">

        <h2 className="text-3xl font-bold">
          Runa Müderrisoğlu
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          Computer Science student with an Engineering Physics minor at
  Lenoir-Rhyne University, interested in Artificial Intelligence,
  Robotics, and Biomedical Engineering. Passionate about building
  intelligent software systems through research, software engineering,
  and real-world innovation.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-12 text-slate-300">

          <div>
            <p className="text-sm uppercase tracking-widest text-slate-500">
              University
            </p>
            <p className="mt-2">
              Lenoir-Rhyne University
            </p>
          </div>

          <div>
            <p className="text-sm uppercase tracking-widest text-slate-500">
              Major
            </p>
            <p className="mt-2">
              Computer Science
            </p>
          </div>

          <div>
            <p className="text-sm uppercase tracking-widest text-slate-500">
              Minor
            </p>
            <p className="mt-2">
              Engineering Physics
            </p>
          </div>

        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6">

          <a
            href="https://www.linkedin.com/in/runa-muderrisoglu/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-slate-700 px-6 py-3 font-medium transition-all hover:border-blue-500 hover:text-blue-400"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/runamdrs"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-slate-700 px-6 py-3 font-medium transition-all hover:border-blue-500 hover:text-blue-400"
          >
            GitHub
          </a>

          <button
            onClick={copyEmail}
            className="rounded-full border border-slate-700 px-6 py-3 font-medium transition-all hover:border-blue-500 hover:text-blue-400"
          >
            {copied ? "✓ Email Copied!" : "Copy Email"}
          </button>

        </div>

        <p className="mt-4 text-sm text-slate-500">
          runa.muderrisoglu@gmail.com
        </p>

        <div className="mt-16 w-full border-t border-slate-800 pt-8 text-sm text-slate-500">
          © 2026 Runa Müderrisoğlu • {tagline}
        </div>

      </div>
    </footer>
  );
}