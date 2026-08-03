import ChapterLayout from "../../layouts/ChapterLayout";

const useTypes = [
  {
    title: "Hiking",
    text: "Foot traffic concentrated along trails, compacting soil where visitors walk most often.",
  },
  {
    title: "Camping",
    text: "Longer stays in fixed spots, which extends the pressure on the same patch of ground.",
  },
  {
    title: "Picnicking",
    text: "Heavy short-term use clustered around accessible, popular areas of the park.",
  },
];

export default function Chapter2() {
  return (
    <ChapterLayout
      number="02"
      title="The Study"
      subtitle="What recreational pressure does to a protected forest."
    >

      <div className="max-w-4xl">

        <p className="mb-6 text-lg leading-8 text-slate-700">
          Protected areas are meant to be visited. That is part of their
          purpose. But visitors change the ground they walk on, and those
          changes reach the trees growing in it.
        </p>

        <p className="text-lg leading-8 text-slate-700">
          The study investigates how recreational activities such as hiking,
          camping, and picnicking influence soil quality and tree health, by
          examining the ecophysiological responses of{" "}
          <span className="italic">Fagus orientalis</span>, the Oriental beech.
          Rather than asking only whether visitors have an effect, the study
          asks how that effect changes with distance from the source of the
          pressure.
        </p>

      </div>

      <div className="mt-20">

        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
          Use Types
        </p>

        <h2 className="mt-4 text-4xl font-bold text-slate-900">
          Three Kinds of Pressure
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">

          {useTypes.map((use) => (
            <div
              key={use.title}
              className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-slate-900">
                {use.title}
              </h3>

              <p className="mt-6 leading-8 text-slate-600">
                {use.text}
              </p>
            </div>
          ))}

        </div>

      </div>

      <div className="mt-20 rounded-3xl border border-slate-200 bg-slate-50 p-12">

        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
          Why Beech Leaves
        </p>

        <h3 className="mt-4 text-3xl font-bold text-slate-900">
          Trees record stress before it becomes visible damage.
        </h3>

        <p className="mt-8 max-w-4xl text-lg leading-9 text-slate-700">
          Leaf physiology responds to what is happening below ground. By
          measuring ecophysiological indicators in Oriental beech leaves at
          varying distances from recreational activity, the study turns a slow,
          hard-to-see process into something measurable, and therefore something
          a park can actually manage.
        </p>

      </div>

    </ChapterLayout>
  );
}
