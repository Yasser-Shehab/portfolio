import "./Header.scss";
import { images } from "../../constants/index.js";
import { Button } from "../../components/index";

function Header() {
  return (
    <div className="hero-image">
      <div className="hero-content">
        <div className="name-block">
          <div className="wave-emoji-block">
            <img className="emoji-image" src={images.handwave} />
          </div>
          <div className="name-block-txt">
            <p>Hello, I am</p>
            <h1>Yasser Shehab</h1>
            <p>Front-End Devloper 🎨</p>
          </div>
        </div>
        <div className="hero-buttons">
          <Button />
          <Button />
        </div>
      </div>
    </div>
  );
}

export default Header;
