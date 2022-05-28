import React from "react";
import { MdEmail } from "react-icons/md";
import {
  FaWhatsapp,
  FaTwitter,
  FaFacebookF,
  FaTelegramPlane,
  FaInstagram,
} from "react-icons/fa";

import "./social.css";

const Social = () => {
  let socialSize = "30";

  return (
    <div>
      <div className="social-links">
        <a href="https://wa.me/+2348134093585" target={"_blank"}>
          <FaWhatsapp size={socialSize} className="social" />
        </a>
        <a href="mailto:abdullahjamiu4@gmail.com" target={"_blank"}>
          <MdEmail size={socialSize} className="social" />
        </a>
        <a href="https://t.me/Rojitech" target={"_blank"}>
          <FaTelegramPlane size={socialSize} className="social" />
        </a>
        <a href="https://www.facebook.com/aisha.akinbani" target={"_blank"}>
          <FaFacebookF size={socialSize} className="social" />
        </a>
        <a href="" target={"_blank"}>
          <FaTwitter size={socialSize} className="social" />
        </a>
        <a
          href="https://www.instagram.com/p/CcLW9xpsoPg/?igshid=YmMyMTA2M2Y="
          target={"_blank"}
        >
          <FaInstagram size={socialSize} className="social" />
        </a>
      </div>
    </div>
  );
};

export default Social;
