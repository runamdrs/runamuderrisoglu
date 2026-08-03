import { chapters } from "./chapters";
import { yedigollerChapters } from "./yedigollerChapters";
import { ekChapters } from "./ekChapters";
import { organChapters } from "./organChapters";

// Every project that has a full case study lives here. The key is the
// project id used by Home.jsx and App.jsx.
export const projects = {
  "talent-ray": {
    eyebrow: "Talent-Ray · 2026",
    title: ["When Code Stops", "Being the Bottleneck"],
    kicker: "Software Engineering Internship Case Study",
    chapters,
  },
  "ek-arduino": {
    eyebrow: "E & K Arge Engineering · 2025",
    title: ["Four Machines on", "One Microcontroller"],
    kicker: "Engineering Internship Case Study",
    chapters: ekChapters,
  },
  yedigoller: {
    eyebrow: "TÜBİTAK Research · 2026",
    title: ["Reading a Forest", "Through Data"],
    kicker: "Environmental Research Case Study",
    chapters: yedigollerChapters,
  },
  "organ-matching": {
    eyebrow: "CSC 280 · 2025",
    title: ["Predicting Transplant", "Outcomes with Data"],
    kicker: "Machine Learning Case Study",
    chapters: organChapters,
  },
};
