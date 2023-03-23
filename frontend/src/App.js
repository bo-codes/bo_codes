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
import detect from "detect.js";

const user = detect.parse(navigator.userAgent);

let API_URL;
{
  process.env.NODE_ENV !== "production"
    ? (API_URL = "http://localhost:3001/api/gh/")
    : (API_URL = "https://bo-codes.herokuapp.com/api/gh/");
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const location = useLocation();

  // -------- INTERSECTION OBSERVER WATCHING FOR WHEN OUR .section ELEMENTS HIT THE VIEWPORT -------- vv
  const startObservation = () => {
    const sections = document.querySelectorAll(".section-wrapper");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const section = entry.target.querySelector(".section");
        if (entry.isIntersecting) {
          section.classList.add("section-animation");
          return;
        }

        // section.classList.remove("section-animation");
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

  // ----------- THIS USEEFFECT MAKES SURE WE GET THE HOMEPAGE INFO FROM THE GITHUB API BEFORE WE RENDER ----------- vv
  useEffect(() => {
    const homeRender = async () => {
      setLoading(true);
      await getData();
      startObservation();
      setLoading(false);
    };

    homeRender();
  }, [location]);
  // ----------- THIS USEEFFECT MAKES SURE WE GET THE HOMEPAGE INFO FROM THE GITHUB API BEFORE WE RENDER ----------- ^^

  useEffect(() => {
    let shouldIgnore;
    let timeout;

    const runDelay = async () => {
      if (shouldIgnore) return;

      timeout = setTimeout(() => {
        setIsLoading(false);
      }, 800);
    };

    runDelay();

    return () => {
      shouldIgnore = true;
      clearTimeout(timeout);
    };
  }, [location]);

  let currScreen;
  switch (location.pathname) {
    case "/":
      if (loading || isLoading) {
        {
          user.browser.family === "Safari" ||
          user.browser.family.includes("Mobile")
            ? (currScreen = <div className="altstatic"></div>)
            : (currScreen = <div className="static"></div>);
        }
      } else {
        currScreen = <Screen />;
      }
      break;
    default:
      if (loading || isLoading) {
        {
          user.browser.family === "Safari" ||
          user.browser.family.includes("Mobile")
            ? (currScreen = <div className="altstatic"></div>)
            : (currScreen = <div className="static"></div>);
        }
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
        <Route
          path="/projects"
          // exact={true}
          element={<ProjectsPage loading={loading} />}
        />
        <Route path="/contact" exact={true} element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
