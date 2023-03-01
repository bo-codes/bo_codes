import GithubInfo from "../../components/GithubInfo/GithubInfo";
import GithubSection from "../../components/githubSection/GithubSection";
import "./HomePage.css";


function HomePage({data, loading}) {
  return (
    <div id="github-container">
      <GithubSection data={data}/>
      <GithubInfo />
    </div>
  )
}

export default HomePage;
