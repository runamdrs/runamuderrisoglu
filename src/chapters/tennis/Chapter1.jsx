import ChapterLayout from "../../layouts/ChapterLayout";

export default function Chapter1() {
  return (
    <ChapterLayout
      number="01"
      title="Overview"
      subtitle="A tennis team captain builds the software that could run her own tournament."
    >
      <div className="grid gap-12 lg:grid-cols-2">

        <div>

          <p className="mb-6 text-lg leading-8 text-slate-700">
            For my CSC 250 final project at Lenoir-Rhyne University, I built a
            complete tournament management system in C++. The topic was an easy
            choice: as captain of the LR Women's Tennis Team, I have lived inside
            tournaments for years. This time I got to build the machinery that
            runs one.
          </p>

          <p className="mb-6 text-lg leading-8 text-slate-700">
            The program is a menu-driven console application for a tournament
            official. It registers players, schedules matches, records scores,
            determines winners, ranks the field, and generates a knockout
            bracket, with every piece of data flowing through a set of classes
            I designed from scratch.
          </p>

          <p className="text-lg leading-8 text-slate-700">
            The real assignment underneath was object-oriented design:
            encapsulation, inheritance, operator use, exception handling, file
            I/O, and hand-written sorting algorithms, all working together in
            one program instead of isolated exercises.
          </p>

        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">

          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-600">
            What the System Does
          </p>

          <ul className="space-y-5">
            {[
              {
                name: "Register & Search",
                summary:
                  "Add players by hand or load a whole roster from a file, then search them by name.",
              },
              {
                name: "Schedule & Score",
                summary:
                  "Create matches between registered players, enter scores like 6-4, and let the system decide the winner.",
              },
              {
                name: "Rank & Sort",
                summary:
                  "Sort the field by rank or by wins using insertion sort and selection sort I wrote myself.",
              },
              {
                name: "Bracket & Save",
                summary:
                  "Generate a knockout bracket recursively and save the full tournament summary to a file.",
              },
            ].map((feature) => (
              <li key={feature.name}>
                <p className="font-semibold text-slate-900">
                  {feature.name}
                </p>
                <p className="mt-1 leading-7 text-slate-600">
                  {feature.summary}
                </p>
              </li>
            ))}
          </ul>

          <a
            href="https://github.com/runamdrs/tennis-tournament-cpp"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 block border-t border-slate-200 pt-6 text-sm font-semibold text-blue-600 transition hover:text-blue-500"
          >
            View the code on GitHub →
          </a>

        </div>

      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">

        {[
          {
            label: "Where",
            value: "CSC 250, Lenoir-Rhyne University, Spring 2025",
          },
          {
            label: "Language",
            value: "C++ (Standard Library only)",
          },
          {
            label: "My Role",
            value: "Design, Implementation & Testing",
          },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
              {item.label}
            </p>

            <p className="mt-3 text-lg font-semibold leading-7 text-slate-900">
              {item.value}
            </p>
          </div>
        ))}

      </div>

    </ChapterLayout>
  );
}
