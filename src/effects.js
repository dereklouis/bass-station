import { useState, useEffect } from 'react';
import './styles/effects.css';
import Knob from './knob';
import KnobBorder from './knobBorder';

const Effects = (props) => {
  const { patch } = props;
  const [distortionKnob, setDistortionKnob] = useState(patch.distortionK);
  const [oFMKnob, setOFMKnob] = useState(patch.oFMK);

  useEffect(() => {
    setDistortionKnob(patch.distortionK);
    setOFMKnob(patch.oFMK);
  }, [patch]);

  return (
    <div className="absolute">
      <div id="distortionK" className="knobDiv">
        <KnobBorder highNoon={false} />
        <Knob rotation={distortionKnob} setRotation={setDistortionKnob} />
        <p id="distortionKL" className="knobLabel">
          Distortion
        </p>
      </div>
      <div id="oFMK" className="knobDiv">
        <KnobBorder highNoon={false} />
        <Knob rotation={oFMKnob} setRotation={setOFMKnob} />
        <p id="oFMKL" className="knobLabel">
          Osc Filter Mod
        </p>
      </div>
    </div>
  );
};

export default Effects;
