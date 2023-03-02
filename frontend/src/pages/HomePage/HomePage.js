import GithubInfo from "../../components/GithubInfo/GithubInfo";
import GithubSection from "../../components/githubSection/GithubSection";
import "./HomePage.css";


function HomePage({data, loading}) {
  return (
    <div className="section-wrapper">
      <div id="github-container" className="section">
        <GithubSection data={data}/>
        <GithubInfo />
      </div>
    </div>
  )
}

export default HomePage;
