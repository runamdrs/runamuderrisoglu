import ChapterLayout from "../layouts/ChapterLayout";
import ExecutiveSummary from "../components/ExecutiveSummary";

export default function Chapter1() {
  return (
    <ChapterLayout
      number="01"
      title="Executive Overview"
      subtitle="Introduction and objectives of the internship."
    >
      <ExecutiveSummary />
    </ChapterLayout>
  );
}