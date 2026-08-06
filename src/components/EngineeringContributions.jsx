const contributions = [
  {
    title: "Understanding the System",
    description:
      "Learned how the delivery workflow works end to end and where independent testing fits in.",
  },
  {
    title: "Software Testing & Validation",
    description:
      "Tested software changes by hand, found defects, and checked that things behaved the way the ticket said they should.",
  },
  {
    title: "AI-Assisted Development Workflows",
    description:
      "Worked with AI-generated tickets and cleaned up requirements so the development side had something clear to build against.",
  },
  {
    title: "Test Orchestrator Development",
    description:
      "Helped implement, debug, and tune the Test Orchestrator, the automated testing component of the pipeline.",
  },
  {
    title: "Reliability Engineering",
    description:
      "Dug into failed test runs, checked regression results, and verified that fixes actually fixed things.",
  },
  {
    title: "Prompt Engineering",
    description:
      "Rewrote and tested prompts until the AI's output got noticeably more consistent and accurate.",
  },
];

export default function EngineeringContributions() {
  return (
    <section className="bg-slate-50 py-28">
      <div className="mx-auto max-w-7xl px-8">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">
          Engineering Contributions
        </p>

        <h2 className="max-w-4xl text-5xl font-bold leading-tight text-slate-900">
          Contributing across multiple areas of an AI-native software delivery
          pipeline.
        </h2>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-600">
          I ended up touching a lot of different areas, from learning how the
          whole workflow fits together to improving the testing side through
          hands-on validation and prompt work.
        </p>

        <div className="mt-16 grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {contributions.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-lg"
            >
              <h3 className="mb-4 text-2xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="leading-8 text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}