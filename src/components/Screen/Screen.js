import NavBar from "../NavBar/NavBar";
import HomePage from "../../pages/HomePage";
import "./Screen.css";
import Route from "../Route/Route";

function Screen() {
  return (
    <>
      <div id="screen">
        <NavBar />
        <div className="screen-content">
          {/* <div>bobo</div> */}
          <Route path="/about">
            <HomePage />
            {/* <div style={{height: '100px', width: '100px', border: '1px solid red'}}>bobo</div> */}
          </Route>
        </div>
      </div>
    </>
  );
}

export default Screen;
