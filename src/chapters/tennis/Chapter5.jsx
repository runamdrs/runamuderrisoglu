import ChapterLayout from "../../layouts/ChapterLayout";

export default function Chapter5() {
  return (
    <ChapterLayout
      number="05"
      title="Reflection"
      subtitle="What building software for a world I know taught me about design."
    >
      <div className="grid gap-12 lg:grid-cols-2">

        <div>

          <p className="mb-6 text-lg leading-8 text-slate-700">
            Knowing the domain changed how I designed. Because I have played
            in seeded draws, I knew a SeededPlayer is still just a Player, so
            inheritance was the honest model. Because I have seen draw sheets
            with byes, the recursive bracket handled odd fields from the first
            version. Domain knowledge kept turning into design decisions.
          </p>

          <p className="mb-6 text-lg leading-8 text-slate-700">
            The pointer decision taught me the most. Storing Player pointers
            in Match instead of copies meant one source of truth for every
            record, but it also meant I had to think carefully about what
            could go wrong: null players, duplicate participants, winners
            from outside the match. Defensive checks stopped being boilerplate
            and started being the design.
          </p>

          <p className="text-lg leading-8 text-slate-700">
            This was the project where object-oriented programming clicked
            for me. Encapsulation, inheritance, exceptions, and file I/O were
            no longer separate homework topics; they were the reasons a
            five-class program could stay understandable while doing eleven
            different jobs.
          </p>

        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">

          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-600">
            What I Took With Me
          </p>

          <ul className="space-y-5">
            {[
              {
                name: "Model the real world",
                summary:
                  "The best class structure was the one that matched how tournaments actually work.",
              },
              {
                name: "References need guards",
                summary:
                  "Shared state through pointers is powerful exactly when it is validated.",
              },
              {
                name: "Errors are UX",
                summary:
                  "A program that explains bad input and keeps running feels professional; one that crashes does not.",
              },
              {
                name: "Algorithms by hand",
                summary:
                  "Implementing insertion and selection sort myself made their trade-offs stick.",
              },
            ].map((lesson) => (
              <li key={lesson.name}>
                <p className="font-semibold text-slate-900">
                  {lesson.name}
                </p>
                <p className="mt-1 leading-7 text-slate-600">
                  {lesson.summary}
                </p>
              </li>
            ))}
          </ul>

        </div>

      </div>

    </ChapterLayout>
  );
}
