export default function EngineeringChallenge() {
  return (
    <section className="bg-white py-10">

      <div className="mx-auto max-w-7xl px-8">

        {/* Section Header */}

        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">
          The Engineering Challenge
        </p>

        <h2 className="max-w-4xl text-5xl font-bold leading-tight text-slate-900">
          Traditional software delivery contains many repetitive engineering
          tasks that slow development and delay feedback.
        </h2>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-600">
          Software teams spend a surprising amount of time writing tickets,
          clarifying requirements, testing changes, rerunning regression
          tests, and reporting the results. All of it matters. It just eats
          the hours engineers would rather spend on the hard problems.
        </p>

        <div className="mt-20 grid gap-10 lg:grid-cols-2">

  {/* Traditional */}

  <div className="rounded-3xl border border-red-100 bg-red-50 p-10">

    <h3 className="mb-8 text-2xl font-bold text-red-700">
      Traditional Workflow
    </h3>

    <ul className="space-y-5 text-lg text-slate-700">

      <li>• Manual requirement clarification</li>

      <li>• Manual ticket creation</li>

      <li>• Manual implementation</li>

      <li>• Manual testing</li>

      <li>• Manual regression testing</li>

      <li>• Multiple engineering handoffs</li>

      <li>• Slow feedback loops</li>

    </ul>

  </div>

  {/* AI */}

  <div className="rounded-3xl border border-blue-100 bg-blue-50 p-10">

    <h3 className="mb-8 text-2xl font-bold text-blue-700">
      AI-Native Workflow
    </h3>

    <ul className="space-y-5 text-lg text-slate-700">

      <li>• AI-assisted requirement gathering</li>

      <li>• Automated ticket generation</li>

      <li>• AI-assisted development</li>

      <li>• Autonomous software testing</li>

      <li>• Automated regression analysis</li>

      <li>• Continuous workflow orchestration</li>

      <li>• Rapid engineering feedback</li>

    </ul>

  </div>

</div>
<div className="mt-20 rounded-3xl border-l-8 border-blue-600 bg-slate-50 p-10">

  <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
    Key Engineering Insight
  </p>

  <h3 className="mb-5 text-3xl font-bold text-slate-900">
    The objective was not to replace software engineers.
  </h3>

  <p className="max-w-4xl text-xl leading-9 text-slate-700">
    The pipeline was built to take over the repetitive parts: clarifying
    requirements, writing tickets, testing, regression checks, coordination.
    Engineers keep the interesting work, and the routine work stops piling
    up.
  </p>

</div>
      </div>

    </section>
  );
}