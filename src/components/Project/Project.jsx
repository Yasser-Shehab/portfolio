import "./Project.scss";
import { images } from "../../constants/index.js";
import { Button } from "../../components/index";

function Project({ title, description, image, website, githubRepo }) {
  return (
    <div className="project-container">
      <div className="project-content">
        <img className="project__image" src={image} />

        <div className="project-description">
          <div className="project__title">
            <h1>{title}</h1>
          </div>
          <div className="project__details">{description}</div>
          <div className="project-buttons">
            <a href={website} target="_blank">
              <Button buttonType="contact" title="View Live">
                <img src={images.arrow} />
              </Button>
            </a>
            {githubRepo && (
              <a href={githubRepo} target="_blank">
                <Button buttonType="github" title="Github">
                  <img src={images.github} />
                </Button>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
