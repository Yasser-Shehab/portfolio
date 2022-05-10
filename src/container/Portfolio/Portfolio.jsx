import "./Portfolio.scss";
import { Description, Project } from "../../components/index";

function Portfolio() {
  return (
    <div className="portfolio-container">
      <Description title="🖥️ Portfolio" content="Some of my recently developed projects" />
      <div className="projects-section-container">
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
}

export default Portfolio;
