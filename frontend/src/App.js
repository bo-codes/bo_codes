import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ExperiencePage from "./pages/ExperiencePage/ExperiencePage";
import SkillsPage from "./pages/SkillsPage/SkillsPage";
import ProjectsPage from "./pages/ProjectsPage/ProejctsPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import Screen from "./components/Screen/Screen";


function App() {
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation();

  useEffect(() => {
    setIsLoading(true)
    let loadingInterval;
    loadingInterval = setInterval(() => {
      setIsLoading(false);
    }, 800);
    return () =>  {
      clearInterval(loadingInterval);
    }
  }, [location]);

  useEffect(() => {
    const sections = document.querySelectorAll('.section-wrapper');

    const observer = new IntersectionObserver((entries) => {

      entries.forEach((entry) => {
        const section = entry.target.querySelector('.section')
        if (entry.isIntersecting) {
          section.classList.add('section-animation')
          return;
        }

        section.classList.remove('section-animation')
      });
    });

    sections.forEach(section => {
      observer.observe(section);
    })
  }, [location]);

  return (
    <>
      {isLoading ? <div className="static"></div> : <Screen />}
      <Routes>
        <Route path="/" exact={true} element={<HomePage />} />
        <Route path="/about" exact={true} element={<AboutPage />} />
        <Route path="/experience" exact={true} element={<ExperiencePage />} />
        <Route path="/skills" exact={true} element={<SkillsPage />} />
        <Route path="/projects" exact={true} element={<ProjectsPage />} />
        <Route path="/contact" exact={true} element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
