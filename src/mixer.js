import './styles/mixer.css';
import Knob from './knob';
import KnobBorder from './knobBorder';
import SwitchABC from './switchABC';

const Mixer = () => {
  return (
    <div className="absolute">
      <div id="mixerOsc1K" className="knobDiv">
        <KnobBorder highNoon={false} />
        <Knob />
        <p id="mixerOsc1KL" className="knobLabel">
          Osc 1
        </p>
      </div>
      <div id="mixerOsc2K" className="knobDiv">
        <KnobBorder highNoon={false} />
        <Knob />
        <p id="mixerOsc2KL" className="knobLabel">
          Osc 2
        </p>
      </div>
      <div id="mixerSubK" className="knobDiv">
        <KnobBorder highNoon={false} />
        <Knob />
        <p id="mixerSubKL" className="knobLabel">
          Sub Osc
        </p>
      </div>
      <div id="mixerUtilityK" className="knobDiv">
        <KnobBorder highNoon={false} />
        <Knob />
      </div>
      <div id="mixerUtilityBox" />
      <p id="mixerExtL" className="subLabelLarge">
        Ext
      </p>
      <p id="mixerRingL" className="subLabelLarge">
        Ring
      </p>
      <p id="mixerNoiseL" className="subLabelLarge">
        Noise
      </p>
      <div id="mixerUtilityS">
        <SwitchABC position={'A'} />
      </div>
    </div>
  );
};

export default Mixer;
