import './styles/effects.css';
import Knob from './knob';
import KnobBorder from './knobBorder';

const Effects = () => {
  return (
    <div className="absolute">
      <div id="distortionK" className="knobDiv">
        <KnobBorder highNoon={false} />
        <Knob />
        <p id="distortionKL" className="knobLabel">
          Distortion
        </p>
      </div>
      <div id="oFMK" className="knobDiv">
        <KnobBorder highNoon={false} />
        <Knob />
        <p id="oFMKL" className="knobLabel">
          Osc Filter Mod
        </p>
      </div>
    </div>
  );
};

export default Effects;
