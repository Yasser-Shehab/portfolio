import "./Button.scss";
import { images } from "../../constants/index";
import { Link } from "react-scroll";

const BUTTON_TYPE_CLASSES = {
  contact: "button--contact",
  download: "button--download",
  github: "button--github",
};

function Button({ children, title, buttonType, href, type }) {
  if (type == "scroll") {
    return (
      <Link
        to={href}
        smooth="true"
        offset={-150}
        className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      >
        <p>{title}</p>
        {children}
      </Link>
    );
  }
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
