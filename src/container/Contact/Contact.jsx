import "./Contact.scss";
import { useState } from "react";
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
  };
  const submitHandle = () => {
    if (
      inputValues.name.trim().length === 0 ||
      inputValues.email.trim().length === 0 ||
      inputValues.message.trim().length === 0
    ) {
      toast.error("Please fill all the fields");
      return;
    }
    if (state.succeeded) {
      toast.success("Sent Successfuly");
      setInputValues({
        name: "",
        email: "",
        message: "",
      });
    } else {
      toast.error("An Error Occurred");
      console.log(state.succeeded);
      console.log(state.errors);
    }
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
            id="name"
            name="name"
            value={inputValues.name}
          />
          <Input
            onChange={handleChange}
            type="email"
            title="Your email"
            id="email"
            name="email"
            value={inputValues.email}
          />
          <Input
            onChange={handleChange}
            title="Your Message"
            type="textarea"
            id="message"
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
