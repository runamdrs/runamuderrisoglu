import ChapterLayout from "../../layouts/ChapterLayout";

export default function Chapter4() {
  return (
    <ChapterLayout
      number="04"
      title="Files & Failure"
      subtitle="Loading rosters, saving results, and refusing to crash on bad input."
    >
      <div className="grid gap-12 lg:grid-cols-2">

        <div>

          <p className="mb-6 text-lg leading-8 text-slate-700">
            A tournament official should not have to type forty players by
            hand, so the system reads a roster file where each line holds a
            first name, last name, and rank. The loader validates every line:
            a malformed line is reported with its line number and skipped, and
            the rest of the file still loads.
          </p>

          <p className="mb-6 text-lg leading-8 text-slate-700">
            The reverse direction works too. At any point, the official can
            save a full tournament summary, every registered player with their
            record plus every match with its score and winner, to a results
            file.
          </p>

          <p className="text-lg leading-8 text-slate-700">
            Error handling was a grading requirement, but I treated it as a
            design goal. The whole menu runs inside a try-catch block, and the
            classes throw exceptions for the things that should never happen:
            a match between the same player twice, a null player, a score
            without a hyphen, a winner who was not in the match. The user sees
            a clear message and the program keeps running.
          </p>

        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">

          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-600">
            Guarded Against
          </p>

          <ul className="space-y-5">
            {[
              {
                name: "Bad menu input",
                summary:
                  "Non-numeric choices are caught, the stream is cleared, and the menu redisplays.",
              },
              {
                name: "Malformed roster lines",
                summary:
                  "Each file line is parsed and validated; failures are reported by line number and skipped.",
              },
              {
                name: "Impossible matches",
                summary:
                  "A player cannot face themselves, and matches cannot be created with missing players.",
              },
              {
                name: "Invalid scores",
                summary:
                  "Scores must contain a hyphen and parse to numbers; anything else throws a clean exception.",
              },
            ].map((guard) => (
              <li key={guard.name}>
                <p className="font-semibold text-slate-900">
                  {guard.name}
                </p>
                <p className="mt-1 leading-7 text-slate-600">
                  {guard.summary}
                </p>
              </li>
            ))}
          </ul>

        </div>

      </div>

      <div className="mt-16 grid gap-6 lg:grid-cols-3">

        {[
          {
            label: "Input",
            value: "Roster files parsed line by line with validation",
          },
          {
            label: "Output",
            value: "Full tournament summary written to file",
          },
          {
            label: "Safety Net",
            value: "Exceptions caught at the menu, program never crashes",
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
