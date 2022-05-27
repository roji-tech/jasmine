import React from "react";
import UnderStroke from "../EXTRAS/UnderStroke/UnderStroke";
import {
  FaWhatsapp,
  FaTelegram,
  FaFacebook,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { ContactFormWrap, ContactHead, ContactWrap } from "./contactStyle";

const socialData = [
  {
    name: "Whatsapp",
    icon: <FaWhatsapp fontSize={40} color={"green"} />,
  },
  {
    name: "Linked In",
    icon: <FaLinkedinIn fontSize={40} color={"green"} />,
  },
  {
    name: "Telegram",
    icon: <FaTelegram fontSize={40} color={"green"} />,
  },
  {
    name: "Facebook",
    icon: <FaFacebook fontSize={40} color={"green"} />,
  },
  {
    name: "Twitter",
    icon: <FaTwitter fontSize={40} color={"green"} />,
  },
];

const Box = ({ name, icon }) => {
  return (
    <div className="box">
      {icon}
      <h4>{name}</h4>
      <small>Message on {name}</small>
    </div>
  );
};

const Contact = ({ dark }) => {
  return (
    <ContactWrap>
      <ContactHead className="head"> Contact Me </ContactHead>
      <div className="contact-stroke">
        <UnderStroke dark={dark} />
      </div>
      <p className="p1">Let's Stay in Touch</p>
      <ContactFormWrap>
        <h4>Get In Touch</h4>
        <div className="form">
          <div className="contact-box">
            {socialData.map((box, index) => (
              <Box name={box.name} icon={box.icon} />
            ))}
          </div>
          <form action="">
            <div>
              <input
                type="text"
                placeholder="Full Name"
                id="name"
                name="name"
              />
            </div>
            <div>
              <input type="text" id="email" placeholder="Email" name="email" />
            </div>
            <div>
              <textarea
                rows={5}
                id="message"
                placeholder="Message"
                name="message"
              />
            </div>
            <div className="contact-buttons">
              <button type="submit">Send</button>
              <button type="reset">Clear</button>
            </div>
          </form>
        </div>
      </ContactFormWrap>
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </ContactWrap>
  );
};

export default Contact;
