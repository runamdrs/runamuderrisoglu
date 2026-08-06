import ChapterLayout from "../../layouts/ChapterLayout";

const guards = [
  {
    name: "Numeric ranges",
    detail:
      "Ages, HLA score, and ischemia time are each checked against the range the model was trained on. A donor age of 400 is rejected rather than quietly predicted.",
  },
  {
    name: "Non-numeric input",
    detail:
      "Anything that is not a number raises ValueError, which is caught and turned into a message that asks again instead of a stack trace.",
  },
  {
    name: "Categorical input",
    detail:
      "Sex is normalized and checked against the two values the encoder learned, so a typo cannot reach a model that has never seen it.",
  },
  {
    name: "Binary input",
    detail:
      "Blood compatibility accepts only 0 or 1, phrased as yes or no at the prompt so the user is not guessing at the encoding.",
  },
];

export default function Chapter4() {
  return (
    <ChapterLayout
      number="04"
      title="Results"
      subtitle="What the evaluation showed, and what the program does with a case it has never seen."
    >

      <div className="grid gap-12 lg:grid-cols-2">

        <div>

          <p className="mb-6 text-lg leading-8 text-slate-700">
            The forest recovers the structure of the data well. On the 180
            pairs held out from training it reaches 93 percent accuracy, which
            is high enough that the interesting question stops being how often
            the model is right and becomes what kind of wrong it is when it
            misses.
          </p>

          <p className="mb-6 text-lg leading-8 text-slate-700">
            That is what the confusion matrix is for. A single accuracy number
            treats both mistakes as equal, and in a transplant context they are
            not remotely equal. Predicting success for a pair that would fail
            is a different kind of error from predicting failure for a pair
            that would have worked, and each one costs something different.
          </p>

          <p className="text-lg leading-8 text-slate-700">
            The program plots both: a confusion matrix labeled with the actual
            outcomes rather than 0 and 1, and an accuracy bar on a fixed 0 to 1
            axis. The fixed axis is deliberate. An auto-scaled bar chart can
            make any score look like it fills the frame.
          </p>

        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">

          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-600">
            The Confusion Matrix
          </p>

          <div className="grid grid-cols-2 gap-4">
            {[
              {
                label: "True Successful",
                text: "Predicted successful, and it was.",
              },
              {
                label: "False Successful",
                text: "Predicted successful, but it was not. The costly one.",
              },
              {
                label: "False Unsuccessful",
                text: "Predicted failure for a pair that would have worked.",
              },
              {
                label: "True Unsuccessful",
                text: "Predicted failure, and it failed.",
              },
            ].map((cell) => (
              <div
                key={cell.label}
                className="rounded-2xl border border-slate-200 bg-white p-5"
              >
                <p className="text-sm font-semibold text-slate-900">
                  {cell.label}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {cell.text}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 border-t border-slate-200 pt-6 text-sm leading-7 text-slate-500">
            Reading the matrix rather than the accuracy score is what tells you
            whether a model is cautious or overconfident.
          </p>

        </div>

      </div>


      {/* THE INTERFACE */}

      <div className="mt-20">

        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
          The Interface
        </p>

        <h2 className="mt-4 text-4xl font-bold text-slate-900">
          Every input is validated before the model sees it.
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          A model is only as trustworthy as the values reaching it. The command
          line interface loops on each prompt until the input is valid, so the
          classifier never receives a value from outside the range it was
          trained on.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {guards.map((guard) => (
            <div
              key={guard.name}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-slate-900">
                {guard.name}
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                {guard.detail}
              </p>
            </div>
          ))}
        </div>

      </div>


      {/* OUTPUT */}

      <div className="mt-20 rounded-3xl bg-slate-900 p-12">

        <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
          The Output
        </p>

        <h3 className="mt-4 text-3xl font-bold text-white">
          A probability, not a verdict.
        </h3>

        <p className="mt-8 max-w-4xl text-lg leading-9 text-slate-300">
          The program reports both the predicted class and the probability
          behind it. That second number is the one that matters. A prediction
          of success at 0.51 and a prediction of success at 0.94 are the same
          class and completely different situations, and hiding that behind a
          yes or no would throw away the most useful thing the model produces.
        </p>

      </div>

    </ChapterLayout>
  );
}
