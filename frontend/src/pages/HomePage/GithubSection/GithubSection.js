import AppTypeGraphHorizontal from "../../../components/AppTypeGraph/AppTypeGraphHorizontal";
import AppTypeGraphVertical from "../../../components/AppTypeGraph/AppTypeGraphVertical";
import AppTypeGraph from "../../../components/AppTypeGraph/AppTypeGraphVertical";
import LanguagesGraph from "../../../components/LanguagesGraph/LanguagesGraph";
import GithubCommits from "../GithubCommits/GithubCommits";
import GithubInfo from "../GithubInfo/GithubInfo";
import "./GithubSection.css";

const GithubSection = ({ data, loading }) => {
  return (
    <div id="github-section-container">
      <GithubCommits data={data} loading={loading} />
      {data && <GithubInfo loading={loading} />}
      {/* <AppTypeGraphVertical /> */}
      <AppTypeGraphHorizontal />
      <LanguagesGraph />
    </div>
  );
};

export default GithubSection;
