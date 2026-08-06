const contributions = [
  {
    title: "Statistical Workflow in R",
    description:
      "Built the analysis pipeline that took raw field measurements through cleaning, structuring, and testing, so every result could be reproduced from the original data.",
  },
  {
    title: "Regression Analysis",
    description:
      "Modeled how leaf physiological stress responses changed with distance from recreational activity, which is what makes a threshold visible rather than assumed.",
  },
  {
    title: "Multivariate Analysis",
    description:
      "Ecological data arrives as many correlated variables at once. Multivariate methods let us see how soil and leaf measurements moved together across use types.",
  },
  {
    title: "Publication-Quality Visualization",
    description:
      "Designed the figures for the manuscript. A chart in a paper has to carry an argument on its own, which turned out to be a different skill from plotting data to explore it.",
  },
];

const stack = [
  "R",
  "Regression Modeling",
  "Multivariate Statistics",
  "Data Cleaning",
  "Scientific Visualization",
  "Reproducible Analysis",
];

export default function Chapter3() {
  return (
    <section className="min-h-screen bg-slate-900 text-white">

      {/* HERO */}

      <div className="px-8 py-36">
        <div className="mx-auto max-w-7xl">

          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
            Chapter 03 · The Analysis
          </p>

          <h1 className="max-w-5xl text-6xl font-bold leading-tight text-white">
            Turning field measurements
            into scientific evidence.
          </h1>

          <p className="mt-10 max-w-3xl text-xl leading-9 text-slate-300">
            My contribution focused on the statistical side of the study:
            developing the workflow in R, applying regression and multivariate
            analyses, and creating the visualizations that transformed complex
            ecological data into meaningful scientific insights.
          </p>

        </div>
      </div>


      {/* CONTRIBUTIONS */}

      <div className="px-8 pb-28">
        <div className="mx-auto max-w-6xl">

          <div className="mb-20">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
              My Contributions
            </p>

            <h2 className="mt-4 text-5xl font-bold text-white">
              Where the code met the ecology.
            </h2>
          </div>

          <div className="space-y-10">
            {contributions.map((item, index) => (
              <div
                key={item.title}
                className="grid gap-8 border-b border-slate-700 pb-10 lg:grid-cols-[80px_1fr]"
              >
                <div className="text-4xl font-bold text-blue-400">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-8 text-slate-300">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>


      {/* TOOLKIT */}

      <div className="px-8 pb-36">
        <div className="mx-auto max-w-6xl">

          <div className="rounded-3xl border border-slate-700 bg-slate-800/50 p-12">

            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Toolkit
            </p>

            <h3 className="mt-4 text-3xl font-bold text-white">
              What I worked with
            </h3>

            <div className="mt-8 flex flex-wrap gap-3">
              {stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-600 px-5 py-2 text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>

            <p className="mt-10 max-w-4xl leading-9 text-slate-300">
              One of the most rewarding parts of this project was seeing how
              programming and data science can help answer complex ecological
              questions. The analysis was not a service I provided on the side.
              It was how the ecological question got answered.
            </p>

          </div>

        </div>
      </div>

    </section>
  );
}
