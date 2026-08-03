import Chapter1 from "../chapters/yedigoller/Chapter1";
import Chapter2 from "../chapters/yedigoller/Chapter2";

// TODO: uncomment these once the chapter files are written.
// Importing them now breaks the build because the files don't exist yet.
// import Chapter3 from "../chapters/yedigoller/Chapter3";
// import Chapter4 from "../chapters/yedigoller/Chapter4";
// import Chapter5 from "../chapters/yedigoller/Chapter5";

export const yedigollerChapters = [
  {
    number: "01",
    title: "Overview",
    subtitle: "Why a CS Student Joined a Forest Study",
    component: Chapter1,
  },
  {
    number: "02",
    title: "The Study",
    subtitle: "Yedigöller National Park",
    component: Chapter2,
  },
  // TODO: uncomment along with the imports above.
  // {
  //   number: "03",
  //   title: "The Analysis",
  //   subtitle: "My Statistical Workflow in R",
  //   component: Chapter3,
  // },
  // {
  //   number: "04",
  //   title: "What We Found",
  //   subtitle: "Ecological Thresholds",
  //   component: Chapter4,
  // },
  // {
  //   number: "05",
  //   title: "Reflection",
  //   subtitle: "Working Across Disciplines",
  //   component: Chapter5,
  // },
];
