import ChapterLayout from "../../layouts/ChapterLayout";

export default function Chapter3() {
  return (
    <ChapterLayout
      number="03"
      title="Plant Care App"
      subtitle="A monitor that watches over a plant's soil and light, and speaks up when something is wrong."
    >
      <div className="grid gap-12 lg:grid-cols-2">

        <div>

          <p className="mb-6 text-lg leading-8 text-slate-700">
            The second system took care of a living thing. A soil moisture
            sensor sat in the pot and measured how dry the soil was, while a
            light-dependent resistor (LDR) tracked how much light reached the
            plant.
          </p>

          <p className="mb-6 text-lg leading-8 text-slate-700">
            When the soil became too dry, the system raised the alarm: a
            buzzer sounded and the LCD displayed an alert telling you it was
            time to water. When the light level dropped too low, an LED
            switched on to supplement the lighting.
          </p>

          <p className="text-lg leading-8 text-slate-700">
            This project was my first time turning raw analog readings into
            decisions. I had to experiment to find sensible thresholds for
            what counts as "too dry" or "too dark," and make sure the alerts
            triggered reliably without false alarms.
          </p>

        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">

          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-600">
            How It Works
          </p>

          <ol className="space-y-5">
            {[
              "The soil moisture sensor reads how dry the soil is.",
              "The LDR measures the ambient light around the plant.",
              "Dry soil triggers the buzzer and an LCD alert to water the plant.",
              "Low light automatically switches on LED lighting.",
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

      <div className="mt-16 grid gap-6 lg:grid-cols-3">

        {[
          {
            label: "Sensing",
            value: "Soil Moisture + LDR Light Sensor",
          },
          {
            label: "Dry Soil Response",
            value: "Buzzer Alarm & LCD Alert",
          },
          {
            label: "Low Light Response",
            value: "Automatic LED Lighting",
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
