import "./Contact.scss";
import { useState } from "react";
import { Description, Input } from "../../components/index";
import { Icon } from "../../components/index";
import { images } from "../../constants/index";
import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [state, handleSubmit] = useForm("mayvajoe");
  const iconImages = [
    {
      image: images.linkedin,
      type: "link",
      link: "https://www.linkedin.com/in/yasser-shehab-494638182/",
    },
    { image: images.facebook, type: "link", link: "https://www.facebook.com/yassershehab.eldeen" },
  ];
  if (state.succeeded) {
    return (
      <div className="submit-success">
        <p>Your message ✉️ was sent 😊</p>
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
    console.log(inputValues);
  };

  return (
    <div className="contact-container">
      <Description title="📫 Contact me" content="Get in touch, drop me an email" />
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <Input
            onChange={handleChange}
            type="text"
            title="Your name"
            name="name"
            value={inputValues.name}
          />
          <Input
            onChange={handleChange}
            type="email"
            title="Your email"
            name="email"
            value={inputValues.email}
          />
          <Input
            onChange={handleChange}
            title="Your Message"
            type="textarea"
            name="message"
            submit={state.submitting}
            value={inputValues.message}
          />
        </form>
      </div>
      <div className="social-media-section">
        <h2>
          or
          <br />
          reach me through my social media
        </h2>
        <div className="social-icons">
          {iconImages.map((icon, index) => {
            return <Icon key={index} image={icon.image} link={icon.link} type={icon.type} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Contact;
