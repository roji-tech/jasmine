import React from "react";

import "./understroke.css";

const UnderStroke = ({color, dark }) => {
  let underDiv = {
    width: "11em",
    height: "4px",
    display: "flex",
    margin: ".2em",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  };

  let underSpan = {
    display: "inline-block",
    width: "2em",
    height: "100%",
    backgroundColor: "var(--cl-gray)",
    borderRadius: "40%",
    position: "absolute",
    transform: "scaleY(500%)",
    boxSizing: "border-box",
    border: `2px solid ${!dark ? "var(--bg-dark)" : "var(--btn-color-2)"}`,
  };

  return (
    <div>
      <div
        id="underDiv"
        style={underDiv}
        className={dark ? "strokedark" : "strokelight"}
      >
        <span
          id="underSpan"
          style={underSpan}
          className={dark ? "strokespandark" : "strokespanlight"}
        ></span>
      </div>
    </div>
  );
};

export default UnderStroke;
