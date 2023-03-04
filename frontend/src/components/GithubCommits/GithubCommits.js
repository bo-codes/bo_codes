import React, { useRef, useEffect } from "react";
import "./GithubCommits.css";

const GithubCommits = ({ data, loading }) => {
  const canvasRef = useRef();

  useEffect(() => {
    draw();
  }, [data]);

  const draw = async () => {
    if (!canvasRef.current || !data) {
      return;
    }

    const { drawContributions } = await import("github-contributions-canvas");

    drawContributions(canvasRef.current, {
      data,
      username: "bo-codes",
      themeName: "githubDark",
    });
  };

  // const _renderLoading = () => {
  //   return (
  //     <div id="gh-loading">
  //       {/* <img src={"/loading.gif"} alt="Loading..." width={200} /> */}
  //       <p>Activity Loading..</p>
  //     </div>
  //   );
  // };

  // ------------ THIS IS THE GRAPH/DATA DISPLAY ------------ //
  const _renderGraphs = (
    <div>{data !== null && <canvas id="gh-content" ref={canvasRef} />}</div>
  );
  // ------------ THIS IS THE GRAPH/DATA DISPLAY ------------ //

  return (
    <section id="gh-section-container">
      {/* {loading && _renderLoading()} */}
      {!loading && _renderGraphs}
    </section>
  );
};

export default GithubCommits;
