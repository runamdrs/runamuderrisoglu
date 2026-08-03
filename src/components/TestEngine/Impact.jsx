export default function Impact() {
  return (
    <section className="px-8 py-32">
      <div className="mx-auto max-w-7xl">

        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Engineering Impact
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Building confidence in autonomous software delivery.
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-slate-300">
            The Test Orchestrator stood between development and deployment,
            catching incomplete or unreliable changes before they could ship.
            Its feedback didn't depend on whoever wrote the code, which made
            it easier for everyone to trust what came out of the pipeline.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl rounded-3xl border border-blue-500/30 bg-blue-500/10 p-10">
          <h3 className="text-2xl font-semibold text-white">
            Key Takeaway
          </h3>

          <p className="mt-6 leading-8 text-slate-300">
            If AI is going to write the code, something equally capable has to
            check it. Independent testing did more than catch bugs. It gave
            the whole workflow a feedback loop, and that is what made the
            pipeline's output trustworthy.
          </p>
        </div>

      </div>
    </section>
  );
}