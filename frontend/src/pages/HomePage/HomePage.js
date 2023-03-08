import GithubSection from "./GithubSection/GithubSection"
import "./HomePage.css";

function HomePage({ data, loading }) {
  return (
    <div className="section-wrapper">
      <div id="github-container" className="section">
        <GithubSection data={data} loading={loading} />
      </div>
    </div>
  );
}

export default HomePage;
