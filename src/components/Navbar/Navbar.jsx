import "./Navbar.scss";
import { Link } from "react-scroll";
function Navbar() {
  return (
    <nav>
      <div className="nav-wrapper">
        <ul className="nav-list">
          <Link to="hero-image" smooth="true" className="nav-link">
            About
          </Link>
          <Link to="portfolio-container" offset={-150} smooth="true" className="nav-link">
            Projects
          </Link>
          <Link to="skills-container" offset={-50} smooth="true" className="nav-link">
            Skills
          </Link>
          <Link to="contact-container" offset={-150} smooth="true" className="nav-link">
            Contact
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
