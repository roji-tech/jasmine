import React from "react";
import { MdFacebook, MdCall, MdMail, MdEmail } from "react-icons/md";
import {
  FaWhatsapp,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaTelegramPlane,
} from "react-icons/fa";

import "./social.css";

const Social = () => {
  let socialSize = "20";

  return (
    <div>
      <div className="social-links">
        <a href="">
          <MdCall size={socialSize} className="social" />
        </a>
        <a href="">
          <FaWhatsapp size={socialSize} className="social" />
        </a>
        <a href="">
          <MdEmail size={socialSize} className="social" />
        </a>
        <a href="">
          <FaTelegramPlane size={socialSize} className="social" />
        </a>
        <a href="">
          <FaFacebookF size={socialSize} className="social" />
        </a>
        <a href="">
          <FaTwitter size={socialSize} className="social" />
        </a>
        <a href="">
          <FaLinkedinIn size={socialSize} className="social" />
        </a>
      </div>
    </div>
  );
};

export default Social;
