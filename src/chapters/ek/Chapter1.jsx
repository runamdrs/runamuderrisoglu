import ChapterLayout from "../../layouts/ChapterLayout";

export default function Chapter1() {
  return (
    <ChapterLayout
      number="01"
      title="Overview"
      subtitle="Learning electronics by building — four interactive systems on an Arduino Leonardo."
    >
      <div className="grid gap-12 lg:grid-cols-2">

        <div>

          <p className="mb-6 text-lg leading-8 text-slate-700">
            In the summer of 2025 I joined E &amp; K Arge Engineering as an
            engineering intern. Instead of watching demonstrations, I spent
            the internship at a workbench: wiring circuits, reading
            datasheets, and writing the code that made the hardware respond.
          </p>

          <p className="mb-6 text-lg leading-8 text-slate-700">
            Over the internship I designed and built four complete systems
            around the Arduino Leonardo. Each one combined sensors, displays,
            and actuators into something interactive — a car distance sensor,
            a plant care monitor, a countdown machine, and a password-protected
            smart home controller.
          </p>

          <p className="text-lg leading-8 text-slate-700">
            The projects grew in complexity on purpose. The first taught me to
            read a single sensor reliably. By the last, I was coordinating a
            keypad, two kinds of motors, and multiple sensors behind a
            password-protected interface.
          </p>

        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">

          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-600">
            The Four Systems
          </p>

          <ul className="space-y-5">
            {[
              {
                name: "Car Sensor",
                summary:
                  "Ultrasonic distance warnings with LCD alerts, OLED pop-ups, and color detection.",
              },
              {
                name: "Plant Care App",
                summary:
                  "Soil moisture and light monitoring with buzzer, LCD, and LED responses.",
              },
              {
                name: "Countdown Machine",
                summary:
                  "A potentiometer-controlled timer shown on a 7-segment display and over Bluetooth.",
              },
              {
                name: "House Properties App",
                summary:
                  "A password-protected keypad controlling four smart home features.",
              },
            ].map((system) => (
              <li key={system.name}>
                <p className="font-semibold text-slate-900">
                  {system.name}
                </p>
                <p className="mt-1 leading-7 text-slate-600">
                  {system.summary}
                </p>
              </li>
            ))}
          </ul>

        </div>

      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">

        {[
          {
            label: "Where",
            value: "E & K Arge Engineering, Jun – Jul 2025",
          },
          {
            label: "Platform",
            value: "Arduino Leonardo (C/C++)",
          },
          {
            label: "My Role",
            value: "Circuit Design, Wiring & Programming",
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
