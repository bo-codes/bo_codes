import { createContext, useState } from "react";

const ReposContext = createContext();

const Provider = ({children}) => {
  const [repos, setRepos] = useState(null);

  const repoState = {
    repos: repos,
    updateRepos: setRepos,
  }

  return (
    <ReposContext.Provider value={repoState}>
      {children}
    </ReposContext.Provider>
  )
}

export {Provider};
export default ReposContext;
