import ChapterLayout from "../../layouts/ChapterLayout";

const findings = [
  {
    title: "Stress responses depend on distance",
    text: "Leaf physiological stress in Oriental beech did not respond to recreation as a simple present-or-absent effect. It varied with how far a tree stood from the activity, which is the pattern the manuscript's title points to.",
  },
  {
    title: "Use type matters, not just use volume",
    text: "Hiking, camping, and picnicking place different kinds of pressure on the same forest. Comparing across use types separates the effect of how an area is used from how much it is used.",
  },
  {
    title: "Thresholds can be measured",
    text: "The findings identify measurable ecological thresholds: points where pressure begins to register in tree physiology. A threshold is what turns a general concern into a number a park manager can plan around.",
  },
];

export default function Chapter4() {
  return (
    <ChapterLayout
      number="04"
      title="What We Found"
      subtitle="Measurable thresholds that can support more sustainable management of protected forests."
    >

      <div className="space-y-10">
        {findings.map((item) => (
          <div
            key={item.title}
            className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-slate-900">
              {item.title}
            </h3>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {item.text}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-20 rounded-3xl bg-slate-900 p-12">

        <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
          Why It Matters
        </p>

        <h3 className="mt-4 text-3xl font-bold text-white">
          Conservation decisions need numbers, not intuition.
        </h3>

        <p className="mt-8 max-w-4xl text-lg leading-9 text-slate-300">
          Computational methods can reveal patterns that might otherwise go
          unnoticed. Identifying where recreational pressure starts to show up
          in tree health gives protected areas something concrete to work with
          when deciding where trails run, where camping is allowed, and how
          close visitors should come to the trees the park exists to protect.
        </p>

        <p className="mt-8 max-w-4xl text-sm leading-7 text-slate-500">
          Detailed results and figures are held back until the manuscript is
          officially published.
        </p>

      </div>

    </ChapterLayout>
  );
}
