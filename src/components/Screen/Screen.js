import NavBar from "../NavBar/NavBar";
import HomePage from "../../pages/HomePage/HomePage"
import "./Screen.css";
import { useLocation } from "react-router-dom";
// import Route from "../Route/Route";

function Screen() {

  let screenText;

  const currLocation = useLocation();

  console.log(currLocation.pathname)

  switch(currLocation.pathname) {
    case '/':
      screenText = (
        <div id="homepage-text">
          <div id="homepage-bocodes">B0_C0DES</div>
          <div id="homepage-name">Eli Rodriguez</div>
        </div>
      );
      break;
    case '/about':
      screenText = <div id="screen-page-title">AB0U7</div>
      break;
    case '/experience':
      screenText = <div id="screen-page-title" style={{fontSize: "13vw"}}>3XPERiENCE</div>
      break;
    case '/skills':
      screenText = <div id="screen-page-title">SKiLLS</div>
      break;
    case '/projects':
      screenText = <div id="screen-page-title">PR0JECTS</div>
      break;
    case '/contact':
      screenText = <div id="screen-page-title">C0NTACT</div>
      break;
  }

  return (
    <>
      <div id="screen">
        <NavBar />
        <div className="screen-content">
          <div id="screen-text">
            {screenText}
          </div>
        </div>
      </div>
    </>
  );
}

export default Screen;
