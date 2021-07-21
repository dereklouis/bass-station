import knobSpin from './knobSpin';
import './styles/knob.css';

let knobTicArr = [];

for (let i = 0; i < 18; i++) {
  knobTicArr.push(1);
}

const Knob = (props) => {
  knobSpin(props.rotation, props.setRotation);

  let knobRotation = props.rotation;
  let shadowRotation = 0;
  if (knobRotation > 0) {
    shadowRotation = -Math.abs(knobRotation);
  } else {
    shadowRotation = Math.abs(knobRotation);
  }

  const activateKnobAdjust = (e) => {
    e.preventDefault();
    knobSpin(e, props.rotation, props.setRotation);
  };

  return (
    <div
      className="knobMaster"
      onMouseDown={activateKnobAdjust}
      style={{ transform: `rotate(${knobRotation}deg)` }}
    >
      <div
        className="knobMasterShadow"
        style={{ transform: `rotate(${shadowRotation}deg)` }}
      />
      {knobTicArr.map((tic, idx) => (
        <div
          className={`knobTics KnobTic${idx + 1}`}
          style={{ transform: `rotate(${idx * 20}deg)` }}
        >
          <div className="knobTic" />
        </div>
      ))}
      <div className="knobRise">
        <div
          className="knobUpperShadow"
          style={{ transform: `rotate(${shadowRotation}deg)` }}
        />
        <div className="knobWhite">
          <div className="knobTicWhite" />
        </div>
      </div>
    </div>
  );
};

export default Knob;
