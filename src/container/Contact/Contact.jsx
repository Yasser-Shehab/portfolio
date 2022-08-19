import "./Contact.scss";
import { useEffect, useState } from "react";
import { Description, Input } from "../../components/index";
import { Icon } from "../../components/index";
import { images } from "../../constants/index";
import { useForm, ValidationError } from "@formspree/react";
import { toast } from "react-toastify";
import { contactData } from "../../Data/Data";

function Contact() {
  const [contactIcons, setContactIcons] = useState(contactData);
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [state, handleSubmit] = useForm("mayvajoe");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
    console.log(inputValues);
  };
  const submitHandle = () => {
    if (state.succeeded) {
      toast.success("Sent Successfuly");
    } else {
      toast.error("An Error Occurred");
    }
    setInputValues({
      name: "",
      email: "",
      message: "",
    });
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
            submitHandle={submitHandle}
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
        {contactIcons && (
          <div className="social-icons">
            {contactIcons.map((icon, index) => {
              return <Icon key={index} image={icon.image} link={icon.link} type={icon.type} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Contact;
