import React from "react";
import UnderStroke from "../EXTRAS/UnderStroke/UnderStroke";

import { ContactFormWrap, ContactHead, ContactWrap } from "./contactStyle";

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
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
          </div>
          <hr />
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
