import "./Description.scss";

function Description({ title, content }) {
  return (
    <div className="description-block">
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
}

export default Description;
