import Footer from "./Footer";

const experiences = [
  {
    period: "May - Aug 2026",
    role: "Software Engineering Intern",
    org: "Talent-Ray",
    bullets: [
      "Worked on the Test Orchestrator, the automated testing system that checks AI-written code before release.",
      "Tested software changes by hand and with Playwright end-to-end tests.",
      "Tuned the prompts behind the validation agent and debugged failed test runs.",
    ],
    projectId: "talent-ray",
  },
  {
    period: "Aug 2025 - Present",
    role: "Tutor & Academic Coach",
    org: "Lenoir-Rhyne University",
    bullets: [
      "Tutor students in Computer Science and Engineering Physics courses.",
      "Coach peers on study strategies to help them succeed academically.",
    ],
  },
  {
    period: "Jun - Jul 2025",
    role: "Engineering Intern",
    org: "E & K Arge Engineering",
    bullets: [
      "Built and tested electronic prototypes with Arduino, sensors, displays, and motors.",
      "Worked with Raspberry Pi, Linux, Python, and Flask to connect sensors to web interfaces.",
      "Used TensorFlow and OpenCV for object detection and image classification projects.",
    ],
    projectId: "ek-arduino",
  },
  {
    period: "Jul - Aug 2024",
    role: "Chocolate Engineer",
    org: "ZD Chocolates",
    bullets: [
      "Assisted in producing and selling handcrafted chocolates, from tempering and fillings to customer communication.",
    ],
  },
];

const athletics = [
  {
    period: "Aug 2023 - Present",
    role: "LR Women's Tennis Team Captain",
    org: "Lenoir-Rhyne University",
    bullets: [
      "Academic All-America, Second Team: among the top 12 players in the nation when combining academic and athletic performance.",
      "SAC Freshman of the Year, chosen by conference coaches.",
      "First Team Singles and Doubles (SAC); finished 13th singles player in the Southeast region.",
      "SAC Commissioner's Honor Roll.",
    ],
  },
  {
    period: "Oct 2024",
    role: "Bears Leadership Academy",
    org: "Lenoir-Rhyne University",
    bullets: [
      "Completed a leadership program focused on growing as a teammate, captain, and leader.",
    ],
  },
];

const skills = [
  {
    group: "Programming Languages",
    items: ["JavaScript", "TypeScript", "Java", "C++", "Python", "R"],
  },
  {
    group: "Web, AI & Testing",
    items: [
      "React",
      "Node.js",
      "Playwright",
      "Tailwind CSS",
      "Claude Code",
      "Prompt Engineering",
      "End-to-End Testing",
      "Machine Learning",
    ],
  },
  {
    group: "Hardware & Embedded",
    items: ["Arduino", "Raspberry Pi", "Embedded Systems"],
  },
  {
    group: "Data & Tools",
    items: [
      "scikit-learn",
      "pandas",
      "NumPy",
      "Matplotlib",
      "Tableau",
      "Git & Git Worktrees",
      "Microsoft Graph API",
      "Navicat",
      "VS Code",
      "Eclipse",
    ],
  },
  {
    group: "Soft Skills",
    items: [
      "Hardworking",
      "Team Player",
      "Leadership",
      "Communication",
      "Adaptability",
      "Problem Solving",
    ],
  },
];

