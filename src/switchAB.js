import './styles/switchAB.css';

const SwitchAB = (props) => {
  const key = {
    A: 'switchABKnobPosA',
    B: 'switchABKnobPosB',
  };

  let mouseStartingPos = null;

  const switchMouseDown = (e) => {
    e.preventDefault();
    if (props.orientation === 'Vertical') {
      mouseStartingPos = e.clientY;
    } else {
      mouseStartingPos = e.clientX;
    }
  };

  const switchMouseLeave = (e) => {
    e.preventDefault();
    if (mouseStartingPos !== null) {
      if (props.orientation === 'Vertical') {
        if (e.clientY > mouseStartingPos) {
          props.setPosition('B');
        } else {
          props.setPosition('A');
        }
      } else {
        if (e.clientX > mouseStartingPos) {
          props.setPosition('B');
        } else {
          props.setPosition('A');
        }
      }
    }
    mouseStartingPos = null;
  };

  return (
    <div className="switchABMaster">
      <div className="switchABRounder">
        <div className="swtchABTrack">
          <div
            className={`switchABKnob ${key[props.position]}`}
            onMouseDown={switchMouseDown}
            onMouseLeave={switchMouseLeave}
          />
        </div>
      </div>
    </div>
  );
};

export default SwitchAB;
