export default function ChapterLayout({
  number,
  title,
  subtitle,
  children,
}) {
  return (
    <section className="min-h-screen bg-white">

      <div className="mx-auto max-w-7xl px-16 py-20">

        <p className="text-sm font-semibold uppercase tracking-[0.4em] text-blue-600">
          Chapter {number}
        </p>

        <h1 className="mt-4 text-6xl font-bold text-slate-900">
          {title}
        </h1>

        <p className="mt-6 max-w-3xl text-xl text-slate-500">
          {subtitle}
        </p>

        <div className="mt-20">
          {children}
        </div>

      </div>

    </section>
  );
}