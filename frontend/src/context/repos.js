import { createContext, useEffect, useState } from "react";

const ReposContext = createContext();

const Provider = ({children}) => {
  let API_URL;
  {process.env.NODE_ENV !== "production"
    ? (API_URL = "http://localhost:3001/api/gh/repos")
    : (API_URL = "https://bo-codes.herokuapp.com/api/gh/repos");
  }
  let API_URL_2;
  {process.env.NODE_ENV !== "production"
    ? (API_URL_2 = "http://localhost:3001/api/gh/repos/languages")
    : (API_URL_2 = "https://bo-codes.herokuapp.com/api/gh/repos/languages");}


  const [repoData, setRepoData] = useState(null);

  async function getRepos() {
    // console.log(process.env.GH_AUTH, "PROCESS ENV")
    // console.log(API_URL, "API_URL")
    // console.log(API_URL_2, "API_URL_2")
    // console.log(process.env.NODE_ENV, "NODE_ENV")

    // FETCHING ALL REPOS
    // console.log(API_URL)
    const response = await fetch(API_URL, {
      // headers: {
      //   "Access-Control-Allow-Origin": "*",
      //   "Access-Control-Expose-Headers": "ETag, Link, X-GitHub-OTP, x-ratelimit-limit, x-ratelimit-remaining, x-ratelimit-reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval"
      // }
    });
    const fetchedData = await response.json(response);
    const allRepoData = fetchedData.data;

    // PULLING DATA AND FORMATTING FOR REPO LIST COMPONENT
    const repoListData = allRepoData.map((repo) => {
      return [repo.name, repo.html_url, repo.pushed_at, repo.languages_url];
    });

    // USING REPOS LIST FETCHED ABOVE TO GET LANGUAGE DATA FOR ALL REPOS
    const compiledRepoComponentData = await Promise.all(
      repoListData.map(async (repo) => {
        const languageList = await fetch(`${API_URL_2}?url=${repo[3]}`, {
          // headers: {
          //   "Access-Control-Allow-Origin": "*",
          //   "Access-Control-Expose-Headers":
          //     "ETag, Link, X-GitHub-OTP, x-ratelimit-limit, x-ratelimit-remaining, x-ratelimit-reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval",
          // },
        });
        const repoLanguages = await languageList.json();
        return {
          rawRepoData: [
            ...allRepoData
          ],
          graphData: {
            languages: repoLanguages,
          },
          repoListData: {
            name: repo[0],
            url: repo[1],
            pushed_at: repo[2],
            languages: [...Object.keys(repoLanguages)],
          },
        };
      })
    );
    // console.log(compiledRepoComponentData)
    setRepoData(compiledRepoComponentData)
  }

  useEffect(() => {
    getRepos();
  }, [])


  return (
      repoData && <ReposContext.Provider value={{repoData}}>
        {/* {console.log(repoData, "repoData")} */}
        {children}
      </ReposContext.Provider>
  )
}

export {Provider};
export default ReposContext;
