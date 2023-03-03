import aboutPhoto from "../../img/about/about-2.jpg";
import "./AboutPage.css";

function AboutPage({isLoading}) {
  return (
    // <div id="aboutpage-text">
    //   <div id="aboutpage-experience">AB0U7</div>
    // </div>
    <div className="section-wrapper">
      <div id="about-container" className="section">
        {!isLoading && (
          <>
            <div
              id="about-photo"
              style={{ backgroundImage: `url(${aboutPhoto})` }}
            ></div>
            <div id="about-descr-container">
              <h1 id="about-name">ELI</h1>
              <div id="about-descr">
                <div id="about-descr-p1" className="about-p">
                  A <span className="word-emphasis">Software Engineer</span> with a
                  background in <span className="word-emphasis">design</span> and{" "}
                  <span className="word-emphasis">optimization</span> and 3 years of
                  experience implementing code in a professional engineering
                  environment.
                </div>
                <div id="about-descr-p2" className="about-p">
                  Problem solving, and building projects with a team is a passion of
                  mine and I constantly seek out challenges and opportunities to
                  push myself and grow as an engineer.{" "}
                </div>
                <div id="about-descr-p3" className="about-p">
                  I take initiative in terms of refining processes, asking questions
                  and coming up with a plethora of approaches/solutions for any
                  given task/problem, and am eager to contribute my self-starter
                  mentality and array of skills to an innovative workplace with a
                  highly motivated team.
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default AboutPage;
