import "./Icon.scss";

function Icons({ image, type, link }) {
  if (type == "link") {
    return (
      <a href={link} className="hyper-link" target="_blank">
        <div className="icon-container ">
          <div className="icon__img">
            <img src={image} />
          </div>
        </div>
      </a>
    );
  } else {
    return (
      <div className="icon-container">
        <div className="icon__img">
          <img src={image} />
        </div>
      </div>
    );
  }
}

export default Icons;
