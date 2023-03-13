import TimelineItem from "../TimelineItem/TimelineItem";
import "./Timeline.css"

const timelineData = [
  {
    text: "BFA in Concept Design",
    date: "August 2016 - December 2021",
    category: {
      tag: "Education",
      color: "rgb(19, 18, 77)",
    },
    // link: {
    //   url: "https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2",
    //   text: "Read more",
    // },
  },
  {
    text: "Intern Engineer",
    date: "June 2019 - August 2021",
    category: {
      tag: "Work",
      color: "rgb(19, 18, 77)",
    },
    // link: {
    //   url: "https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2",
    //   text: "Read more",
    // },
  },
  {
    text: "App Academy's Full-Stack Software Engineering Program",
    date: "August 2022",
    category: {
      tag: "Eductaion/Certificate",
      color: "rgb(19, 18, 77)",
    },
    // link: {
    //   url: "https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2",
    //   text: "Read more",
    // },
  },
  {
    text: "Freelance Web Development",
    date: "September 2022 - Present",
    category: {
      tag: "Work",
      color: "rgb(19, 18, 77)",
    },
    // link: {
    //   url: "https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2",
    //   text: "Read more",
    // },
  },
];

const Timeline = () =>
  timelineData.length > 0 && (
    <div className="timeline-container">
      {timelineData.map((data, idx) => (
        <TimelineItem data={data} key={idx} />
      ))}
    </div>
  );

export default Timeline;
