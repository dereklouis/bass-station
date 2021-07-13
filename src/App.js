import { useState } from 'react';
import './App.css';
import './firstQuarter.css';
import './secondQuarter.css';
import './lowerHalf.css';
import './digital-7.ttf';
import Knob from './knob';
import KnobBorder from './knobBorder';

function App() {
  const [patchNumber, setPatchNumber] = useState(0);
  return (
    <div id="appContainer">
      <div id="BSMaster">
        <div id="masterBar">
          <p id="masterL" className="boldLabel">
            MASTER
          </p>
          <div id="masterLVBB1" className="VBarBreak" />
          <div id="masterLBB1" className="barBreak" />
          <p id="oscillatorsL" className="boldLabel">
            OSCILLATORS
          </p>
          <div id="masterLVBB2" className="VBarBreak" />
          <div id="masterLBB2" className="barBreak" />
          <p id="mixerL" className="boldLabel">
            MIXER
          </p>
          <div id="masterLVBB3" className="VBarBreak" />
          <div id="masterLBB3" className="barBreak" />
          <p id="filtersL" className="boldLabel">
            FILTERS
          </p>
        </div>
        <div id="screen">
          <div id="numberWindow">
            <p id="screenNumbersBack">888</p>
          </div>
          <div id="redPositioner1" className="redPositioner">
            <p id="screenNumber1" className="screenNumber">
              {Math.floor(patchNumber % 10)}
            </p>
          </div>
          <div id="redPositioner2" className="redPositioner">
            <p id="screenNumber2" className="screenNumber">
              {patchNumber >= 10 && Math.floor((patchNumber / 10) % 10)}
            </p>
          </div>
          <div id="redPositioner3" className="redPositioner">
            <p id="screenNumber3" className="screenNumber">
              {patchNumber >= 100 && Math.floor((patchNumber / 100) % 10)}
            </p>
          </div>
          <div id="amountBackArrow" />
          <div id="amountForwardArrow" />
          <div id="amountBackArrowLight" className="amountArrowLightOff" />
          <div id="amountForwardArrowLight" className="amountArrowLightOn" />
        </div>
        <div id="volumeK">
          <KnobBorder />
          <Knob />
          <p id="volumeKL" className="knobLabel">
            Volume
          </p>
        </div>
        <p id="novation">novation</p>
        <p id="BSII">BASS STATION II</p>
        <p id="analogue">Analogue Synthesizer</p>
        <div id="patchLine" />
        <div id="patchLineBlock" />
        <p id="patchL" className="buttonLabel">
          Patch
        </p>
        <div id="saveB" className="button">
          <p id="saveBL" className="buttonLabel">
            Save
          </p>
        </div>
        <div
          id="backB"
          className="button"
          onClick={() => {
            if (patchNumber > 0) {
              setPatchNumber(patchNumber - 1);
            }
          }}
        >
          <div id="backArrow" />
        </div>
        <div
          id="forwardB"
          className="button"
          onClick={() => {
            if (patchNumber < 127) {
              setPatchNumber(patchNumber + 1);
            }
          }}
        >
          <div id="nextArrow" />
        </div>
        <div id="valueLine" />
        <div id="valueLineBlock" />
        <p id="valueL">Value</p>
        <div id="middleBar" />
        {/* <div className="testH" />
        <div className="testV" /> */}
      </div>
    </div>
  );
}

export default App;
