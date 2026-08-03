import Hero from "./Hero";
import DecisionFlow from "./DecisionFlow";
import Capabilities from "./Capabilities";
import MyContribution from "./MyContribution";
import Impact from "./Impact";

export default function TestEngine() {
  return (
    <section className="bg-slate-900 text-white">
      <Hero />
      <DecisionFlow />
      <Capabilities />
      <MyContribution />
      <Impact />
    </section>
  );
}