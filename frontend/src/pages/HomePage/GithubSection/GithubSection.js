import GithubCommits from "../GithubCommits/GithubCommits"
import GithubInfo from "../GithubInfo/GithubInfo";
import './GithubSection.css'

const GithubSection = ({data, loading}) => {
  return (
    <div id="github-section-container">
      <GithubCommits data={data} loading={loading}/>
      {data && <GithubInfo loading={loading}/>}
    </div>
  );
};

export default GithubSection;
