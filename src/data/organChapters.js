import Chapter1 from "../chapters/organ/Chapter1";
import Chapter2 from "../chapters/organ/Chapter2";
import Chapter3 from "../chapters/organ/Chapter3";
import Chapter4 from "../chapters/organ/Chapter4";
import Chapter5 from "../chapters/organ/Chapter5";

export const organChapters = [
  {
    number: "01",
    title: "Overview",
    subtitle: "Predicting Transplant Success",
    component: Chapter1,
  },
  {
    number: "02",
    title: "The Data",
    subtitle: "Simulating What Cannot Be Downloaded",
    component: Chapter2,
  },
  {
    number: "03",
    title: "The Model",
    subtitle: "A Random Forest Pipeline",
    component: Chapter3,
  },
  {
    number: "04",
    title: "Results",
    subtitle: "Evaluation & the Prediction Tool",
    component: Chapter4,
  },
  {
    number: "05",
    title: "Reflection",
    subtitle: "What the Model Can and Cannot Say",
    component: Chapter5,
  },
];
