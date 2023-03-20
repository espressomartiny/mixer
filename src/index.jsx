import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import ColorSlider from './components/ColorSlider';

const App = () => {


  return (

	<div class="color-panel">
		<h1>Mixér barev</h1>
		<div class="sliders">

    <ColorSlider colorName='červená' baseColor='red' />
    <ColorSlider colorName='zelená' baseColor='green' />
    <ColorSlider colorName='modrá' baseColor='blue' />

		</div>
		<div class="color-box" id="color-box"></div>
	</div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
