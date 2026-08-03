import ChapterLayout from "../../layouts/ChapterLayout";

export default function Chapter2() {
  return (
    <ChapterLayout
      number="02"
      title="Car Sensor"
      subtitle="A parking-assist style system that measures distance, warns the driver, and identifies what is ahead."
    >
      <div className="grid gap-12 lg:grid-cols-2">

        <div>

          <p className="mb-6 text-lg leading-8 text-slate-700">
            The first system I built worked like the parking sensors in a
            modern car. An ultrasonic sensor continuously measured the
            distance to whatever was in front of it by sending out a sound
            pulse and timing how long the echo took to return.
          </p>

          <p className="mb-6 text-lg leading-8 text-slate-700">
            As an object came closer, the system escalated its response. The
            LCD screen displayed warning messages, and an OLED display showed
            pop-up alerts so the information was impossible to miss.
          </p>

          <p className="text-lg leading-8 text-slate-700">
            The part I enjoyed most was the extra step: once an object came
            within one meter, the system also detected its color. Getting the
            distance measurement and color detection to work together taught
            me how to coordinate multiple sensors in a single program loop.
          </p>

        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">

          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-600">
            How It Works
          </p>

          <ol className="space-y-5">
            {[
              "The ultrasonic sensor sends a pulse and times the echo to calculate distance.",
              "The LCD shows a warning message that escalates as the object gets closer.",
              "The OLED display pops up alerts alongside the LCD warnings.",
              "Within one meter, the color sensor reads the object and reports its color.",
            ].map((step, index) => (
              <li key={step} className="flex gap-4">
                <span className="text-sm font-semibold text-blue-600">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="leading-7 text-slate-700">
                  {step}
                </span>
              </li>
            ))}
          </ol>

        </div>

      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">

        {[
          {
            label: "Sensing",
            value: "Ultrasonic Distance + Color Detection",
          },
          {
            label: "Output",
            value: "LCD Warnings & OLED Pop-ups",
          },
          {
            label: "Detection Range",
            value: "Color identified within 1 meter",
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
