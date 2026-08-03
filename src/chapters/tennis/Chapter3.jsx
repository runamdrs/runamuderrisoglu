import ChapterLayout from "../../layouts/ChapterLayout";

export default function Chapter3() {
  return (
    <ChapterLayout
      number="03"
      title="Running a Tournament"
      subtitle="From a score typed as 6-4 to a recursive knockout bracket."
    >
      <div className="grid gap-12 lg:grid-cols-2">

        <div>

          <p className="mb-6 text-lg leading-8 text-slate-700">
            Everything runs through a menu loop with eleven options. The part
            I found most satisfying was score handling: the official types a
            score the way tennis people actually write one, like 6-4, and the
            Match class parses it, compares the two sides, declares the
            winner, and updates both players' win and loss records.
          </p>

          <p className="mb-6 text-lg leading-8 text-slate-700">
            Sorting was required to be written by hand, so the two sort
            options use two different algorithms on purpose. Sorting by rank
            uses insertion sort, and sorting by wins uses selection sort.
            Writing both made the trade-offs between them concrete instead of
            something I had only read about.
          </p>

          <p className="text-lg leading-8 text-slate-700">
            The bracket generator is recursive. It pairs the current round's
            players, advances one from each pair, gives a bye to the odd
            player out, and then calls itself on the smaller field until a
            single winner remains. It was my first time using recursion on
            something that felt like a real product feature rather than a
            math exercise.
          </p>

        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">

          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-600">
            A Match, Step by Step
          </p>

          <ol className="space-y-5">
            {[
              "The official schedules a match between two registered players, looked up by name.",
              "After play, they enter the score in tennis notation, such as 6-4.",
              "The Match splits the score at the hyphen and compares the two numbers.",
              "The winner is set automatically and both players' records update through their pointers.",
              "Sorting by wins now reflects the result everywhere in the system.",
            ].map((step, index) => (
              <li key={step} className="flex gap-4">
                <span className="text-sm font-semibold text-blue-600">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="leading-7 text-slate-700">
                  {step}
                </span>
              </li>
            ))}
          </ol>

        </div>

      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">

        {[
          {
            label: "Menu Options",
            value: "11 operations in one console loop",
          },
          {
            label: "Sorting",
            value: "Insertion sort by rank, selection sort by wins",
          },
          {
            label: "Bracket",
            value: "Recursive rounds with byes for odd fields",
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
