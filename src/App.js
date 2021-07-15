import { useState } from 'react';
import './App.css';
import './styles/firstQuarter.css';
import './styles/secondQuarter.css';
import './styles/lowerHalf.css';
import './fonts/digital-7.ttf';
import MasterPanel from './masterPanel';
import OscillatorsPanel from './oscillatorsPanel';
import Mixer from './mixer';
import Filters from './filters';

function App() {
  const [patchNumber, setPatchNumber] = useState(0);
  const [rangeSelection, setRangeSelection] = useState(1);
  const [waveformSelection, setwaveformSelection] = useState(1);
  const [subOscOctave, setSubOscOctave] = useState(1);
  const [subOscWave, setSubOscWave] = useState(3);
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
        <div id="middleBar" />
        <MasterPanel
          patchNumber={patchNumber}
          setPatchNumber={setPatchNumber}
        />
        <OscillatorsPanel
          rangeSelection={rangeSelection}
          setRangeSelection={setRangeSelection}
          waveformSelection={waveformSelection}
          setwaveformSelection={setwaveformSelection}
          setSubOscOctave={setSubOscOctave}
          subOscOctave={subOscOctave}
          setSubOscWave={setSubOscWave}
          subOscWave={subOscWave}
        />
        <Mixer />
        <Filters />
        {/* <div className="testH" />
        <div className="testV" /> */}
      </div>
    </div>
  );
}

export default App;
