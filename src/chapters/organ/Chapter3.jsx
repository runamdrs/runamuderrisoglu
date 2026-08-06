const decisions = [
  {
    title: "One pipeline instead of two code paths",
    description:
      "Preprocessing and the classifier are bound into a single scikit-learn Pipeline. Without it, training and prediction become two separate pieces of code that have to agree, and the day they stop agreeing the model fails silently rather than loudly.",
  },
  {
    title: "Encoding sex, passing through the rest",
    description:
      "A ColumnTransformer sends donor sex and recipient sex through a OneHotEncoder, since a tree cannot split on the word Female, and passes the five numeric columns through untouched. Random Forests split on thresholds, so scaling would not change a single decision.",
  },
  {
    title: "A forest, not a single tree",
    description:
      "Two hundred trees each see a different slice of the data, and the majority vote smooths out the quirks of any one tree. It also handles the mix of binary, ordinal, and continuous features here without needing them on a common scale.",
  },
  {
    title: "Constrained on purpose",
    description:
      "Maximum depth of 7 and at least 5 samples in every leaf. With 600 rows, an unconstrained forest will happily memorize individual pairs. These limits force it to find patterns that hold across groups instead.",
  },
  {
    title: "Held-out evaluation",
    description:
      "A 70/30 split, with the test set untouched during training. Accuracy measured on data the model has already seen is not a measurement, it is a description.",
  },
  {
    title: "Fixed seeds throughout",
    description:
      "The data generation, the split, and the forest all use fixed random seeds. Every run reproduces exactly, which is what makes it possible to tell whether a change actually changed anything.",
  },
];

const stack = [
  "Python",
  "scikit-learn",
  "pandas",
  "NumPy",
  "matplotlib",
  "Random Forest",
  "Pipelines",
];

export default function Chapter3() {
  return (
    <section className="min-h-screen bg-slate-900 text-white">

      {/* HERO */}

      <div className="px-8 py-36">
        <div className="mx-auto max-w-7xl">

          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
            Chapter 03 · The Model
          </p>

          <h1 className="max-w-5xl text-6xl font-bold leading-tight text-white">
            Six lines of configuration,
            and the reasons behind each one.
          </h1>

          <p className="mt-10 max-w-3xl text-xl leading-9 text-slate-300">
            The modeling code is short. Almost every line of it is a choice
            that could have gone another way, and the value of the project was
            in being able to say why each one went the way it did.
          </p>

        </div>
      </div>


      {/* DECISIONS */}

      <div className="px-8 pb-28">
        <div className="mx-auto max-w-6xl">

          <div className="mb-20">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
              Design Decisions
            </p>

            <h2 className="mt-4 text-5xl font-bold text-white">
              Why the model looks like this.
            </h2>
          </div>

          <div className="space-y-10">
            {decisions.map((item, index) => (
              <div
                key={item.title}
                className="grid gap-8 border-b border-slate-700 pb-10 lg:grid-cols-[80px_1fr]"
              >
                <div className="text-4xl font-bold text-blue-400">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-8 text-slate-300">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>


      {/* TOOLKIT */}

      <div className="px-8 pb-36">
        <div className="mx-auto max-w-6xl">

          <div className="rounded-3xl border border-slate-700 bg-slate-800/50 p-12">

            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Toolkit
            </p>

            <h3 className="mt-4 text-3xl font-bold text-white">
              What I worked with
            </h3>

            <div className="mt-8 flex flex-wrap gap-3">
              {stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-600 px-5 py-2 text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>

            <p className="mt-10 max-w-4xl leading-9 text-slate-300">
              The single most useful thing I learned here was the Pipeline. It
              turns preprocessing from something you remember to do into
              something the model carries with it, which means a new donor and
              recipient pair typed in at the command line goes through exactly
              the same transformation as the 420 pairs the forest trained on.
            </p>

          </div>

        </div>
      </div>

    </section>
  );
}
