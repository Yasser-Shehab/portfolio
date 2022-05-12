import "./Icon.scss";
import { images } from "../../constants/index";

function Icons({ image }) {
  return (
    <div className="icon-container">
      <div className="icon__img">
        <img src={image} />
      </div>
    </div>
  );
}

export default Icons;
