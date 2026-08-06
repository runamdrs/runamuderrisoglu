import ChapterLayout from "../../layouts/ChapterLayout";

export default function Chapter1() {
  return (
    <ChapterLayout
      number="01"
      title="Overview"
      subtitle="A machine learning tool that estimates whether a donor and a recipient are likely to be a successful match."
    >
      <div className="grid gap-12 lg:grid-cols-2">

        <div>

          <p className="mb-6 text-lg leading-8 text-slate-700">
            Organ matching is a decision made under pressure. A transplant team
            has a donor organ, a waiting list, and a narrow window before the
            organ is no longer viable. The factors that decide whether a
            transplant works are known and measurable, but weighing all of them
            at once, quickly, is exactly the kind of work software is good at.
          </p>

          <p className="mb-6 text-lg leading-8 text-slate-700">
            I built a program that takes seven pieces of information about a
            donor and a recipient and returns a probability that the transplant
            succeeds. It is a course project for CSC 280, not a clinical tool,
            and Chapter 05 is honest about the difference. But building it
            taught me the full shape of a machine learning problem: where the
            data comes from, what the model can learn, and what a number coming
            out of a model actually means.
          </p>

          <p className="text-lg leading-8 text-slate-700">
            The interesting problem turned out not to be the classifier. It was
            everything around it: constructing a dataset when real transplant
            outcomes are protected medical records, keeping the column that
            generated the answer out of the model's reach, and deciding what a
            confidence score is allowed to claim.
          </p>

        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">

          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-600">
            What the Program Does
          </p>

          <ul className="space-y-5">
            {[
              {
                name: "Generates the dataset",
                summary:
                  "Simulates 600 donor and recipient pairs, with outcomes driven by factors published in the transplant literature.",
              },
              {
                name: "Trains a classifier",
                summary:
                  "A Random Forest of 200 trees learns the relationship between the seven inputs and the outcome.",
              },
              {
                name: "Evaluates itself",
                summary:
                  "A 70/30 train and test split, an accuracy score, and a confusion matrix showing which way the errors fall.",
              },
              {
                name: "Predicts a new case",
                summary:
                  "A validated command line interface collects one donor and recipient pair and returns a success probability.",
              },
            ].map((step) => (
              <li key={step.name}>
                <p className="font-semibold text-slate-900">
                  {step.name}
                </p>
                <p className="mt-1 leading-7 text-slate-600">
                  {step.summary}
                </p>
              </li>
            ))}
          </ul>

          <p className="mt-8 border-t border-slate-200 pt-6 text-sm leading-7 text-slate-500">
            Written in Python with scikit-learn, pandas, NumPy, and matplotlib.
          </p>

          <a
            href="https://github.com/runamdrs/organ-donor-matching"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 block text-sm font-semibold text-blue-600 transition hover:text-blue-500"
          >
            View the code on GitHub →
          </a>

        </div>

      </div>

      <div className="mt-16 grid gap-6 lg:grid-cols-3">

        {[
          {
            label: "Course",
            value: "CSC 280, Nov 2025",
          },
          {
            label: "Model",
            value: "Random Forest Classifier",
          },
          {
            label: "My Role",
            value: "Data Design, Modeling & Evaluation",
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
