import { useContext, useEffect, useState } from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// import { Doughnut } from "react-chartjs-2";

import { Radar } from "react-chartjs-2";
import "./LanguagesGraph.css";
import ReposContext from "../../context/repos";

// ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

// const API_URL = "http://localhost:3001/api/gh-repos/";
// const API_URL_2 = "http://localhost:3001/api/gh-repos/languages";

const LanguagesGraph = () => {
  const [languageData, setLanguageData] = useState(null);
  const [appType, setAppType] = useState(null);

  const { repoData } = useContext(ReposContext);
  useEffect(() => {
    async function getRepoData() {
      // const response = await fetch(API_URL);
      // const fetchedData = await response.json(response);
      // // console.log(fetchedData.data);
      // const formattedData = fetchedData.data.map((repo) => {
      //   return [repo.name, repo.html_url, repo.pushed_at, repo.languages_url];
      // });
      // console.log(formattedData);
      // const finalData = await Promise.all(
      //   formattedData.map(async (repo) => {
      //     const languageList = await fetch(`${API_URL_2}?url=${repo[3]}`);
      //     const repoLanguages = await languageList.json();
      //     return {
      //       languages: repoLanguages,
      //     };
      //   })
      // );

      // ---------------------------- FUNCTION TO CALCULATE TOTAL SUMS FOR ALL LANGUAGES AND FORMAT DATA FOR GRAPH ---------------------------- vv
      const calculateLangSums = (data) => {
        let languageSums = {
          JavaScript: 0,
          Python: 0,
          TypeScript: 0,
          HTML: 0,
          CSS: 0,
          Ruby: 0,
          Docker: 0,
          Shell: 0,
        };

        // ----------- ITERATING THROUGH ALL OF OUR REPOS WE GOT BACK FROM THE FETCHES AND ADDING UP THE CHARS WRITTEN FOR EACH LANGUAGE ----------- vv
        for (let i = 0; i < data.length; i++) {
          let currRepo = data[i];
          for (let language in currRepo.graphData.languages) {
            switch (language) {
              case "HTML":
                languageSums.HTML += currRepo.graphData.languages[language];
                break;
              case "CSS" || "SCSS":
                languageSums.CSS += currRepo.graphData.languages[language];
                break;
              case "JavaScript":
                languageSums.JavaScript +=
                  currRepo.graphData.languages[language];
                break;
              case "Python":
                languageSums.Python += currRepo.graphData.languages[language];
                break;
              case "Dockerfile":
                languageSums.Docker += currRepo.graphData.languages[language];
                break;
              case "Ruby":
                languageSums.Ruby += currRepo.graphData.languages[language];
                break;
              case "Shell":
                languageSums.Shell += currRepo.graphData.languages[language];
                break;
              case "TypeScript":
                languageSums.TypeScript +=
                  currRepo.graphData.languages[language];
                break;
            }
          }
        }
        // ----------- ITERATING THROUGH ALL OF OUR REPOS WE GOT BACK FROM THE FETCHES AND ADDING UP THE CHARS WRITTEN FOR EACH LANGUAGE ----------- ^^
        //
        //
        //
        // ----------- CALCULATING LOGS OF OR languageSums SO DATA LOOKS CLOSER ----------- vv
        const logLanguageSums = {
          JavaScript: Math.log(languageSums.JavaScript),
          Python: Math.log(languageSums.Python),
          TypeScript: Math.log(languageSums.TypeScript),
          HTML: Math.log(languageSums.HTML),
          CSS: Math.log(languageSums.CSS),
          Ruby: Math.log(languageSums.Ruby),
          Docker: Math.log(languageSums.Docker),
          Shell: Math.log(languageSums.Shell),
        };
        // ----------- CALCULATING LOGS OF OR languageSums SO DATA LOOKS CLOSER ----------- ^^
        //
        //
        //
        //
        // ----------- FORMATTING DATA FOR THE RADAR CHART ----------- vv
        const chartData = {
          labels: [...Object.keys(logLanguageSums)],
          datasets: [
            {
              label: "",
              // label: "# of chars written",
              data: [...Object.values(logLanguageSums)],
              // backgroundColor: "rgba(160, 242, 146, 0.2)",
              // borderColor: "rgba(119, 248, 124, 1)",
              backgroundColor: "rgba(115, 99, 255, 0.308)",
              borderColor: "rgba(107, 99, 255, 1)",
              // backgroundColor: "rgba(255, 99, 132, 0.2)",
              // borderColor: "rgba(255, 99, 132, 1)",
              color: "white",
              borderWidth: 1,
            },
          ],
        };
        // ----------- FORMATTING DATA FOR THE RADAR CHART ----------- ^^
        //
        //
        return { chartData, languageSums };
      };
      // ---------------------------- FUNCTION TO CALCULATE TOTAL SUMS FOR ALL LANGUAGES AND FORMAT DATA FOR GRAPH ---------------------------- ^^
      //
      //
      //
      //
      //
      //
      //
      //
      //
      // -------- HELPER FUNCTION TO PULL JUST THE TOPICS FROM EACH REPO AND STORE IT AS AN ARR -------- vv
      const extractTopics = (repos) => {
        repos.map((repo) => {
          return repo.topics[0];
        });
      };
      // -------- HELPER FUNCTION TO PULL JUST THE TOPICS FROM EACH REPO AND STORE IT AS AN ARR -------- ^^
      //
      //
      // ---------------------------- FUNCTION TO CALCULATE FRONTEND, FULLSTACK, ETC. ----------------------------vv
      const calculateAppTypes = (fetchedRepos) => {
        const topics = {
          fullstack: 0,
          frontend: 0,
          backend: 0,
        };

        extractTopics(fetchedRepos).forEach((topic) => {
          switch (topic) {
            case "fullstack":
              topics.fullstack += 1;
              break;
            case "frontend":
              topics.frontend += 1;
              break;
            case "backend":
              topics.frontend += 1;
              break;
            default:
              break;
          }
        });

        return topics;
      };
      // ---------------------------- FUNCTION TO CALCULATE FRONTEND, FULLSTACK, ETC. ----------------------------^^
      //
      //
      //
      //
      //
      //
      // DESTRUCTURING THE DATA RETURNED FROM OUR calculateLangSums FUNCTION
      const { chartData, languageSums } = calculateLangSums(repoData);
      setLanguageData({ logged: chartData, raw: languageSums });
    }
    // console.log(calculateAppTypes(fetchedData.data))

    getRepoData();
  }, []);

  // ----------- SETTING THE LINES ON THE GRAPH TO BE THE COLOR BELOW ----------- vv
  const chartOptions = {
    scales: {
      r: {
        grid: {
          color: "rgba(195, 195, 195, 0.183)",
        },
        ticks: {
          display: false,
        },
      },
    },
  };
  // ----------- SETTING THE LINES ON THE GRAPH TO BE THE COLOR BELOW ----------- ^^

  return (
    <div id="radar-chart-container">
      {languageData && (
        <>
          <div id="radar-chart">
            <Radar data={languageData.logged} options={chartOptions} />
          </div>
          <div id="chart-raw-metrics-container">
            <div id="chart-raw-metrics">
              {Object.keys(languageData.raw).map((lang, i) => {
                return (
                  <div key={i}>
                    <div>{lang}:</div>
                    <div id="metric-number">{languageData.raw[lang]}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default LanguagesGraph;
