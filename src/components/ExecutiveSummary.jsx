export default function ExecutiveSummary() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-8">

        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
          Executive Summary
        </p>

        <h2 className="mb-8 text-5xl font-bold text-slate-900">
          Building an AI-Native Engineering Workflow
        </h2>

        <div className="grid gap-12 lg:grid-cols-2">

          <div>

            <p className="mb-6 text-lg leading-8 text-slate-700">
              I spent my internship at Talent-Ray working on the Test
              Orchestrator, the part of the company's AI-assisted delivery
              workflow that decides whether finished code is actually ready.
            </p>

            <p className="mb-6 text-lg leading-8 text-slate-700">
              Most of my time went into making it more dependable: testing it,
              debugging it, tuning the prompts that drive it, and smoothing
              out the workflow around it.
            </p>

            <p className="text-lg leading-8 text-slate-700">
              This report covers the problem the team was solving, what I
              worked on, and what I learned along the way.
            </p>

          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">

            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-600">
              Engineering Insight
            </p>

            <h3 className="mb-6 text-2xl font-bold text-slate-900">
              Independent testing remains essential.
            </h3>

            <p className="leading-8 text-slate-700">
              Almost half of all tickets (48%) needed at least one more round
              of development before their changes held up. AI code often
              looks finished before it actually is. That gap is the reason
              the Test Orchestrator exists.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}