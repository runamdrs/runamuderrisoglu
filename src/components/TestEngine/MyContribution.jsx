const contributions = [
  {
    title: "Workflow Optimization",
    description:
      "Refined how testing tasks were run and evaluated. The changes cut down on wasted iterations and made results more consistent from run to run.",
  },
  {
    title: "Prompt Engineering",
    description:
      "Wrote and reworked the prompts that guide the validation agent. It surprised me how much a small wording change could improve its decisions.",
  },
  {
    title: "Debugging & Root Cause Analysis",
    description:
      "When test runs failed, I went through the logs and outputs to figure out why, then proposed fixes.",
  },
  {
    title: "Validation Strategy",
    description:
      "Checked test results against what the ticket actually asked for, and pushed for checks that give the same answer twice.",
  },
  {
    title: "Reliability Engineering",
    description:
      "Worked on cutting false positives and making runs behave the same way every time, so an automated verdict could be trusted.",
  },
];

export default function MyContribution() {
  return (
    <section className="px-8 py-28">
      <div className="mx-auto max-w-6xl">

        <div className="mb-20">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            My Contributions
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Engineering a more reliable testing pipeline.
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            I didn't build app features. My job was to make the Test
            Orchestrator better at its own job: debugging it, tuning its
            prompts, and tightening the workflow around it so its verdicts
            could be trusted.
          </p>
        </div>

        <div className="space-y-10">
          {contributions.map((item, index) => (
            <div
              key={item.title}
              className="grid gap-8 border-b border-slate-700 pb-10 md:grid-cols-[80px_1fr]"
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
    </section>
  );
}