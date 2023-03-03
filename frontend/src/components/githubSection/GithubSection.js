import GithubCommits from "../GithubCommits/GithubCommits";
import GithubInfo from "../GithubInfo/GithubInfo";
import './GithubSection.css'

const GithubSection = ({data, loading}) => {
  return (
    <>
      <GithubCommits data={data} loading={loading}/>
      <GithubInfo loading={loading}/>
    </>
  );
};

export default GithubSection
