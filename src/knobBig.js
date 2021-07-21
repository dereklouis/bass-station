import knobSpin from './knobSpin';
import './styles/knobBig.css';

let knobBigTicArr = [];

for (let i = 0; i < 40; i++) {
  knobBigTicArr.push(1);
}

const KnobBig = (props) => {
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
      className="knobBigMaster"
      onMouseDown={activateKnobAdjust}
      style={{ transform: `rotate(${knobRotation}deg)` }}
    >
      <div
        className="knobBigMasterShadow"
        style={{ transform: `rotate(${shadowRotation}deg)` }}
      />
      {knobBigTicArr.map((tic, idx) => (
        <div
          className={`knobBigTics knobBigTic${idx + 1}`}
          style={{ transform: `rotate(${idx * 9}deg)` }}
        >
          <div className="knobBigTic" />
        </div>
      ))}
      <div className="knobBigRise">
        <div
          className="knobBigUpperShadow"
          style={{ transform: `rotate(${shadowRotation}deg)` }}
        />
        <div className="knobBigWhite">
          <div className="knobBigTicWhite" />
        </div>
      </div>
    </div>
  );
};

export default KnobBig;
