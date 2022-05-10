import "./Project.scss";
import { images } from "../../constants/index.js";
import { Button } from "../../components/index";

function Project() {
  return (
    <div className="project-container">
      <div className="project-content">
        <img className="project__image" src={images.project1} />

        <div className="project-description">
          <div className="project__title">
            <div className="project-icon">🚧</div>
            <h1>Mile for Construction</h1>
          </div>
          <div className="project__details">
            Freelance project for a construction Enginnering company consisted of two parts a
            dashboard and a front page to see the company projects
          </div>
          <div className="project-buttons">
            <Button buttonType="contact" title="View Live">
              <img src={images.arrow} />
            </Button>
            <Button buttonType="github" title="Github">
              <img src={images.github} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
