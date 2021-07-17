import './styles/keysTopper.css';

const KeysTopper = () => {
  return (
    <div className="absolute">
      <div id="transposeB" className="button">
        <p id="transposeL" className="subLabelLarge">
          Transpose
        </p>
      </div>
      <div id="functionB" className="button">
        <p id="functionL" className="subLabelLarge">
          Function
        </p>
      </div>
      <p id="keysTopperExitL" className="subLabelLarge">
        Exit
      </p>
      <div id="fMWConnect" />
      <div id="keysTopperMainBracket" />
      <p id="kTMWL" className="boldLabel2">
        Mod Wheel
      </p>
      <div id="kTB1" className="keysTopperBlocker" />
      <p id="kTAL" className="boldLabel2">
        Aftertouch
      </p>
      <div id="kTB2" className="keysTopperBlocker" />
      <p id="kTLFOL" className="boldLabel2">
        LFO
      </p>
      <div id="kTB3" className="keysTopperBlocker" />
      <p id="kTOSCL" className="boldLabel2">
        Oscillator
      </p>
      <div id="kTB4" className="keysTopperBlocker" />
      <p id="kTVELL" className="boldLabel2">
        Velocity
      </p>
      <div id="kTB5" className="keysTopperBlocker" />
      <p id="kTVCAL" className="boldLabel2">
        VCA
      </p>
      <div id="kTB6" className="keysTopperBlocker" />
      <p id="kTARPL" className="boldLabel2">
        ARP
      </p>
      <div id="kTB7" className="keysTopperBlocker" />
      <p id="kTGlobalL" className="boldLabel2">
        Global
      </p>
    </div>
  );
};

export default KeysTopper;
