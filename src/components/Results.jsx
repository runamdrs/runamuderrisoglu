import { EngineeringInsights } from "./EngineeringInsights";

const highlights = [
  {
    metric: "178",
    title: "Tickets Processed",
    description:
      "Over a 16-day window near the end of my internship, the workflow handled 178 engineering tasks.",
  },
  {
    metric: "94%",
    title: "Passed Autonomous Testing",
    description:
      "Most finished changes made it through the Test Orchestrator's independent checks.",
  },
  {
    metric: "48%",
    title: "Needed Additional Dev Rounds",
    description:
      "Nearly half of all tickets needed a second or later round of development before they passed. This is why the testing layer matters.",
  },
];

export default function Results() {
  return (
    <>
      <section className="bg-white px-8 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
              Results
            </p>

            <h2 className="mt-4 text-5xl font-bold text-slate-900">
              What the numbers showed.
            </h2>

            <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-slate-600">
              The data backed up what I saw day to day: an AI-assisted
              workflow can move fast without giving up on quality, as long as
              the testing keeps up.
            </p>
          </div>

          <div className="mt-24 grid gap-8 lg:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-8"
              >
                <div className="text-5xl font-bold text-blue-600">
                  {item.metric}
                </div>

                <h3 className="mt-5 text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-6 text-slate-400">
            Methodology: all figures come from the pipeline's ticket records
            for July 13 to July 28, 2026, a 16-day window. Percentages are out
            of all 178 tickets in that window. Rework counts come from the
            number of development rounds recorded on each ticket.
          </p>
        </div>
      </section>

      <EngineeringInsights />
    </>
  );
}