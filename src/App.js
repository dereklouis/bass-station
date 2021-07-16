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
import Arpeggiator from './arpeggiator';

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
        <div id="mainBarBottom" />
        <MasterPanel />
        <OscillatorsPanel />
        <Mixer />
        <Filters />
        <Arpeggiator />
        <div id="midBar">
          <p id="arpeggiatorL" className="boldLabel">
            ARPEGGIATOR
          </p>
          <div id="midLVBB1" className="VBarBreak" />
          <div id="midLBB1" className="barBreak" />
          <p id="portaL" className="boldLabel">
            PORTA
          </p>
          <div id="midLVBB2" className="VBarBreak" />
          <div id="midLBB2" className="barBreak" />
          <p id="lfosL" className="boldLabel">
            LFOS
          </p>
          <div id="midLVBB3" className="VBarBreak" />
          <div id="midLBB3" className="barBreak" />
          <p id="envelopesL" className="boldLabel">
            ENVELOPES
          </p>
          <div id="midLVBB4" className="VBarBreak" />
          <div id="midLBB4" className="barBreak" />
          <p id="effectsL" className="boldLabel">
            EFFECTS
          </p>
        </div>
        {/* <div className="testH" />
        <div className="testV" /> */}
      </div>
    </div>
  );
}

export default App;
