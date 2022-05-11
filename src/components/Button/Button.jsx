import "./Button.scss";
import { images } from "../../constants/index";

const BUTTON_TYPE_CLASSES = {
  contact: "button--contact",
  download: "button--download",
  github: "button--github",
};

function Button({ children, title, buttonType, href }) {
  if (href) {
    return (
      <a href={href} download className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}>
        <p>{title}</p>
        {children}
      </a>
    );
  } else {
    return (
      <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}>
        <p>{title}</p>
        {children}
      </button>
    );
  }
}

export default Button;
