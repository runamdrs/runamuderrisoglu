import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Footer from "./components/Footer";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import { projects } from "./data/projects";

// Read the project id from the URL path, e.g. /talent-ray -> "talent-ray".
const projectFromPath = () => {
  const id = window.location.pathname.replace(/^\/+|\/+$/g, "");
  return projects[id] ? id : null;
};

export default function App() {
  const [project, setProject] = useState(projectFromPath);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const onPopState = () => {
      setProject(projectFromPath());
      setCurrent(0);
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [project, current]);

  const openProject = (projectId) => {
    window.history.pushState(null, "", `/${projectId}`);
    setProject(projectId);
    setCurrent(0);
  };

  const closeProject = () => {
    window.history.pushState(null, "", "/");
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

      <main className="min-h-screen md:ml-72">

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