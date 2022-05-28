import React from "react";
import { MdEmail } from "react-icons/md";
import {
  FaWhatsapp,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaTelegramPlane,
} from "react-icons/fa";

import "./social.css";

const Social = () => {
  let socialSize = "30";

  return (
    <div>
      <div className="social-links">
        <a href="https://wa.me/+2348134093585">
          <FaWhatsapp size={socialSize} className="social" />
        </a>
        <a href="mailto:abdullahjamiu4@gmail.com">
          <MdEmail size={socialSize} className="social" />
        </a>
        <a href="https://t.me/Rojitech">
          <FaTelegramPlane size={socialSize} className="social" />
        </a>
        <a href="https://www.facebook.com/aisha.akinbani">
          <FaFacebookF size={socialSize} className="social" />
        </a>
        <a href="">
          <FaTwitter size={socialSize} className="social" />
        </a>
        <a href="https://www.instagram.com/p/CcLW9xpsoPg/?igshid=YmMyMTA2M2Y=">
          <FaLinkedinIn size={socialSize} className="social" />
        </a>
      </div>
    </div>
  );
};

export default Social;
