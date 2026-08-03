const capabilities = [
  {
    title: "Independent Validation",
    text:
      "Tests every change without relying on the developer's own tests, so nothing gets to grade its own homework.",
  },
  {
    title: "Regression Testing",
    text:
      "Checks that new features don't quietly break things that already worked.",
  },
  {
    title: "Evidence-Based Feedback",
    text:
      "Explains why a change passed or failed so engineers know what to fix.",
  },
  {
    title: "Release Gating",
    text:
      "Makes the call: ready to move forward, or back for more work.",
  },
];

export default function Capabilities() {
  return (
    <section className="px-8 py-24">
      <div className="mx-auto max-w-7xl">

        <h2 className="mb-16 text-center text-4xl font-bold text-white">
          Core Responsibilities
        </h2>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {capabilities.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl bg-slate-800 p-8"
            >
              <h3 className="mb-5 text-2xl font-bold text-white">
                {item.title}
              </h3>

              <p className="leading-8 text-slate-300">
                {item.text}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}