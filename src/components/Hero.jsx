export default function Hero({ onExplore }) {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-700/30 via-slate-950 to-slate-950" />

      {/* Glow Effects */}
      <div className="absolute left-20 top-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-8 text-center">
        <p className="mb-6 text-lg font-medium uppercase tracking-[0.35em] text-blue-300">
          Talent-Ray
        </p>

        <h1 className="max-w-5xl text-6xl font-extrabold leading-tight md:text-8xl">
          When Code Stops
          <br />
          Being the Bottleneck
        </h1>

        <p className="mt-10 max-w-3xl text-xl leading-9 text-slate-300 md:text-2xl">
          How I helped build and test the validation layer of Talent-Ray's
          AI delivery pipeline, where checking the work, not writing it,
          sets the pace.
        </p>

        <button
          type="button"
          onClick={() => onExplore?.()}
          className="mt-14 rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:bg-blue-500"
        >
          Explore Report
        </button>

        <div className="mt-20 space-y-2 text-center">
          <p className="text-lg font-medium text-slate-300">
            Runa Müderrisoğlu
          </p>

          <p className="text-slate-500">
            Voluntary Software Engineering Internship
          </p>

          <p className="text-slate-500">
            May 19 – August 7, 2026
          </p>
        </div>
      </div>
    </section>
  );
}