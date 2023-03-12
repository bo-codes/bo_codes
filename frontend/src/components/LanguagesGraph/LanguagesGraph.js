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

import { Radar } from "react-chartjs-2";
import "./LanguagesGraph.css";
import ReposContext from "../../context/repos";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const LanguagesGraph = () => {
  const [languageData, setLanguageData] = useState(null);

  const { repoData } = useContext(ReposContext);
  useEffect(() => {
    async function getRepoData() {
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
              responsive: true,
              maintainAspectRation: false,
            },
          ],
        };
        // ----------- FORMATTING DATA FOR THE RADAR CHART ----------- ^^
        return { chartData, languageSums };
      };
      // ---------------------------- FUNCTION TO CALCULATE TOTAL SUMS FOR ALL LANGUAGES AND FORMAT DATA FOR GRAPH ---------------------------- ^^
      //
      //
      const { chartData, languageSums } = calculateLangSums(repoData);
      setLanguageData({ logged: chartData, raw: languageSums });
    }
    getRepoData();
  }, []);

  // ----------- SETTING THE LINES ON THE GRAPH TO BE THE COLOR BELOW ----------- vv
  const chartOptions = {
    responsive: true,
    maintainAspectRation: false,
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
    <div id="radar-chart-section">
      {languageData && (
        <>
          <div
            id="radar-chart-container"
            style={{ position: "relative", height: "100%" }}
          >
            <Radar data={languageData.logged} options={chartOptions} id="radar-chart"/>
          </div>
          <div id="chart-raw-metrics-container">
            <div id="chart-raw-metrics">
              {Object.keys(languageData.raw).map((lang, i) => {
                return (
                  <div key={i} id="metric-lang-num-container">
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
