import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import ColorSlider from "./components/ColorSlider";

const App = () => {
  const [redValue, setRedValue] = useState("");
  const [greenValue, setGreenValue] = useState("");
  const [blueValue, setBlueValue] = useState("");

  return (
    <div className="color-panel">
      <h1>Mixér barev</h1>
      <div className="sliders">
        <ColorSlider
          colorName="červená"
          baseColor="red"
          onValueChange={setRedValue}
          colorValue={redValue}
        />
        <ColorSlider
          colorName="zelená"
          baseColor="green"
          onValueChange={setGreenValue}
          colorValue={greenValue}
        />
        <ColorSlider
          colorName="modrá"
          baseColor="blue"
          onValueChange={setBlueValue}
          colorValue={blueValue}
        />
      </div>
      <div
        className="color-box"
        id="color-box"
        style={{
          backgroundColor: `rgb(${redValue}, ${greenValue}, ${blueValue}`,
        }}
      ></div>
    </div>
  );
};

createRoot(document.querySelector("#app")).render(<App />);
