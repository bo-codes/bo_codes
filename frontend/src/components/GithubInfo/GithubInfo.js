import { useState, useEffect } from "react";
import "./GithubInfo.css";
import {
  SiJavascript,
  SiExpress,
  SiTypescript,
  SiCss3,
  SiHtml5,
  SiPython,
  SiFlask,
  SiRedux,
  SiPostgresql,
  SiSequelize,
  SiFigma,
  SiSketchup,
  SiBlender,
  SiShell,
  SiRuby,
  SiSwift,
} from "react-icons/si";
import {
  DiJavascript,
  DiPython,
  DiReact,
  DiHtml5,
  DiCss3,
  DiAws,
  DiDocker,
  DiBootstrap,
  DiNodejs,
  DiNpm,
  DiGit,
  DiGithub,
  DiMarkdown,
  DiVisualstudio,
  DiHeroku,
  DiPhotoshop,
  DiIllustrator,
} from "react-icons/di";

const API_URL = "http://localhost:3001/api/gh-repos/";
const API_URL_2 = "http://localhost:3001/api/gh-repos/languages";

const GithubInfo = ({ loading }) => {
  const [repoData, setRepoData] = useState(null);

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
          name: repo[0],
          url: repo[1],
          pushed_at: repo[2],
          languages: [...Object.keys(repoLanguages)],
        };
      })
    );
    console.log(finalData);
    setRepoData(finalData);
  }

  useEffect(() => {
    getRepoData();
  }, []);

  const convertDateToDays = (dateStr) => {
    let yearDays = parseInt(dateStr.slice(0, 4)) * 365;
    let monthDays = parseInt(dateStr.slice(5, 7)) * 30;
    let dayNum = parseInt(dateStr.slice(8, 10));

    let totalDays = yearDays + monthDays + dayNum;
    return totalDays;
  };

  const repoList = () => {
    repoData.sort((a, b) => {
      return convertDateToDays(b.pushed_at) - convertDateToDays(a.pushed_at);
    });

    return repoData.slice(0, 6).map((repo, i) => {
      return (
        <li key={i} id="repo-link-container">
          <a
            id="repo-link"
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
          >
            <div id="repo-link-and-languages-container">
              <div>{repo.name}</div>
              <div id="languages-container">
                {repo.languages.slice(0, 4).map((language, i) => {
                  console.log(language);
                  let languageImg;
                  // console.log(language)
                  switch (language) {
                    case "JavaScript":
                      languageImg = <SiJavascript />;
                      break;
                    case "Python":
                      languageImg = <SiPython />;
                      break;
                    case "CSS" || "SCSS":
                      languageImg = <SiCss3 />;
                      break;
                    case "HTML":
                      languageImg = <SiHtml5 />;
                      break;
                    case "TypeScript":
                      languageImg = <SiTypescript />;
                      break;
                    case "Ruby":
                      languageImg = <SiRuby />;
                      break;
                    default:
                      languageImg = null;
                  }
                  // console.log(languageImg);
                  let ele;
                  if (languageImg) {
                    ele = (
                      <div key={i} id="individual-language">
                        {languageImg}
                      </div>
                    );
                  } else ele = <></>
                  return ele;
                })}
              </div>
            </div>
          </a>
        </li>
      );
    });
  };

  return (
    <div id="repos-section">
      <div id="currently-working-on">CURRENTLY WORKING ON</div>
      {repoData && <ul id="repo-list-container">{repoList()}</ul>}
    </div>
  );
};

export default GithubInfo;
