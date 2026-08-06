import ChapterLayout from "../../layouts/ChapterLayout";

const factors = [
  {
    name: "Donor age",
    weight: "0.30",
    note: "A younger donor organ carries the strongest signal in the outcome literature, so it carries the most weight here.",
  },
  {
    name: "Blood compatibility",
    weight: "0.30",
    note: "Effectively a gate. An incompatible pair loses almost a third of its probability no matter how good the rest looks.",
  },
  {
    name: "HLA match score",
    weight: "0.20",
    note: "Tissue compatibility on a 0 to 10 scale. How closely the donor and recipient immune profiles line up.",
  },
  {
    name: "Age difference",
    weight: "0.10",
    note: "Separate from donor age. A closely matched pair does better than the two ages considered on their own.",
  },
  {
    name: "Sex match",
    weight: "0.05",
    note: "A small effect in the studies I read, so it gets a small weight rather than being dropped entirely.",
  },
  {
    name: "Ischemia time",
    weight: "0.05",
    note: "Hours the organ spends without blood supply, drawn around a mean of 8 and capped at 20.",
  },
];

export default function Chapter2() {
  return (
    <ChapterLayout
      number="02"
      title="The Data"
      subtitle="Real transplant outcomes are protected medical records, so the first engineering problem was building a dataset that did not exist."
    >

      <div className="grid gap-12 lg:grid-cols-2">

        <div>

          <p className="mb-6 text-lg leading-8 text-slate-700">
            A student cannot download transplant outcome records. They are
            protected health information, and rightly so. That left two
            options: give up on the problem, or build a dataset whose structure
            reflects what published research says about it.
          </p>

          <p className="mb-6 text-lg leading-8 text-slate-700">
            I chose the second. I read through transplant outcome studies from
            PubMed, the Organ Procurement and Transplantation Network, and the
            United Network for Organ Sharing, and turned their findings into a
            weighted formula. Each of the six factors below contributes to a
            success probability, weighted by how much the literature says it
            matters. Pairs above 0.5 are labeled successful.
          </p>

          <p className="text-lg leading-8 text-slate-700">
            The result is 600 simulated donor and recipient pairs where the
            relationships between features and outcomes are the ones described
            in the research, even though no individual row corresponds to a
            real person. Fixing the random seed at 123 means the same dataset
            regenerates every run, so a change in accuracy is a change in the
            model rather than a change in the data.
          </p>

        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">

          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-600">
            The Seven Inputs
          </p>

          <ul className="space-y-3 leading-7 text-slate-700">
            <li>Donor age and recipient age, 18 to 120</li>
            <li>Donor sex and recipient sex</li>
            <li>Blood compatibility, yes or no</li>
            <li>HLA match score, 0 to 10</li>
            <li>Ischemia time in hours, 1 to 20</li>
          </ul>

          <p className="mt-8 border-t border-slate-200 pt-6 text-sm leading-7 text-slate-500">
            Blood compatibility is drawn at 80 percent compatible, which keeps
            incompatible pairs in the data without letting them dominate it.
          </p>

        </div>

      </div>


      {/* WEIGHTS */}

      <div className="mt-20">

        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
          The Generating Model
        </p>

        <h2 className="mt-4 text-4xl font-bold text-slate-900">
          What the research said, translated into weights.
        </h2>

        <div className="mt-12 space-y-4">
          {factors.map((factor) => (
            <div
              key={factor.name}
              className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-[200px_100px_1fr]"
            >
              <p className="text-lg font-semibold text-slate-900">
                {factor.name}
              </p>

              <p className="text-lg font-semibold text-blue-600">
                {factor.weight}
              </p>

              <p className="leading-7 text-slate-600">
                {factor.note}
              </p>
            </div>
          ))}
        </div>

      </div>


      {/* LEAKAGE */}

      <div className="mt-20 rounded-3xl bg-slate-900 p-12">

        <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
          The Trap I Had to Avoid
        </p>

        <h3 className="mt-4 text-3xl font-bold text-white">
          The column that knows the answer.
        </h3>

        <p className="mt-8 max-w-4xl text-lg leading-9 text-slate-300">
          The dataset stores the generated probability alongside the outcome,
          because it is useful to inspect. But that column is the answer key. A
          model given access to it would score close to perfect while having
          learned nothing, since the label is just that number thresholded at
          0.5.
        </p>

        <p className="mt-6 max-w-4xl text-lg leading-9 text-slate-300">
          The preprocessing step names the seven real features explicitly and
          drops everything else, so the probability column never reaches the
          classifier. This is data leakage, and it is easy to miss because
          nothing errors out. The model just quietly gets suspiciously good.
        </p>

      </div>

    </ChapterLayout>
  );
}
