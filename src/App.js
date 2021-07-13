import './App.css';
import './firstQuarter.css';
import './secondQuarter.css';
import './lowerHalf.css';
import './digital-7.ttf';
import Knob from './knob';
import KnobBorder from './knobBorder';

function App() {
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
        <div id="screen"></div>
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
        <div id="backB" className="button">
          <div id="backArrow" />
        </div>
        <div id="forwardB" className="button">
          <div id="nextArrow" />
        </div>
        <div id="valueLine" />
        <div id="valueLineBlock" />
        <p id="valueL">Value</p>
        <div id="middleBar" />
        {/* <div className="testH" />
        <div className="testV" /> */}
        <p id="screenNumbersBack">888</p>
        <p id="screenNumber">124</p>
      </div>
    </div>
  );
}

export default App;
