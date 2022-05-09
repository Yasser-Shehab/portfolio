import "./Button.scss";
import { images } from "../../constants/index";

function Button() {
  return (
    <div className="button-container">
      <p>Download CV</p>
      <img src={images.download} />
    </div>
  );
}

export default Button;