const projects = [
  {
    id: "talent-ray",
    number: "01",
    type: "Software Engineering • AI",
    year: "2026",
    title: "When Code Stops Being the Bottleneck",
    description:
      "During my software engineering internship at Talent-Ray, I worked on the Test Orchestrator, the automated testing system that decides whether AI-written code is actually ready to ship.",
    tags: ["Artificial Intelligence", "Software Engineering", "Testing"],
  },

  {
    id: "yedigoller",
    number: "02",
    type: "Research • Data Science",
    year: "2026",
    title: "Reading a Forest Through Data",
    description:
      "A TÜBİTAK-supported study in Yedigöller National Park on how hiking, camping, and picnicking affect the health of Oriental beech trees. I built the statistical workflow in R and the figures for the manuscript.",
    tags: ["R", "Statistics", "Environmental Research", "Data Visualization"],
  },

  {
    id: "organ-matching",
    number: "03",
    type: "Machine Learning • Healthcare",
    year: "2025",
    title: "Predicting Transplant Outcomes with Data",
    description:
      "A Random Forest model that estimates whether a donor and recipient are likely to be a successful match. Built for CSC 280, including the simulated dataset behind it and an honest account of what a model trained on simulated outcomes can and cannot claim.",
    tags: ["Python", "scikit-learn", "Machine Learning", "Data Science"],
  },

  {
    id: "ek-arduino",
    number: "04",
    type: "Embedded Systems • Electronics",
    year: "2025",
    title: "Four Machines on One Microcontroller",
    description:
      "My engineering internship at E & K Arge Engineering. I built four interactive systems on an Arduino Leonardo: a car distance sensor with color detection, a plant care monitor, a Bluetooth countdown machine, and a password-protected smart home controller.",
    tags: ["Arduino", "Embedded Systems", "Sensors", "C/C++"],
  },

  {
    id: "tennis-tournament",
    number: "05",
    type: "Software Engineering • C++",
    year: "2025",
    title: "A Tournament System Built by a Tennis Team Captain",
    description:
      "My CSC 250 final project: a menu-driven tournament management system in C++. It registers players, schedules matches, parses scores, sorts the field with hand-written algorithms, and generates knockout brackets recursively, built on five classes I designed from a UML diagram.",
    tags: ["C++", "Object-Oriented Programming", "Algorithms", "Exception Handling"],
  },

  // ADD FUTURE PROJECTS HERE
  //
  // {
  //   id: "robotics-project",
  //   number: "03",
  //   type: "Robotics",
  //   year: "2026",
  //   title: "Robotics Project",
  //   description:
  //     "A short description explaining the project and what I built.",
  //   tags: ["Robotics", "Python", "Computer Vision"],
  // },
];

