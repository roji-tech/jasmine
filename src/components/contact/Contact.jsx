import React from "react";
import Social from "../social/Social";
import UnderStroke from "../UnderStroke/UnderStroke";

import "./contact.css";

const Contact = ({ dark }) => {
  return (
    <div className="contact">
      <h3>Contact Me</h3>
      <div className="contact-stroke">
        <UnderStroke dark={dark} />
      </div>
      <p className="p1">Let's Stay in Touch</p>
      <div className="form-wrap">
        <h4>Get In Touch</h4>
        <div className="form">
          <div>saljfhjnsaljnfjlnm</div>
          <form action="">
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="text" id="email" name="email" />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea rows={6} id="message" name="message" />
            </div>
            <div className="contact-buttons">
              <button type="submit">Send</button>
              <button type="reset">Clear</button>
            </div>
          </form>
        </div>
      </div>
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {/* <div className="contact-social">
        <p>Thank You Very Much</p>
        <Social />
      </div> */}
    </div>
  );
};

export default Contact;
