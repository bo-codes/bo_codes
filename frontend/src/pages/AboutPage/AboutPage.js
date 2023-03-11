import aboutPhoto from "../../img/about/about-2.jpg";
import { SiLinkedin, SiGithub, SiAngellist } from "react-icons/si";
import pdf from "../../img/Elias_Rodriguez-Resume-SWE.pdf";
import "./AboutPage.css";
import Skills from "../../components/Skills/Skills";

function AboutPage({ isLoading, loading }) {
  return (
    // <div id="aboutpage-text">
    //   <div id="aboutpage-experience">AB0U7</div>
    // </div>
    <>
      <div className="section-wrapper">
        <div className="section">
          {!isLoading && !loading && (
            <div id="about-container">
              <div id="alt-contact-section">
                <div id="photo-and-contact">
                  <div
                    id="alt-about-photo"
                    style={{ backgroundImage: `url(${aboutPhoto})` }}
                  ></div>
                  <div id="about-contact">
                    <div id="top-section-and-btn">
                      <div id="contact-top-section">
                        <div id="contact-name">ELI</div>
                        <div id="contact-at">@bo_codes</div>
                        <div id="contact-link-list">
                          <a
                            href="https://github.com/bo-codes"
                            className="contact-link"
                            target="_blank"
                          >
                            <SiGithub />
                          </a>
                          <a
                            href="https://www.linkedin.com/in/elias-rodriguez-066080155/"
                            className="contact-link"
                            target="_blank"
                          >
                            <SiLinkedin />
                          </a>
                          <a
                            href="https://angel.co/u/elias-rodriguez-3"
                            className="contact-link"
                            target="_blank"
                          >
                            <SiAngellist />
                          </a>
                        </div>
                      </div>
                      <a id="cv-download-btn" href={pdf} download>
                        <span id="optional-dl-btn">Download </span>CV
                      </a>
                    </div>
                    <div id="contact-bottom-section">
                      <div className="contact-info-container">
                        <div className="word-emphasis">Phone</div>
                        <div className="contact-info">562-454-6507</div>
                      </div>
                      <div className="contact-info-container">
                        <div className="word-emphasis">Email</div>
                        <div className="contact-info">
                          bo.coding888@gmail.com
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="alt-descr-container">
                  <div id="alt-about-descr">
                    <div id="about-descr-p1" className="alt-about-p">
                      A <span className="word-emphasis">Software Engineer</span>{" "}
                      with a background in{" "}
                      <span className="word-emphasis">design</span> and{" "}
                      <span className="word-emphasis">optimization</span> and 3
                      years of experience implementing code in a professional
                      engineering environment.
                    </div>
                    <div id="about-descr-p2" className="alt-about-p">
                      Problem solving, and building projects with a team is a
                      passion of mine and I constantly seek out challenges and
                      opportunities to push myself and grow as an engineer.{" "}
                    </div>
                    <div id="about-descr-p3" className="alt-about-p">
                      I take initiative in terms of refining processes, asking
                      questions and coming up with a plethora of
                      approaches/solutions for any given task/problem, and am
                      eager to contribute my self-starter mentality and array of
                      skills to an innovative workplace with a highly motivated
                      team.
                    </div>
                  </div>
                </div>
              </div>
              <div id="full-contact-section">
                <div
                  id="about-photo"
                  style={{ backgroundImage: `url(${aboutPhoto})` }}
                ></div>
                <div id="about-descr-container">
                  <div id="name-links-and-btn">
                    <h1 id="about-name">ELI</h1>
                    <div id="about-links">
                      <a className="alt-contact-link">
                        <SiGithub />
                      </a>
                      <a className="alt-contact-link">
                        <SiLinkedin />
                      </a>
                      <a className="alt-contact-link">
                        <SiAngellist />
                      </a>
                    </div>
                    <a id="alt-cv-download-btn" href={pdf} download>
                      <span id="optional-dl-btn">Download </span>CV
                    </a>
                  </div>
                  <div id="about-descr">
                    <div id="about-descr-p1" className="about-p">
                      A <span className="word-emphasis">Software Engineer</span>{" "}
                      with a background in{" "}
                      <span className="word-emphasis">design</span> and{" "}
                      <span className="word-emphasis">optimization</span> and 3
                      years of experience implementing code in a professional
                      engineering environment.
                    </div>
                    <div id="about-descr-p2" className="about-p">
                      Problem solving, and building projects with a team is a
                      passion of mine and I constantly seek out challenges and
                      opportunities to push myself and grow as an engineer.{" "}
                    </div>
                    <div id="about-descr-p3" className="about-p">
                      I take initiative in terms of refining processes, asking
                      questions and coming up with a plethora of
                      approaches/solutions for any given task/problem, and am
                      eager to contribute my self-starter mentality and array of
                      skills to an innovative workplace with a highly motivated
                      team.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="section-wrapper">
        <div className="section" id="skills-container">
          <div id="skills-title">Skills</div>
          <Skills />
        </div>
      </div>
    </>
  );
}

export default AboutPage;
