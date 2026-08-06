import ChapterLayout from "../../layouts/ChapterLayout";

export default function Chapter2() {
  return (
    <ChapterLayout
      number="02"
      title="The Design"
      subtitle="Five classes that mirror how a real tournament is organized."
    >
      <div className="grid gap-12 lg:grid-cols-2">

        <div>

          <p className="mb-6 text-lg leading-8 text-slate-700">
            Before writing any code, I drew the class diagram. The structure
            follows the real world: a Tournament holds Players and Matches, a
            Match connects two Players, and every Player has a Name. Each
            class owns its own data and exposes it only through accessors and
            mutators.
          </p>

          <p className="mb-6 text-lg leading-8 text-slate-700">
            Inheritance shows up where tennis itself uses it. A SeededPlayer
            is a Player with one extra piece of information, a seed number, so
            it extends the Player class and reuses everything else. Its
            toString method calls the parent's version and appends the seed,
            which is exactly what method overriding is for.
          </p>

          <p className="text-lg leading-8 text-slate-700">
            The most interesting decision was how Match refers to its players.
            Instead of copying Player objects, a Match stores pointers to the
            players registered in the Tournament. When a match result comes
            in, the win and loss counts update on the original players, and
            every other part of the program sees the change immediately.
          </p>

        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">

          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-600">
            Class Diagram
          </p>

          <img
            src="/tennis-class-diagram.png"
            alt="UML class diagram showing Tournament, Match, Player, SeededPlayer, and Name classes and their relationships"
            className="w-full rounded-2xl border border-slate-200 bg-white"
          />

        </div>

      </div>

      <div className="mt-16 grid gap-6 lg:grid-cols-2 xl:grid-cols-5">

        {[
          {
            label: "Name",
            value: "First and last name, formatted output",
          },
          {
            label: "Player",
            value: "Name, rank, wins and losses",
          },
          {
            label: "SeededPlayer",
            value: "Inherits Player, adds a seed number",
          },
          {
            label: "Match",
            value: "Two player pointers, score, winner",
          },
          {
            label: "Tournament",
            value: "Owns all players and matches",
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
