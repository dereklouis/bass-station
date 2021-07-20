import { useState } from 'react';
import './styles/porta.css';
import Knob from './knob';
import KnobBorder from './knobBorder';

const Porta = () => {
  const [glideTimeKnob, setGlideTimeKnob] = useState(0);
  return (
    <div className="absolute">
      <div id="glideTimeK" className="knobDiv">
        <KnobBorder highNoon={false} />
        <Knob rotation={glideTimeKnob} setRotation={setGlideTimeKnob} />
        <p id="glideTimeKL" className="knobLabel">
          Glide Time
        </p>
      </div>
    </div>
  );
};

export default Porta;
