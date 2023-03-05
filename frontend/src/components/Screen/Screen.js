import NavBar from "../NavBar/NavBar";
import "./Screen.css";
import { useLocation } from "react-router-dom";
// import Route from "../Route/Route";

function Screen() {
  let screenText;
  let chNum;
  let chAbrev;

  const currLocation = useLocation();

  // console.log(currLocation.pathname);

  switch (currLocation.pathname) {
    case "/":
      screenText = (
        <div id="homepage-text">
          <div id="homepage-bocodes">B0_C0DES</div>
          <div id="homepage-name">Eli Rodriguez</div>
        </div>
      );
      chNum = "00";
      chAbrev = "HME";
      break;
    case "/about":
      screenText = <div id="screen-page-title">AB0U7</div>;
      chNum = "01";
      chAbrev = "ABT";
      break;
    case "/experience":
      screenText = (
        <div id="screen-page-title" style={{ fontSize: "13vw" }}>
          3XPERiENCE
        </div>
      );
      chNum = "02";
      chAbrev = "EXP";
      break;
    case "/skills":
      screenText = <div id="screen-page-title">SKiLLS</div>;
      chNum = "03";
      chAbrev = "SKL";
      break;
    case "/projects":
      screenText = <div id="screen-page-title">PR0JECTS</div>;
      chNum = "04";
      chAbrev = "PRJ";
      break;
    case "/contact":
      screenText = <div id="screen-page-title">C0NTACT</div>;
      chNum = "05";
      chAbrev = "CNC";
      break;
    default:
      break;
  }

  return (
    <>
      <div id="screen">
        <NavBar />
        <div className="screen-content">
          <div id="channel-text">
            <span>CH:</span> <span>{chNum}</span> <span>{chAbrev}</span>
          </div>
          <div id="screen-text">{screenText}</div>
        </div>
      </div>
    </>
  );
}

export default Screen;
