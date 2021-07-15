import './styles/switchABC.css';

const SwitchABC = (props) => {
  const key = {
    A: 'switchABCKnobPosA',
    B: 'switchABCKnobPosB',
    C: 'switchABCKnobPosC',
  };
  return (
    <div className="switchABCMaster">
      <div className="switchABCRounder">
        <div className="swtchABCTrack">
          <div className={`switchABCKnob ${key[props.position]}`} />
        </div>
      </div>
    </div>
  );
};

export default SwitchABC;
