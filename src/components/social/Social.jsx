import React from "react";
import { MdEmail } from "react-icons/md";
import {
  FaWhatsapp,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
} from "react-icons/fa";

import "./social.css";

const Social = () => {
  let socialSize = "30";

  return (
    <div>
      <div className="social-links">
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
          <FaInstagram size={socialSize} className="social" />
        </a>
      </div>
    </div>
  );
};

export default Social;
