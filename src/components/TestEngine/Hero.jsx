export default function Hero() {
  return (
    <section className="px-8 py-14">
      <div className="mx-auto max-w-7xl">

        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
          Autonomous Testing Engine
        </p>

        <h1 className="max-w-5xl text-6xl font-bold leading-tight text-white">
          Independent software validation
          before deployment.
        </h1>

        <p className="mt-10 max-w-3xl text-xl leading-9 text-slate-300">
          The Test Orchestrator is the automated tester that checks completed
          changes before they reach deployment. It runs its own tests,
          separate from whoever wrote the code, and decides whether a change
          is ready or needs more work.
        </p>

      </div>
    </section>
  );
}