// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Timeline from "../../components/Timeline/Timeline";
import "./ExperiencePage.css";
// const eductaionStyle = { background: "rgb(64, 30, 166)", color: "#fff", };
// const workStyle = { background: "rgb(73, 120, 231)", color: "#fff" };
// const elementStyle = { background: "rgba(150, 150, 150, 0.405)", color: "#fff" };

function ExperiencePage() {
  return (
    <div className="section-wrapper" id="experience-section">
      <div className="section" id="experience-container">
        <Timeline />
        {/* <VerticalTimeline className="vertical-timeline-custom-line">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={elementStyle}
            contentArrowStyle={{ borderRight: "7px solid  rgb(150, 150, 150)" }}
            date="2006 - 2008"
            iconStyle={workStyle}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Web Designer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              San Francisco, CA
            </h4>
            <p>User Experience, Visual Design</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={elementStyle}
            contentArrowStyle={{ borderRight: "7px solid  rgb(150, 150, 150)" }}
            date="April 2013"
            iconStyle={eductaionStyle}
            // icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Content Marketing for Web, Mobile and Social Media
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Online Course
            </h4>
            <p>Strategy, Social Media</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={elementStyle}
            contentArrowStyle={{ borderRight: "7px solid  rgb(150, 150, 150)" }}
            date="June - August 2019; January - July 2020; May - August 2021 "
            iconStyle={workStyle}
            // icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">Intern Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Work</h4>
            <p>Creative Direction, User Experience, Visual Design</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={elementStyle}
            contentArrowStyle={{ borderRight: "7px solid  rgb(150, 150, 150)" }}
            date="2016 - 2021"
            iconStyle={eductaionStyle}
            // icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              BFA in Concept Design (Pre-Production)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Bachelor Degree
            </h4>
            <p>Mastery of Design Principles</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            // icon={<StarIcon />}
          />
        </VerticalTimeline> */}
      </div>
    </div>
  );
}

export default ExperiencePage;
