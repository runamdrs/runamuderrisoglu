import Footer from "../../components/Footer";

const reflections = [
  {
    title: "Computer science is not confined to software",
    text: "This experience reinforced my belief that computer science extends far beyond software development and can play a meaningful role in advancing scientific research. The same skills that build applications can also test hypotheses about a forest.",
  },
  {
    title: "Learning outside my own discipline",
    text: "Contributing to this project reinforced how much I enjoy learning beyond my own field and collaborating with researchers from different ones. I had to understand enough ecology to know whether my analysis was answering the right question.",
  },
  {
    title: "Analysis as scientific argument",
    text: "Working at the intersection of computer science and ecology showed me how computational methods can reveal patterns that might otherwise go unnoticed, and support more informed conservation decisions.",
  },
];

export default function Chapter5() {
  return (
    <>
      <section className="bg-slate-50 px-8 py-32">
        <div className="mx-auto max-w-6xl">

          {/* Header */}

          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
              Reflection
            </p>

            <h2 className="mt-4 text-5xl font-bold text-slate-900">
              Working Across Disciplines
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-600">
              What contributing to environmental research taught me about my
              own field.
            </p>
          </div>

          {/* Reflection Cards */}

          <div className="mt-24 space-y-10">
            {reflections.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-2xl font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-6 leading-8 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Acknowledgment */}

          <div className="mt-24 rounded-3xl border border-slate-200 bg-white p-12 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Acknowledgment
            </p>

            <h3 className="mt-4 text-3xl font-bold text-slate-900">
              With thanks to Prof. Dr. Haldun Müderrisoğlu
            </h3>

            <p className="mt-8 max-w-4xl text-lg leading-9 text-slate-600">
              I would like to express my sincere gratitude to Prof. Dr. Haldun
              Müderrisoğlu for trusting me with the opportunity to contribute to
              this research. His mentorship, guidance, and expertise made this
              an invaluable learning experience, and I am truly thankful for his
              support throughout this project.
            </p>
          </div>

          {/* Final Reflection */}

          <div className="mt-16 rounded-3xl bg-slate-900 p-12 text-center">
            <h3 className="text-3xl font-bold text-white">
              Looking Forward
            </h3>

            <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-slate-300">
              This experience has strengthened my passion for combining computer
              science with environmental science. I look forward to continuing
              to use data science, programming, and artificial intelligence to
              better understand and protect the natural world.
            </p>
          </div>

        </div>
      </section>

      <Footer tagline="Environmental Research Case Study" />
    </>
  );
}
