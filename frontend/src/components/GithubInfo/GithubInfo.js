import { useState, useEffect, useLayoutEffect } from "react";
import "./GithubInfo.css";

const API_URL = "http://localhost:3001/api/gh-repos/";

const GithubInfo = () => {
  const [loading, setLoading] = useState(false);
  const [repoData, setRepoData] = useState(null);

  useEffect(() => {
    setLoading(true);
    async function getData() {
      const response = await fetch(API_URL);
      const fetchedData = await response.json(response);
      setRepoData(fetchedData.data);
      setLoading(false);
      console.log(fetchedData.data);
    }
    getData();
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
          <a id="repo-link" href={repo.html_url} target="_blank">
            {repo.name}
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