export default function Home({ onOpenProject }) {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* HERO */}

      <section className="relative flex min-h-[85vh] items-center overflow-hidden px-8 pb-28 pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700/20 via-slate-950 to-slate-950" />

        <div className="absolute -left-20 top-20 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative z-10 mx-auto w-full max-w-7xl text-center">

          <p className="text-sm font-semibold tracking-[0.35em] text-blue-400">
            RUNA MÜDERRİSOĞLU
          </p>

          <h1 className="mx-auto mt-8 max-w-5xl text-6xl font-bold leading-[1.05] md:text-8xl">
            Building intelligent
            <br />
            systems through
            <br />
            <span className="text-blue-400">
              software & engineering.
            </span>
          </h1>

          <p className="mx-auto mt-10 max-w-2xl text-xl leading-9 text-slate-400">
            Computer Science major with an Engineering Physics minor at
            Lenoir-Rhyne University. 4.0 GPA, captain of the LR Women's
            Tennis Team, and Academic All-America honoree. Interested in Artificial
            Intelligence, Robotics, and Biomedical Engineering.
          </p>

          <div className="mt-12 flex items-center justify-center gap-6">

            <a
              href="#projects"
              className="rounded-full bg-blue-600 px-7 py-4 font-semibold transition hover:bg-blue-500"
            >
              Explore Projects ↓
            </a>

            <a
              href="https://www.linkedin.com/in/runa-muderrisoglu/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-700 px-7 py-4 font-semibold text-slate-300 transition hover:border-slate-500 hover:text-white"
            >
              LinkedIn
            </a>

          </div>

        </div>
      </section>


      {/* EXPERIENCE */}

      <section className="border-t border-slate-800 px-8 py-28">
        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Experience
          </p>

          <h2 className="mt-5 text-5xl font-bold">
            Where I've worked
          </h2>

          {experiences.map((job) => (
            <div
              key={job.role + job.org}
              className="mt-16 grid gap-8 border-t border-slate-800 pt-12 md:grid-cols-[220px_1fr]"
            >
              <div className="text-slate-500">
                {job.period}
              </div>

              <div>
                <h3 className="text-3xl font-semibold">
                  {job.role}
                </h3>

                <p className="mt-2 text-lg text-blue-400">
                  {job.org}
                </p>

                <ul className="mt-6 space-y-3 text-lg leading-8 text-slate-400">
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>• {bullet}</li>
                  ))}
                </ul>

                {job.projectId && (
                  <button
                    onClick={() => onOpenProject(job.projectId)}
                    className="mt-8 text-sm font-semibold text-slate-400 transition hover:text-blue-400"
                  >
                    Read the case study →
                  </button>
                )}
              </div>
            </div>
          ))}

        </div>
      </section>


      {/* EDUCATION */}

      <section className="border-t border-slate-800 px-8 py-28">
        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Education
          </p>

          <h2 className="mt-5 text-5xl font-bold">
            Where I study
          </h2>

          <div className="mt-16 grid gap-8 border-t border-slate-800 pt-12 md:grid-cols-[220px_1fr]">

            <div className="text-slate-500">
              Aug 2023 - Present
            </div>

            <div>
              <h3 className="text-3xl font-semibold">
                Lenoir-Rhyne University
              </h3>

              <p className="mt-2 text-lg text-blue-400">
                B.S. Computer Science • Minor in Engineering Physics • GPA: 4.0
              </p>

              <ul className="mt-6 space-y-3 text-lg leading-8 text-slate-400">
                <li>• Vice President, Upsilon Pi Epsilon Honor Society</li>
                <li>• Computer Programming Award</li>
                <li>• Engineering Physics Achievement Award</li>
                <li>• President's List</li>
              </ul>
            </div>

          </div>

        </div>
      </section>


      {/* ATHLETICS & LEADERSHIP */}

      <section className="border-t border-slate-800 px-8 py-28">
        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Athletics & Leadership
          </p>

          <h2 className="mt-5 text-5xl font-bold">
            On and off the court
          </h2>

          {athletics.map((item) => (
            <div
              key={item.role}
              className="mt-16 grid gap-8 border-t border-slate-800 pt-12 md:grid-cols-[220px_1fr]"
            >
              <div className="text-slate-500">
                {item.period}
              </div>

              <div>
                <h3 className="text-3xl font-semibold">
                  {item.role}
                </h3>

                <p className="mt-2 text-lg text-blue-400">
                  {item.org}
                </p>

                <ul className="mt-6 space-y-3 text-lg leading-8 text-slate-400">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>• {bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

        </div>
      </section>


      {/* SKILLS */}

      <section className="border-t border-slate-800 px-8 py-28">
        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Skills
          </p>

          <h2 className="mt-5 text-5xl font-bold">
            What I work with
          </h2>

          <div className="mt-16 grid gap-10 md:grid-cols-2 xl:grid-cols-4">

            {skills.map((skill) => (
              <div
                key={skill.group}
                className="rounded-3xl border border-slate-800 bg-slate-900/50 p-8"
              >
                <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500">
                  {skill.group}
                </h3>

                <div className="mt-6 flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}

          </div>

          <p className="mt-10 text-slate-500">
            Languages: Turkish (Native) • English (Fluent)
          </p>

        </div>
      </section>


      {/* PROJECTS */}

      <section
        id="projects"
        className="border-t border-slate-800 bg-slate-950 px-8 py-32"
      >
        <div className="mx-auto max-w-7xl">

          <div className="mb-20">

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
              Selected Work
            </p>

            <h2 className="mt-5 text-5xl font-bold md:text-6xl">
              Projects
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              A collection of projects across software engineering,
              artificial intelligence, robotics, research, and engineering.
              Select a project to explore the work in detail.
            </p>

          </div>


          {/* PROJECT LIST */}

          <div className="border-t border-slate-800">

            {projects.map((project) => (

              <button
                key={project.id}
                onClick={() => onOpenProject(project.id)}
                className="group grid w-full gap-8 border-b border-slate-800 py-12 text-left transition-all hover:bg-slate-900/50 md:grid-cols-[80px_1fr_180px]"
              >

                {/* Number */}

                <div className="text-sm font-medium text-slate-600">
                  {project.number}
                </div>


                {/* Main information */}

                <div>

                  <div className="flex flex-wrap items-center gap-3 text-sm text-blue-400">
                    <span>{project.type}</span>

                    <span className="text-slate-700">•</span>

                    <span className="text-slate-500">
                      {project.year}
                    </span>
                  </div>

                  <h3 className="mt-4 text-3xl font-semibold transition group-hover:text-blue-400 md:text-4xl">
                    {project.title}
                  </h3>

                  <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">

                    {project.tags.map((tag) => (

                      <span
                        key={tag}
                        className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-400"
                      >
                        {tag}
                      </span>

                    ))}

                  </div>

                </div>


                {/* CTA */}

                <div className="flex items-center justify-start md:justify-end">

                  <span className="text-sm font-semibold text-slate-400 transition-all group-hover:translate-x-2 group-hover:text-blue-400">
                    View Project →
                  </span>

                </div>

              </button>

            ))}

          </div>

        </div>
      </section>


      {/* FOOTER */}

      <div className="border-t border-slate-800">
        <Footer tagline="Computer Science • AI • Robotics • Engineering" />
      </div>

    </main>
  );
}