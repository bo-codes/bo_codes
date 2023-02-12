import Link from "../Link/Link";
import "./NavBar.css";

function NavBar() {

  // const onNav = (url) => {
  //   window.history.pushState({}, '', url)
  // }

  return (
    <div id="navbar-container">
      <div id="list-div">
        <ul>
          <li>
            <Link to="/about">
                ABOUT
            </Link>
          </li>
          <li>
            <Link to="/experience">
              EXPERIENCE
            </Link>
          </li>
          <li>
            <Link to="/skills">
              SKILLS
            </Link>
          </li>
          <li>
            <Link to="/projects">
              PROJECTS
            </Link>
          </li>
          <li>
            <Link to="/contact">
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
