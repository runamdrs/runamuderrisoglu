import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Footer from "./components/Footer";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import { projects } from "./data/projects";

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
  const activeProject = project ? projects[project] : null;

  if (!activeProject) {
    return (
      <Home onOpenProject={openProject} />
    );
  }

  // PROJECT CASE STUDY
  const CurrentChapter = activeProject.chapters[current].component;
  const isLastChapter = current === activeProject.chapters.length - 1;

  return (
    <div className="min-h-screen bg-slate-50">

      <Sidebar
        project={activeProject}
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

            {isLastChapter && (
              <Footer tagline={activeProject.kicker} />
            )}

          </motion.div>

        </AnimatePresence>

      </main>

    </div>
  );
}