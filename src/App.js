import './App.css';
import './firstQuarter.css';
import './secondQuarter.css';
import './lowerHalf.css';
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
      </div>
    </div>
  );
}

export default App;
