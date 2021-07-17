import './styles/switchABC.css';

const SwitchABC = (props) => {
  const key = {
    A: 'switchABCKnobPosA',
    B: 'switchABCKnobPosB',
    C: 'switchABCKnobPosC',
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
          if (props.position === 'A') {
            props.setPosition('B');
          } else if (props.position === 'B') {
            props.setPosition('C');
          }
        } else if (props.position === 'C') {
          props.setPosition('B');
        } else {
          props.setPosition('A');
        }
      } else {
        if (e.clientX > mouseStartingPos) {
          if (props.position === 'A') {
            props.setPosition('B');
          } else if (props.position === 'B') {
            props.setPosition('C');
          }
        } else if (props.position === 'C') {
          props.setPosition('B');
        } else {
          props.setPosition('A');
        }
      }
    }
    mouseStartingPos = null;
  };

  return (
    <div className="switchABCMaster">
      <div className="switchABCRounder">
        <div className="swtchABCTrack">
          <div
            className={`switchABCKnob ${key[props.position]}`}
            onMouseDown={switchMouseDown}
            onMouseLeave={switchMouseLeave}
          />
        </div>
      </div>
    </div>
  );
};

export default SwitchABC;
