import "./Portfolio.scss";
import { useState } from "react";
import { projects } from "../../Data/Data";
import { Description, Project } from "../../components/index";

function Portfolio() {
  const [projectData, setprojectData] = useState(projects);
  return (
    <div className="portfolio-container">
      <Description title="🖥️ Portfolio" content="Some of my recently developed projects" />
      <div className="projects-section-container">
        {projectData.map((project, index) => {
          return <Project {...project} key={index} />;
        })}
      </div>
    </div>
  );
}

export default Portfolio;
