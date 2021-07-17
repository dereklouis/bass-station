import './styles/oPM.css';
import Wheel from './wheel';

const OPM = () => {
  return (
    <div className="absolute">
      <div id="oPMTopLine" />
      <p id="oPMOctaveL" className="subLabelLarge">
        Octave
      </p>
      <div id="octaveDownB" className="button">
        <div id="octaveArrowDown" />
      </div>
      <div id="octaveUpB" className="button">
        <div id="octaveArrowUp" />
      </div>
      <div id="oPMBottomBracket" />
      <p id="oPMResetL" className="subLabelLarge">
        Reset
      </p>
      <div id="pitchWheel">
        <Wheel position={4.5} />
      </div>
      <div id="modWheel">
        <Wheel position={9} />
      </div>
      <p id="oPMPitchL" className="subLabelLarge">
        Pitch
      </p>
      <p id="oPMModL" className="subLabelLarge">
        Mod
      </p>
    </div>
  );
};

export default OPM;