import React from 'react';
import './App.css';
import logo from './logo.png'
import Calculate from './Components/Calculate.js';
import AdviceBasedOnYour from './Components/Advices.js';

export default function App() {
  function handleInput() {

    let heightValue = parseInt(document.getElementById("my-input").value);
    let weightValue = parseInt(document.getElementById("my-input2").value);
    let bmi = Calculate(heightValue, weightValue);
    let advice = AdviceBasedOnYour(bmi);
    document.getElementById("display-BMI").innerHTML = bmi;
    document.getElementById("display-Advice").innerHTML = advice;
  }


  return (
    <div className="main-container">
      <div id="left-column">
        <div id="logo-bmi">
          <img id="logo" alt="app logo" src={logo}></img>
          <div id="total">Total: </div>
          <div id="display-BMI">0</div>
        </div>
        <div id="header">
          <h1>BMI CALCULATOR</h1>
        </div>
        <div id="input-container">
          <p>Height</p>
          <input id="my-input" type="text" placeholder="cm" />
          <p>Weight</p>
          <input id="my-input2" type="text" placeholder="kg" />
        </div>
        <div id="button">
          <button className="btn" onClick={handleInput}>Calculate BMI</button>
        </div>
      </div>
      <div id="right column">

        <div id="display-Advice">Advices based upon your BMI</div>
      </div>
      <p id="note">This app is just orientative please refer to a
        doctor if your result is below or above the normal BMI</p>
    </div >
  );
};



