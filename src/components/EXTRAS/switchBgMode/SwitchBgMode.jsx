import React from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import "./switchbgmode.css";

const SwitchBgMode = ({ switchMode, dark, color }) => {
  return (
    <div>
      <div
        className="switchMode"
        style={{ cursor: "pointer", listStyle: "none" }}
        onClick={() => switchMode()}
      >
        {dark ? (
          <MdDarkMode size={"20"} color={color ? color : `var(--cl-gray)`} />
        ) : (
          <MdLightMode size={"20"} olor={color ? color : `var(--cl-gray)`} />
        )}
      </div>
    </div>
  );
};

export default SwitchBgMode;
