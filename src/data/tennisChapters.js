import Chapter1 from "../chapters/tennis/Chapter1";
import Chapter2 from "../chapters/tennis/Chapter2";
import Chapter3 from "../chapters/tennis/Chapter3";
import Chapter4 from "../chapters/tennis/Chapter4";
import Chapter5 from "../chapters/tennis/Chapter5";

export const tennisChapters = [
  {
    number: "01",
    title: "Overview",
    subtitle: "A Tournament System in C++",
    component: Chapter1,
  },
  {
    number: "02",
    title: "The Design",
    subtitle: "Five Classes & One Diagram",
    component: Chapter2,
  },
  {
    number: "03",
    title: "Running a Tournament",
    subtitle: "Scores, Sorting & Brackets",
    component: Chapter3,
  },
  {
    number: "04",
    title: "Files & Failure",
    subtitle: "File I/O & Exception Handling",
    component: Chapter4,
  },
  {
    number: "05",
    title: "Reflection",
    subtitle: "When OOP Clicked",
    component: Chapter5,
  },
];
