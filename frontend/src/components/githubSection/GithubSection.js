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
      <div id="gh-loading">
        {/* <img src={"/loading.gif"} alt="Loading..." width={200} /> */}
        <p>Activity Loading..</p>
      </div>
    );
  };

  // ------------ THIS IS THE GRAPH/DATA DISPLAY ------------ //
  const _renderGraphs = () => {
    return (
      <div>{data !== null && <canvas id="gh-content" ref={canvasRef} />}</div>
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
