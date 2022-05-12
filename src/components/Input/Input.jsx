import "./Input.scss";
import { images } from "../../constants/index";

function Input({ title, value, name, type, onChange, submit }) {
  if (type == "textarea") {
    return (
      <div className="input-group text-area-container">
        <textarea name={name} type={type} required value={value} onChange={onChange} />
        <span className={value && "shrink"}>{title}</span>
        <button className="submit__form" disabled={submit}>
          <img src={images.send} />
        </button>
      </div>
    );
  } else {
    return (
      <div className="input-group">
        <input name={name} type={type} required value={value} onChange={onChange} />
        <span className={value && "shrink"}>{title}</span>
      </div>
    );
  }
}

export default Input;
