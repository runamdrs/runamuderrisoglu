import { useState } from "react";

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
    role: "Product Assistant",
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
      "Team member since Aug 2023, serving as captain since Aug 2024.",
      {
        text: "CSC Academic All-America, Second Team: the first player in LR Women's Tennis history to earn the honor, and among the top 12 players in the nation when combining academic and athletic performance.",
        href: "https://lrbears.com/news/2026/6/2/runa-muderrisoglu-becomes-the-first-csc-academic-all-american-in-lr-womens-tennis-history.aspx",
        linkText: "Read the announcement",
      },
      "SAC Freshman of the Year, chosen by conference coaches.",
      "Three-time All-SAC selection: First Team Singles and Doubles (freshman year), Second Team Singles (sophomore year), First Team Singles and Second Team Doubles (junior year).",
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

function Section({ number, title, description, id, tinted, children }) {
  const [open, setOpen] = useState(true);

  return (
    <section
      id={id}
      className={`px-6 py-12 md:px-10 ${
        tinted ? "border-y border-slate-200 bg-slate-50" : ""
      }`}
    >
      <div className="mx-auto max-w-6xl">

        {/* Section header, click to fold like a ToC entry */}

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          className="group w-full border-t-2 border-slate-900 pt-6 text-left"
        >
          <div className="flex items-start justify-between gap-6">

            <div>
              <h2 className="flex items-baseline gap-4 text-4xl font-bold text-slate-900">
                <span className="text-blue-600">{number}</span>
                <span>{title}</span>
              </h2>

              <p className="mt-3 text-lg italic leading-8 text-gold-600">
                {description}
              </p>
            </div>

            <span className="pt-2 font-mono text-xl text-slate-400 transition group-hover:text-blue-600">
              {open ? "[-]" : "[+]"}
            </span>

          </div>
        </button>

        {open && <div>{children}</div>}

      </div>
    </section>
  );
}

