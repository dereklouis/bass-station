import { useState } from 'react';
import Knob from './knob';
import KnobBorder from './knobBorder';
import './styles/masterPanel.css';

const MasterPanel = (props) => {
  const [patchNumber, setPatchNumber] = useState(0);
  return (
    <div className="absolute">
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
        <div id="amountForwardArrowLight" className="amountArrowLightOff" />
      </div>
      <div id="volumeK" className="knobDiv">
        <KnobBorder highNoon={false} />
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
      <p id="valueL" className="subLabelSmall">
        Value
      </p>
    </div>
  );
};

export default MasterPanel;
