import { useState, useEffect, useContext } from "react";
import "./GithubInfo.css";
import {
  SiJavascript,
  SiExpress,
  SiTypescript,
  SiCss3,
  SiHtml5,
  SiPython,
  SiFlask,
  SiReact,
  SiRedux,
  SiPostgresql,
  SiSequelize,
  SiFigma,
  SiSketchup,
  SiBlender,
  SiShell,
  SiRuby,
  SiSwift,
  SiAmazonaws,
  SiDocker,
  SiBootstrap,
  SiNodemon,
  SiNodedotjs,
  SiNpm,
  SiGit,
  SiGithub,
  SiMarkdown,
  SiVisualstudiocode,
  SiHeroku,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobelightroom,
} from "react-icons/si";
import ReposContext from "../../context/repos";

const GithubInfo = ({ loading }) => {
  const [repoListData, setRepoListData] = useState(null);
  const { repoData } = useContext(ReposContext);

  async function getRepoData() {
    const finalData = repoData.map((repo) => {
      return repo.repoListData;
    });
    setRepoListData(finalData);
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
    repoListData.sort((a, b) => {
      return convertDateToDays(b.pushed_at) - convertDateToDays(a.pushed_at);
    });

    return repoListData.slice(0, 6).map((repo, i) => {
      return (
        <li key={i} id="repo-link-container">
          <a id="repo-link" href={repo.url} target="_blank" rel="noreferrer">
            <div id="repo-link-and-languages-container">
              <div>{repo.name}</div>
              <div id="languages-container">
                {repo.languages.slice(0, 4).map((language, i) => {
                  let languageImg;
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
                  let ele;
                  if (languageImg) {
                    ele = (
                      <div key={i} id="individual-language">
                        {languageImg}
                      </div>
                    );
                  } else ele = <div key={i}></div>;
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
      {repoListData && <ul id="repo-list-container">{repoList()}</ul>}
    </div>
  );
};

export default GithubInfo;
