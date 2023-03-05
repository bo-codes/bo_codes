import "./HomePage.css";
import GithubSection from "../../components/GithubSection/GithubSection";


function HomePage({data, loading}) {
  return (
    <div className="section-wrapper">
      <div id="github-container" className="section">
        <GithubSection data={data} loading={loading}/>
      </div>
    </div>
  )
}

export default HomePage;
