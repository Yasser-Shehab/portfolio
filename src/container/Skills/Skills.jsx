import "./Skills.scss";
import { Description, Icon } from "../../components/index";
import { images } from "../../constants/index";

function Skills() {
  const iconImages = [
    images.css,
    images.html,
    images.javascript,
    images.typescript,
    images.react,
    images.mongodb,
    images.node,
    images.redux,
    images.sass,
    images.webpack,
    images.figma,
    images.git,
  ];
  return (
    <div className="skills-container">
      <Description title="🔧 Skills" content="Some of the tools I am proficient with" />
      <div className="skills-icons">
        {iconImages.map((icon) => {
          return <Icon image={icon} />;
        })}
      </div>
    </div>
  );
}

export default Skills;