function EntryList({ entries, onOpenProject }) {
  return entries.map((entry) => (
    <div
      key={entry.role + entry.org}
      className="mt-12 grid gap-4 border-t border-slate-200 pt-10 md:grid-cols-[190px_1fr] md:gap-10"
    >
      <div className="text-lg italic text-slate-500">
        {entry.period}
      </div>

      <div>
        <h3 className="text-2xl font-bold text-slate-900">
          {entry.role}
        </h3>

        <p className="mt-1 text-lg italic text-blue-600">
          {entry.org}
        </p>

        <ul className="mt-5 list-disc space-y-2.5 pl-5 text-lg leading-8 text-slate-700 marker:text-slate-400">
          {entry.bullets.map((bullet) =>
            typeof bullet === "string" ? (
              <li key={bullet}>{bullet}</li>
            ) : (
              <li key={bullet.text}>
                {bullet.text}{" "}
                <a
                  href={bullet.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 underline decoration-blue-600/40 underline-offset-4 transition hover:text-blue-500"
                >
                  {bullet.linkText}
                </a>
              </li>
            )
          )}
        </ul>

        {entry.projectId && onOpenProject && (
          <button
            onClick={() => onOpenProject(entry.projectId)}
            className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 transition hover:text-blue-600"
          >
            Read the case study →
          </button>
        )}
      </div>
    </div>
  ));
}

export default function Home({ onOpenProject }) {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* TITLE PAGE */}

      <section className="px-6 md:px-10 pb-16 pt-10 md:pt-12">
        <div className="mx-auto max-w-6xl text-center">

          <h1 className="mx-auto max-w-6xl text-5xl font-bold leading-[1.13] text-slate-900 md:text-7xl">
            Building Intelligent Systems through{" "}
            <span className="text-blue-600">Software &amp; Engineering</span>
          </h1>

          <p className="mt-10 text-2xl text-slate-900">
            Runa Müderrisoğlu
          </p>

          <p className="mt-2 text-lg italic text-slate-600">
            Lenoir-Rhyne University
          </p>

          <p className="mt-1 text-lg italic text-slate-500">
            August 2026
          </p>


          {/* ABSTRACT */}

          <div className="mx-auto mt-14 max-w-4xl">

            <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-600">
              Abstract
            </p>

            <p className="mt-5 text-justify text-lg leading-8 text-slate-700 [hyphens:auto]">
              Computer Science major with an Engineering Physics minor at
              Lenoir-Rhyne University. 4.0 GPA, captain of the LR Women's
              Tennis Team, and the first Academic All-American in LR Women's
              Tennis history. Interested in Artificial Intelligence,
              Robotics, and Biomedical Engineering.
            </p>

          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-5">

            <a
              href="#projects"
              className="w-64 whitespace-nowrap rounded-sm border border-blue-600 bg-blue-600 py-3.5 text-center text-sm font-semibold uppercase tracking-[0.15em] text-white transition hover:border-blue-700 hover:bg-blue-700"
            >
              Explore Projects ↓
            </a>

            <a
              href="#links"
              className="w-64 whitespace-nowrap rounded-sm border border-slate-300 py-3.5 text-center text-sm font-semibold uppercase tracking-[0.15em] text-slate-700 transition hover:border-blue-600 hover:text-blue-600"
            >
              All My Links ↓
            </a>

          </div>

        </div>
      </section>


      {/* 1. EXPERIENCE */}

      <Section
        number="1"
        title="Experience"
        description="Internships and work, from AI testing systems to electronics benches."
      >
        <EntryList entries={experiences} onOpenProject={onOpenProject} />
      </Section>


      {/* 2. EDUCATION */}

      <Section
        number="2"
        title="Education"
        description="My degree, honors, and awards at Lenoir-Rhyne University."
        tinted
      >
        <EntryList
          entries={[
            {
              period: "Aug 2023 - Present",
              role: "Lenoir-Rhyne University",
              org: "B.S. Computer Science • Minor in Engineering Physics • GPA: 4.0",
              bullets: [
                "Vice President, Upsilon Pi Epsilon Honor Society",
                "Computer Programming Award",
                "Engineering Physics Achievement Award",
                "President's List",
              ],
            },
          ]}
        />
      </Section>


      {/* 3. ATHLETICS & LEADERSHIP */}

      <Section
        number="3"
        title="Athletics & Leadership"
        description="Tennis at the NCAA Division II level, and the honors that came with it."
      >
        <EntryList entries={athletics} />
      </Section>


      {/* 4. SKILLS */}

      <Section
        number="4"
        title="Skills"
        description="The languages, tools, and strengths I bring to a project."
        tinted
      >
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

            {[
              ...skills,
              {
                group: "Languages",
                items: ["Turkish (Native)", "English (Fluent)"],
              },
            ].map((skill) => (
              <div
                key={skill.group}
                className="rounded-sm border border-slate-200 bg-white p-6"
              >
                <h3 className="border-b border-slate-200 pb-3 text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                  {skill.group}
                </h3>

                <div className="mt-5 flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-sm border border-slate-300 bg-slate-50 px-3 py-1.5 text-sm text-slate-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}

        </div>
      </Section>


      {/* 5. SELECTED PROJECTS */}

      <Section
        number="5"
        title="Selected Projects"
        id="projects"
        description="Case studies across software engineering, AI, research, and electronics. Select one to explore the work in detail."
      >

        {/* PROJECT LIST, set like a reference list */}

        <div className="mt-10 border-t border-slate-200">

            {projects.map((project, index) => (

              <button
                key={project.id}
                onClick={() => onOpenProject(project.id)}
                className="group grid w-full gap-6 border-b border-slate-200 py-10 text-left transition-colors hover:bg-slate-50 md:grid-cols-[64px_1fr]"
              >

                {/* Citation-style number */}

                <div className="pt-1 text-lg text-blue-600">
                  [{index + 1}]
                </div>


                {/* Main information */}

                <div>

                  <div className="flex flex-wrap items-center gap-3 text-sm font-semibold uppercase tracking-[0.15em] text-gold-600">
                    <span>{project.type}</span>

                    <span className="text-slate-300">•</span>

                    <span>{project.year}</span>
                  </div>

                  <h3 className="mt-3 text-2xl font-bold text-slate-900 transition group-hover:text-blue-600 md:text-3xl">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-justify text-lg leading-8 text-slate-700 [hyphens:auto]">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-sm border border-slate-300 bg-white px-3 py-1 text-sm text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 transition group-hover:text-blue-600">
                    View Project →
                  </p>

                </div>

              </button>

            ))}

        </div>

      </Section>


      {/* FOOTER */}

      <Footer tagline="Computer Science • AI • Robotics • Engineering" />

    </main>
  );
}
