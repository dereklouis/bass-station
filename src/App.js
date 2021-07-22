import { useState } from 'react';
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

function App() {
  const [patchNumber, setPatchNumber] = useState(0);
  const patch = Patches[patchNumber] ? Patches[patchNumber] : Patches[0];
  return (
    <div id="appContainer">
      <div id="BSMaster">
        <div id="masterShadowLeft" />
        <MasterBar />
        <MasterPanel
          patchNumber={patchNumber}
          setPatchNumber={setPatchNumber}
          patch={patch}
        />
        <Oscillators patch={patch} />
        <Mixer patch={patch} />
        <Filters patch={patch} />
        <Arpeggiator patch={patch} />
        <Porta patch={patch} />
        <Lfos patch={patch} />
        <Envelopes patch={patch} />
        <Effects patch={patch} />
        <MidBar />
        <KeysTopper />
        <OPM />
        <Keyboard />
        <div id="masterShadowRight" />
        {/* <div className="testH" />
        <div className="testV" /> */}
      </div>
    </div>
  );
}

export default App;
