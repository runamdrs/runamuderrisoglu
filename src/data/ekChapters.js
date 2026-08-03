import Chapter1 from "../chapters/ek/Chapter1";
import Chapter2 from "../chapters/ek/Chapter2";
import Chapter3 from "../chapters/ek/Chapter3";
import Chapter4 from "../chapters/ek/Chapter4";
import Chapter5 from "../chapters/ek/Chapter5";

export const ekChapters = [
  {
    number: "01",
    title: "Overview",
    subtitle: "Four Systems on an Arduino Leonardo",
    component: Chapter1,
  },
  {
    number: "02",
    title: "Car Sensor",
    subtitle: "Distance Warnings & Color Detection",
    component: Chapter2,
  },
  {
    number: "03",
    title: "Plant Care App",
    subtitle: "Soil Moisture & Light Monitoring",
    component: Chapter3,
  },
  {
    number: "04",
    title: "Countdown Machine",
    subtitle: "Dial-Controlled Timer with Bluetooth",
    component: Chapter4,
  },
  {
    number: "05",
    title: "House Properties App",
    subtitle: "Password-Protected Smart Home",
    component: Chapter5,
  },
];
