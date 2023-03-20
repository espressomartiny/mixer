import React from "react";
import "./style.css";

const ColorSlider = ({ baseColor, colorName, onValueChange, colorValue }) => {
  return (
    <>
      <label htmlFor={baseColor}>{colorName}</label>
      <input
        type="range"
        class={`slider slider--${baseColor}`}
        id={`${baseColor}Slider`}
        min="0"
        max="255"
        value={colorValue}
        onChange={(e) => onValueChange(e.target.value)}
      />
    </>
  );
};
export default ColorSlider;
