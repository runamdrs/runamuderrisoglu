import { chapters } from "../data/chapters";

export default function Sidebar({
  current,
  setCurrent,
  onBack,
}) {
  return (
    <aside className="fixed inset-y-0 left-0 z-50 w-72 overflow-y-auto border-r border-slate-200 bg-white">
      <div className="flex min-h-full flex-col p-8">

        {/* BACK TO PORTFOLIO */}

        <button
          type="button"
          onClick={onBack}
          className="mb-10 flex items-center gap-2 text-left text-sm font-medium text-slate-500 transition-colors hover:text-blue-600"
        >
          <span>←</span>
          <span>All Projects</span>
        </button>

        {/* PROJECT INFORMATION */}

        <div className="border-b border-slate-200 pb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
            Talent-Ray · 2026
          </p>

          <h1 className="mt-4 text-2xl font-bold leading-tight text-slate-900">
            When Code Stops
            <br />
            Being the Bottleneck
          </h1>

          <p className="mt-3 text-sm leading-6 text-slate-500">
            Software Engineering Internship Case Study
          </p>
        </div>

        {/* CHAPTER NAVIGATION */}

        <nav className="mt-8 space-y-2">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
            Project Chapters
          </p>

          {chapters.map((chapter, index) => {
            const isActive = current === index;

            return (
              <button
                key={chapter.number}
                type="button"
                onClick={() => setCurrent(index)}
                className={`group w-full rounded-xl px-4 py-4 text-left transition-all duration-200 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                <div className="flex gap-4">
                  {/* Chapter Number */}

                  <div
                    className={`pt-1 text-xs font-semibold tracking-[0.2em] ${
                      isActive
                        ? "text-blue-200"
                        : "text-slate-400"
                    }`}
                  >
                    {chapter.number}
                  </div>

                  {/* Chapter Information */}

                  <div>
                    <div className="font-semibold">
                      {chapter.title}
                    </div>

                    <div
                      className={`mt-1 text-xs leading-5 ${
                        isActive
                          ? "text-blue-100"
                          : "text-slate-500"
                      }`}
                    >
                      {chapter.subtitle}
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </nav>

        {/* SIDEBAR FOOTER */}

        <div className="mt-auto border-t border-slate-200 pt-8">
          <p className="text-xs text-slate-400">
            Project {current + 1 > 0 ? "Chapter" : ""}
          </p>

          <div className="mt-2 flex items-center justify-between">
            <span className="text-sm font-medium text-slate-600">
              {String(current + 1).padStart(2, "0")} /{" "}
              {String(chapters.length).padStart(2, "0")}
            </span>

            <span className="text-xs text-slate-400">
              {Math.round(
                ((current + 1) / chapters.length) * 100
              )}
              %
            </span>
          </div>

          {/* Progress Bar */}

          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-200">
            <div
              className="h-full rounded-full bg-blue-600 transition-all duration-300"
              style={{
                width: `${
                  ((current + 1) / chapters.length) * 100
                }%`,
              }}
            />
          </div>
        </div>

      </div>
    </aside>
  );
}