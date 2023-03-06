import { createContext, useEffect, useState } from "react";

const ReposContext = createContext();

const Provider = ({children}) => {
  const API_URL = "http://localhost:3001/api/gh-repos/";
  const API_URL_2 = "http://localhost:3001/api/gh-repos/languages";


  const [repoData, setRepoData] = useState(null);

  let repoState;

  async function getRepos() {

    // FETCHING ALL REPOS
    const response = await fetch(API_URL);
    const fetchedData = await response.json(response);
    const allRepoData = fetchedData.data;

    // PULLING DATA AND FORMATTING FOR REPO LIST COMPONENT
    const repoListData = allRepoData.map((repo) => {
      return [repo.name, repo.html_url, repo.pushed_at, repo.languages_url];
    });

    // USING REPOS LIST FETCHED ABOVE TO GET LANGUAGE DATA FOR ALL REPOS
    const compiledRepoComponentData = await Promise.all(
      repoListData.map(async (repo) => {
        const languageList = await fetch(`${API_URL_2}?url=${repo[3]}`);
        const repoLanguages = await languageList.json();
        return {
          rawRepoData: {
            repoData: allRepoData
          },
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