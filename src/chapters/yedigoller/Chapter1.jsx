import ChapterLayout from "../../layouts/ChapterLayout";

export default function Chapter1() {
  return (
    <ChapterLayout
      number="01"
      title="Overview"
      subtitle="How a Computer Science student ended up contributing to environmental research."
    >
      <div className="grid gap-12 lg:grid-cols-2">

        <div>

          <p className="mb-6 text-lg leading-8 text-slate-700">
            For me, the answer lies in a long-standing interest in the
            relationship between people and the environment. One of the things
            that drew me to computer science was that I never saw it as a field
            confined to software.
          </p>

          <p className="mb-6 text-lg leading-8 text-slate-700">
            I have always wanted to apply computational methods to real-world
            environmental challenges, and this project gave me the opportunity
            to do exactly that.
          </p>

          <p className="text-lg leading-8 text-slate-700">
            I contributed to a research project supported by TÜBİTAK, the
            Scientific and Technological Research Council of Türkiye, carried
            out in Yedigöller National Park. The work led to the preparation of
            a manuscript on how recreational pressure affects the health of
            Oriental beech trees.
          </p>

        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">

          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-600">
            The Manuscript
          </p>

          <h3 className="mb-6 text-2xl font-bold leading-snug text-slate-900">
            Ecophysiological Thresholds of{" "}
            <span className="italic">Fagus orientalis</span> Lipsky Under
            Recreational Pressure
          </h3>

          <p className="leading-8 text-slate-700">
            Distance-Dependent Leaf Physiological Stress Responses Across
            Multiple Use Types in Protected Areas.
          </p>

          <p className="mt-8 border-t border-slate-200 pt-6 text-sm leading-7 text-slate-500">
            I will be happy to share the publication once it is officially
            available for anyone interested in learning more about the
            research.
          </p>

        </div>

      </div>

      <div className="mt-16 grid gap-6 lg:grid-cols-3">

        {[
          {
            label: "Funding",
            value: "TÜBİTAK Supported",
          },
          {
            label: "Field Site",
            value: "Yedigöller National Park, Türkiye",
          },
          {
            label: "My Role",
            value: "Statistical Analysis & Visualization",
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
