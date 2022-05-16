import React from "react";
import "./button.css";

const Button = ({ text, fontSize, color, bgColor }) => {
  return (
    <button
      className="button"
      style={{
        fontSize: fontSize,
        color: color,
        backgroundColor: bgColor,
      }}
    >
      <span>{text}</span>
    </button>
  );
};

export default Button;
