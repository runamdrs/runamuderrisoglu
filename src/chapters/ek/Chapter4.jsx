import ChapterLayout from "../../layouts/ChapterLayout";

export default function Chapter4() {
  return (
    <ChapterLayout
      number="04"
      title="Countdown Machine"
      subtitle="A user-controlled timer with a physical dial, a 7-segment display, and a Bluetooth connection."
    >
      <div className="grid gap-12 lg:grid-cols-2">

        <div>

          <p className="mb-6 text-lg leading-8 text-slate-700">
            The third system was a countdown timer you controlled with your
            hands. Turning a potentiometer dial set the countdown duration,
            anywhere up to a full hour, and the system translated the dial's
            analog position into minutes and seconds.
          </p>

          <p className="mb-6 text-lg leading-8 text-slate-700">
            The remaining time was shown in two places at once: on a
            7-segment display wired to the board, and on a connected Bluetooth
            device, so you could watch the countdown from across the room.
          </p>

          <p className="text-lg leading-8 text-slate-700">
            This project introduced me to wireless communication on a
            microcontroller. Keeping the physical display and the Bluetooth
            output in sync while the timer counted down taught me to think
            carefully about timing in embedded code.
          </p>

        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">

          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-600">
            How It Works
          </p>

          <ol className="space-y-5">
            {[
              "The potentiometer dial sets the countdown duration, up to one hour.",
              "The Arduino converts the dial's analog reading into a time value.",
              "The 7-segment display shows the remaining time on the device.",
              "A Bluetooth module mirrors the countdown to a connected device.",
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
            label: "Input",
            value: "Potentiometer Dial",
          },
          {
            label: "Range",
            value: "User-set countdown up to 1 hour",
          },
          {
            label: "Output",
            value: "7-Segment Display + Bluetooth",
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
