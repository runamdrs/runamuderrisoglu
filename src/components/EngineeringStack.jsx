const stack = [
  {
    name: "Microsoft Planner",
    category: "Project Management",
    description:
      "How I kept track of my work items and what needed attention next.",
  },
  {
    name: "Claude Code",
    category: "AI Development",
    description:
      "My main tool for AI-assisted coding and debugging.",
  },
  {
    name: "Playwright",
    category: "Testing",
    description:
      "What I used to write and run end-to-end browser tests.",
  },
  {
    name: "Microsoft Graph API",
    category: "Integration",
    description:
      "Microsoft's REST APIs, which I used to read and update task data from code.",
  },
  {
    name: "Git & Git Worktrees",
    category: "Version Control",
    description:
      "Branching and worktrees for working on several things at once without them colliding.",
  },
  {
    name: "JavaScript / TypeScript",
    category: "Programming",
    description:
      "The languages I wrote most of my code in.",
  },
  {
    name: "Node.js",
    category: "Runtime",
    description:
      "The runtime behind the backend services and tooling I worked with.",
  },
  {
    name: "Visual Studio Code",
    category: "Development Environment",
    description:
      "My editor for everything: coding, debugging, and reviewing.",
  },
];

export default function EngineeringStack() {
  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-7xl px-8">

        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">
          Engineering Stack
        </p>

        <h2 className="max-w-4xl text-5xl font-bold leading-tight text-slate-900">
          Technologies I worked with during the internship.
        </h2>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-600">
          The internship involved working with modern software engineering
          tools spanning project management, AI-assisted development, testing,
          version control, and API integration.
        </p>

        <div className="mt-16 grid gap-8 lg:grid-cols-2 xl:grid-cols-4">

          {stack.map((tool) => (

            <div
              key={tool.name}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition hover:shadow-lg"
            >

              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600">
                {tool.category}
              </p>

              <h3 className="mb-4 text-2xl font-bold text-slate-900">
                {tool.name}
              </h3>

              <p className="leading-7 text-slate-600">
                {tool.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}