import { useState, useEffect } from 'react';
import './styles/mixer.css';
import Knob from './knob';
import KnobBorder from './knobBorder';
import SwitchABC from './switchABC';

const Mixer = (props) => {
  const { patch } = props;
  const [oSC1Knob, setOSC1Knob] = useState(patch.mixerOsc1K);
  const [oSC2Knob, setOSC2Knob] = useState(patch.mixerOsc2K);
  const [eRNS, setERNS] = useState(patch.mixerUtilityS);
  const [subOscKnob, setSubOscKnob] = useState(patch.mixerSubK);
  const [eRNKnob, setERNKnob] = useState(patch.mixerUtilityK);

  useEffect(() => {
    setOSC1Knob(patch.mixerOsc1K);
    setOSC2Knob(patch.mixerOsc2K);
    setERNS(patch.mixerUtilityS);
    setSubOscKnob(patch.mixerSubK);
    setERNKnob(patch.mixerUtilityK);
  }, [patch]);

  return (
    <div className="absolute">
      <div id="mixerOsc1K" className="knobDiv">
        <KnobBorder highNoon={false} />
        <Knob rotation={oSC1Knob} setRotation={setOSC1Knob} />
        <p id="mixerOsc1KL" className="knobLabel">
          Osc 1
        </p>
      </div>
      <div id="mixerOsc2K" className="knobDiv">
        <KnobBorder highNoon={false} />
        <Knob rotation={oSC2Knob} setRotation={setOSC2Knob} />
        <p id="mixerOsc2KL" className="knobLabel">
          Osc 2
        </p>
      </div>
      <div id="mixerSubK" className="knobDiv">
        <KnobBorder highNoon={false} />
        <Knob rotation={subOscKnob} setRotation={setSubOscKnob} />
        <p id="mixerSubKL" className="knobLabel">
          Sub Osc
        </p>
      </div>
      <div id="mixerUtilityK" className="knobDiv">
        <KnobBorder highNoon={false} />
        <Knob rotation={eRNKnob} setRotation={setERNKnob} />
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
        <SwitchABC
          orientation={'Vertical'}
          position={eRNS}
          setPosition={setERNS}
        />
      </div>
    </div>
  );
};

export default Mixer;
