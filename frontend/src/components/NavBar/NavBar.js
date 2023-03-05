import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {

  return (
    <div id="navbar-container">
      <div id="list-div">
        <ul id="navbar-list">
          <li>
            <NavLink
              to="/"
              className="navbar-option"
              // style={({ isActive }) => ( isActive && {textShadow: "0px 0px 40px rgba(255, 255, 255, 1), 0 0 .6em white, 0 0 1em white"})}
            >
              /
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="navbar-option"
              // style={({ isActive }) => ( isActive && {textShadow: "0px 0px 40px rgba(255, 255, 255, 1), 0 0 .6em white, 0 0 1em white"})}
            >
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink to="/experience" className="navbar-option">
              EXPERIENCE
            </NavLink>
          </li>
          <li>
            <NavLink to="/skills" className="navbar-option">
              SKILLS
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className="navbar-option">
              PROJECTS
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="navbar-option">
              CONTACT
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
