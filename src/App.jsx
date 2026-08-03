import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import { chapters } from "./data/chapters";

export default function App() {
  const [project, setProject] = useState(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [project, current]);

  const openProject = (projectId) => {
    setProject(projectId);
    setCurrent(0);
  };

  const closeProject = () => {
    setProject(null);
    setCurrent(0);
  };

  // PORTFOLIO HOME
  if (!project) {
    return (
      <Home onOpenProject={openProject} />
    );
  }

  // TALENT-RAY PROJECT
  const CurrentChapter = chapters[current].component;

  return (
    <div className="min-h-screen bg-slate-50">

      <Sidebar
        current={current}
        setCurrent={setCurrent}
        onBack={closeProject}
      />

      <main className="ml-72 min-h-screen">

        <AnimatePresence mode="wait">

          <motion.div
            key={current}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
          >

            <CurrentChapter />

          </motion.div>

        </AnimatePresence>

      </main>

    </div>
  );
}