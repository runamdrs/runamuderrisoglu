import ChapterLayout from "../../layouts/ChapterLayout";

export default function Chapter5() {
  return (
    <ChapterLayout
      number="05"
      title="House Properties App"
      subtitle="A password-protected smart home controller — the project that brought everything together."
    >
      <div className="grid gap-12 lg:grid-cols-2">

        <div>

          <p className="mb-6 text-lg leading-8 text-slate-700">
            The final and most complex system was a miniature smart home.
            Everything sat behind a keypad: only after entering the correct
            password could you access the controls, just like a real home
            security panel.
          </p>

          <p className="mb-6 text-lg leading-8 text-slate-700">
            Once unlocked, the interface controlled four features of the
            house. A servo motor opened and closed the garage door, a stepper
            motor drove the entrance door, a DHT-11 sensor reported the
            temperature, and an ultrasonic sensor watched for motion.
          </p>

          <p className="text-lg leading-8 text-slate-700">
            This project pulled together everything from the earlier ones —
            sensors, displays, and user input — and added two kinds of motors.
            Coordinating all of it behind one keypad menu was the closest I
            came that summer to building a real product.
          </p>

        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">

          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-600">
            The Four Features
          </p>

          <ul className="space-y-5">
            {[
              {
                name: "Garage Door",
                detail: "Opened and closed by a servo motor.",
              },
              {
                name: "Entrance Door",
                detail: "Driven by a stepper motor for precise movement.",
              },
              {
                name: "Temperature",
                detail: "Measured and reported by a DHT-11 sensor.",
              },
              {
                name: "Motion Detection",
                detail: "An ultrasonic sensor watching for movement.",
              },
            ].map((feature) => (
              <li key={feature.name}>
                <p className="font-semibold text-slate-900">
                  {feature.name}
                </p>
                <p className="mt-1 leading-7 text-slate-600">
                  {feature.detail}
                </p>
              </li>
            ))}
          </ul>

        </div>

      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">

        {[
          {
            label: "Security",
            value: "Password-Protected Keypad Interface",
          },
          {
            label: "Actuators",
            value: "Servo Motor + Stepper Motor",
          },
          {
            label: "Sensing",
            value: "DHT-11 Temperature + Ultrasonic Motion",
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
