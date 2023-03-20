import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import ColorSlider from "./components/ColorSlider";

const App = () => {
  const [redValue, setRedValue] = useState("");
  const [greenValue, setGreenValue] = useState("");
  const [blueValue, setBlueValue] = useState("");

  return (
    <div class="color-panel">
      <h1>Mixér barev</h1>
      <div class="sliders">
        <ColorSlider colorName="červená" baseColor="red" />
        <ColorSlider colorName="zelená" baseColor="green" />
        <ColorSlider colorName="modrá" baseColor="blue" />
      </div>
      <div
        class="color-box"
        id="color-box"
        style={{
          backgroundColor: `rgb(${redValue}, ${greenValue}, ${blueValue}`,
        }}
      ></div>
    </div>
  );
};

createRoot(document.querySelector("#app")).render(<App />);
