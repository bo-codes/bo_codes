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

const API_URL = "http://localhost:3001/api/gh/";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [loadingStatus, setLoadingStatus] = useState('.')

  const location = useLocation();

  // -------- INTERSECTION OBSERVER WATCHING FOR WHEN OUR .section ELEMENTS HIT THE VIEWPORT -------- vv
  const startObservation = () => {
    console.log("starting observation");
    const sections = document.querySelectorAll(".section-wrapper");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const section = entry.target.querySelector(".section");
        if (entry.isIntersecting) {
          console.log("element in viewport");
          section.classList.add("section-animation");
          return;
        }

        section.classList.remove("section-animation");
      });
    });

    sections.forEach((section) => {
      observer.observe(section);
    });
  };
  // -------- INTERSECTION OBSERVER WATCHING FOR WHEN OUR .section ELEMENTS HIT THE VIEWPORT -------- ^^

  // ----------- FUNCTION USED TO PULL COMMIT DATA FROM THE GITHUB API ----------- vv
  async function getData() {
    const response = await fetch(API_URL);
    const fetchedData = await response.json(response);
    setData(fetchedData);
  }
  // ----------- FUNCTION USED TO PULL COMMIT DATA FROM THE GITHUB API ----------- ^^

  let staticSetInterval;
  const staticInterval = () => {
    setIsLoading(true);
    staticSetInterval = setInterval(() => {
      console.log('going again')
      setLoadingStatus(ls => ls + '*');
      setIsLoading(false);
    }, 800);
    return () => {
      clearInterval(staticSetInterval);
    };
  }

  // ----------- THIS USEEFFECT MAKES SURE WE GET THE HOMEPAGE INFO FROM THE GITHUB API BEFORE WE RENDER ----------- vv
  useEffect(() => {

    const homeRender = async () => {
      setLoading(true);
      if (location.pathname === "/") {
        await getData();
        startObservation();
        setLoading(false);
      }
      // WE NEED TO SET ISLOADING TO TRUE WHILE THE loadingInterval RUNS AND THEN SET IT TO FALSE AFTER SO THAT THERE IS THAT DELAY
      // RIGHT NOW, EVERY OTHER PAGE IS RENDERING IMMEDIATELY BECAUSE START OBSERVATION STARTS RIGHT AWAY
      else {
        // staticInterval()
        console.log("finished with interval, homerender");
        startObservation();
        setLoading(false);
      }
    };

    homeRender();
  }, [location]);
  // ----------- THIS USEEFFECT MAKES SURE WE GET THE HOMEPAGE INFO FROM THE GITHUB API BEFORE WE RENDER ----------- ^^

  useEffect(() => {
    console.log("finished with interval");
    // staticInterval()
  }, [location]);

  let currScreen;
  switch (location.pathname) {
    case "/":
      if (loading || isLoading) {
        currScreen = <div className="static"></div>;
      } else {
        currScreen = <Screen />;
      }
      break;
    default:
      if (isLoading) {
        currScreen = <div className="static"></div>;
      } else {
        currScreen = <Screen />;
      }
  }

  return (
    <>
      {currScreen}
      <Routes>
        <Route
          path="/"
          exact={true}
          element={<HomePage data={data} loading={loading} />}
        />
        <Route
          path="/about"
          exact={true}
          element={<AboutPage isLoading={isLoading} />}
        />
        <Route path="/experience" exact={true} element={<ExperiencePage />} />
        <Route path="/skills" exact={true} element={<SkillsPage />} />
        <Route path="/projects" exact={true} element={<ProjectsPage />} />
        <Route path="/contact" exact={true} element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
