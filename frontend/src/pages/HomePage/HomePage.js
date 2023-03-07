import "./HomePage.css";

function HomePage({ data, loading }) {
  return (
    <div className="section-wrapper">
      {console.log(process.env, "PROCESS ENV")}
      <div id="github-container" className="section">
        {/* <GithubSection data={data} loading={loading} /> */}
      </div>
    </div>
  );
}

export default HomePage;
