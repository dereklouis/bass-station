import { useState, useRef } from 'react';
import './App.css';
import './styles/firstQuarter.css';
import './styles/secondQuarter.css';
import './styles/lowerHalf.css';
import './fonts/digital-7.ttf';
import MasterBar from './masterBar';
import Patches from './patches';
import MasterPanel from './masterPanel';
import Oscillators from './oscillatorsPanel';
import Mixer from './mixer';
import Filters from './filters';
import Arpeggiator from './arpeggiator';
import Porta from './porta';
import Lfos from './lFOS';
import Envelopes from './envelopes';
import Effects from './effects';
import MidBar from './midBar';
import KeysTopper from './keysTopper';
import OPM from './oPM';
import Keyboard from './keyboard';

const patchesClone = { ...Patches };

function App() {
  const [patchNumber, setPatchNumber] = useState(0);
  const [patches, setPatches] = useState(patchesClone);

  return (
    <div id="appContainer">
      <div id="BSMaster">
        <div id="masterShadowLeft" />
        <MasterBar />
        <MasterPanel
          patches={patches}
          setPatches={setPatches}
          patchNumber={patchNumber}
          setPatchNumber={setPatchNumber}
        />
        <Oscillators patches={patches} patchNumber={patchNumber} />
        <Mixer patches={patches} patchNumber={patchNumber} />
        <Filters patches={patches} patchNumber={patchNumber} />
        <Arpeggiator patches={patches} patchNumber={patchNumber} />
        <Porta patches={patches} patchNumber={patchNumber} />
        <Lfos patches={patches} patchNumber={patchNumber} />
        <Envelopes patches={patches} patchNumber={patchNumber} />
        <Effects patches={patches} patchNumber={patchNumber} />
        <MidBar />
        <KeysTopper />
        <OPM />
        <Keyboard />
        <div id="masterShadowRight" />
      </div>
    </div>
  );
}

export default App;
