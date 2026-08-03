function Box({ children }) {
  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-800 px-8 py-5 text-center font-semibold text-white">
      {children}
    </div>
  );
}

export default function DecisionFlow() {
  return (
    <section className="px-8 py-24">
      <div className="mx-auto max-w-6xl">

        <h2 className="mb-20 text-center text-4xl font-bold text-white">
          Decision Flow
        </h2>

        <div className="flex flex-col items-center gap-6">

          <Box>Development Completed</Box>

          <div className="text-3xl text-blue-400">↓</div>

          <Box>Test Orchestrator</Box>

          <div className="text-3xl text-blue-400">↓</div>

          <div className="grid w-full max-w-4xl grid-cols-2 gap-8">

            <Box>Validated</Box>

            <Box>Needs Rework</Box>

          </div>

          <div className="grid w-full max-w-4xl grid-cols-2 gap-8 text-center">

            <div className="text-blue-400">↓</div>

            <div className="text-blue-400">↓</div>

          </div>

          <div className="grid w-full max-w-4xl grid-cols-2 gap-8">

            <Box>Cleared for Release</Box>

            <Box>Back to Development</Box>

          </div>

        </div>

      </div>
    </section>
  );
}