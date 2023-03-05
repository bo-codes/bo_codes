import { useEffect, useState } from "react";
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

// ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const API_URL = "http://localhost:3001/api/gh-repos/";
const API_URL_2 = "http://localhost:3001/api/gh-repos/languages";

const LanguagesGraph = () => {
  const [languageData, setLanguageData] = useState(null);

  useEffect(() => {
    async function getRepoData() {
      const response = await fetch(API_URL);
      const fetchedData = await response.json(response);
      // console.log(fetchedData.data)
      const formattedData = fetchedData.data.map((repo) => {
        return [repo.name, repo.html_url, repo.pushed_at, repo.languages_url];
      });
      // console.log(formattedData);
      const finalData = await Promise.all(
        formattedData.map(async (repo) => {
          const languageList = await fetch(`${API_URL_2}?url=${repo[3]}`);
          const repoLanguages = await languageList.json();
          return {
            languages: repoLanguages,
          };
        })
      );

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

        for (let i = 0; i < data.length; i++) {
          let currRepo = data[i];
          for (let language in currRepo.languages) {
            switch (language) {
              case "HTML":
                languageSums.HTML += currRepo.languages[language];
                break;
              case "CSS" || "SCSS":
                languageSums.CSS += currRepo.languages[language];
                break;
              case "JavaScript":
                languageSums.JavaScript += currRepo.languages[language];
                break;
              case "Python":
                languageSums.Python += currRepo.languages[language];
                break;
              case "Dockerfile":
                languageSums.Docker += currRepo.languages[language];
                break;
              case "Ruby":
                languageSums.Ruby += currRepo.languages[language];
                break;
              case "Shell":
                languageSums.Shell += currRepo.languages[language];
                break;
              case "TypeScript":
                languageSums.TypeScript += currRepo.languages[language];
                break;
            }
          }
        }
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

        // const chartData = {
        //   labels: [...Object.keys(languageSums)],
        //   datasets: [
        //     {
        //       label: "# of lines written / 1000",
        //       data: [...Object.values(languageSums)],
        //       backgroundColor: [
        //         "rgba(255, 135, 99, 0.2)",
        //         "rgba(54, 162, 235, 0.2)",
        //         "rgba(255, 206, 86, 0.2)",
        //         "rgba(75, 192, 192, 0.2)",
        //         "rgba(153, 102, 255, 0.2)",
        //         "rgba(255, 159, 64, 0.2)",
        //         "rgba(240, 102, 255, 0.2)",
        //         "rgba(73, 196, 33, 0.2)",
        //       ],
        //       borderColor: [
        //         "rgba(255, 146, 99, 1)",
        //         "rgba(54, 162, 235, 1)",
        //         "rgba(255, 206, 86, 1)",
        //         "rgba(75, 192, 192, 1)",
        //         "rgba(153, 102, 255, 1)",
        //         "rgba(255, 159, 64, 1)",
        //         "rgba(242, 102, 255, 1)",
        //         "rgba(40, 176, 70, 0.674)",
        //       ],
        //       borderWidth: 1,
        //     },
        //   ],
        // };

        const chartData = {
          labels: [...Object.keys(logLanguageSums)],
          datasets: [
            {
              label: "# of lines written",
              data: [...Object.values(logLanguageSums)],
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "rgba(255, 99, 132, 1)",
              borderWidth: 1,
            },
          ],
        };
        return { chartData, languageSums };
      };

      const { chartData, languageSums } = calculateLangSums(finalData);

      setLanguageData({ logged: chartData, raw: languageSums });
    }

    getRepoData();
  }, []);

  return (
    <div id="radar-chart-container">
      {/* {languageData && <Doughnut data={languageData} />} */}
      {languageData && (
        <>
          <div id="radar-chart">
            <Radar data={languageData.logged} />
          </div>
          <div id="chart-raw-metrics-container">
            <div id="chart-raw-metrics">
              {Object.keys(languageData.raw).map((lang) => {
                return (
                  <>
                    <div>{lang}:</div>
                    <div id="metric-number">{languageData.raw[lang]}</div>
                  </>
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
