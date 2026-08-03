const phases = [
  {
    title: "Planning & Ticketing",
    description:
      "Work starts as tickets that describe what needs to be built or fixed.",
  },
  {
    title: "AI-Assisted Development",
    description:
      "AI agents write the changes, with engineers guiding and reviewing them.",
  },
  {
    title: "Independent Testing",
    description:
      "The Test Orchestrator checks finished changes before anything is released.",
  },
];

export default function Pipeline() {
  return (
    <section className="bg-slate-50 py-28">
      <div className="mx-auto max-w-7xl px-8">

        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">
          AI-Native Software Delivery Pipeline
        </p>

        <h2 className="max-w-4xl text-5xl font-bold leading-tight text-slate-900">
          A workflow where AI agents help carry software from idea to release.
        </h2>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-600">
          At Talent-Ray, AI agents do a lot of the building, and engineers
          review the results and make the calls. I worked on the quality side
          of that: making sure what the pipeline produced could actually be
          trusted.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {phases.map((phase) => (
            <div
              key={phase.title}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <h3 className="mb-4 text-2xl font-bold text-slate-900">
                {phase.title}
              </h3>

              <p className="leading-8 text-slate-600">
                {phase.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24">
          <h3 className="text-3xl font-bold text-slate-900">
            Where I Fit In
          </h3>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            My day-to-day work was a loop. Every finished change passed
            through my hands, or through checks I helped build, before it
            moved on.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {[
              {
                step: "01",
                title: "AI Completes a Change",
                text: "A development agent finishes a ticket and hands it off for validation.",
              },
              {
                step: "02",
                title: "I Validate It",
                text: "I test the change manually and with automated Playwright checks.",
              },
              {
                step: "03",
                title: "I Document Findings",
                text: "I write down what worked, what broke, and why.",
              },
              {
                step: "04",
                title: "Ship or Retry",
                text: "Changes that pass move on. The rest go back for another round.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <p className="text-sm font-semibold tracking-[0.2em] text-blue-600">
                  {item.step}
                </p>

                <h4 className="mt-4 text-xl font-bold text-slate-900">
                  {item.title}
                </h4>

                <p className="mt-3 leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
