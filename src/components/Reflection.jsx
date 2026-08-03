const reflections = [
  {
    title: "AI as an Engineering Collaborator",
    text: "The biggest adjustment was learning to treat AI as a collaborator instead of a replacement. The models could produce genuinely good implementations, but I could never take an output at face value. The real skill turned out to be building a workflow where humans and AI cover for each other's weaknesses.",
  },
  {
    title: "Building Trust Through Validation",
    text: "AI-generated code is only worth something after someone, or something, has independently checked it. What builds trust in an autonomous system is not how smart the model is. It is how reliable the checking around it is. By the end, I cared as much about the tests as the code.",
  },
  {
    title: "Systems Thinking",
    text: "Before this internship I thought of software engineering as writing code to solve one problem at a time. Watching tickets move through creation, development, and testing changed that. Improving the system usually mattered more than perfecting any single piece of it.",
  },
  {
    title: "Learning from Failure",
    text: "Failures stopped feeling like setbacks and started feeling like information. Every failed validation told me something specific about what was weak, and each round after that came back stronger. Somewhere along the way I stopped dreading red test results.",
  },
  {
    title: "Data-Driven Engineering",
    text: "I learned to argue with numbers instead of hunches. When we wanted to know whether a change helped, we looked at the ticket data and the test outcomes instead of guessing. That is a habit I want to keep.",
  },
];

export default function Reflection() {
  return (
    <section className="bg-slate-50 px-8 py-32">
      <div className="mx-auto max-w-6xl">

        {/* Header */}

        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            Reflection
          </p>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            How This Experience Changed My Perspective
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-600">
            This internship changed how I think about software engineering,
            more than I expected it to. Here is what stuck with me.
          </p>
        </div>

        {/* Reflection Cards */}

        <div className="mt-24 space-y-10">
          {reflections.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-6 leading-8 text-slate-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Final Reflection */}

        <div className="mt-24 rounded-3xl bg-slate-900 p-12 text-center">
          <h3 className="text-3xl font-bold text-white">
            Final Reflection
          </h3>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-slate-300">
            I came into this internship thinking of software as code I write.
            I am leaving thinking of it as a system: models, tests, and
            people, each checking the others. The technical skills were worth
            it on their own, but the bigger change is in how I now look at
            what building software even means.
          </p>
        </div>

      </div>
    </section>
  );
}