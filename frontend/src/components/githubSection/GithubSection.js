import React, { useRef, useState, useEffect } from "react";
import "./GithubSection.css";
const API_URL = "http://localhost:3001/api/gh/";

const GithubSection = () => {
  const canvasRef = useRef();
  const contentRef = useRef();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    setLoading(true);
    async function getData() {
      const response = await fetch(API_URL);
      const fetchedData = await response.json(response);
      setData(fetchedData);
      setLoading(false);
    }
    getData();
    console.log("IN FETCH", data);
  }, []);

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

  const _renderLoading = () => {
    return (
      <div className="App-centered">
        <div className="App-loading">
          <img src={"/loading.gif"} alt="Loading..." width={200} />
          <p>Activity Loading..</p>
        </div>
      </div>
    );
  };

  // ------------ THIS IS THE GRAPH/DATA DISPLAY ------------ //
  const _renderGraphs = () => {
    return (
      <div style={{ display: data !== null && !loading ? "block" : "none" }}>
        {data !== null && <canvas id="gh-content" ref={canvasRef} />}
      </div>
    );
  };
  // ------------ THIS IS THE GRAPH/DATA DISPLAY ------------ //

  return (
    <section ref={contentRef} id="gh-section-container">
      {loading && _renderLoading()}
      {!loading && _renderGraphs()}
    </section>
  );
};

export default GithubSection;
