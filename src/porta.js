import './styles/porta.css';
import Knob from './knob';
import KnobBorder from './knobBorder';

const Porta = () => {
  return (
    <div className="absolute">
      <div id="glideTimeK" className="knobDiv">
        <KnobBorder highNoon={false} />
        <Knob />
        <p id="glideTimeKL" className="knobLabel">
          Glide Time
        </p>
      </div>
    </div>
  );
};

export default Porta;
