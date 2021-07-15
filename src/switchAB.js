import './styles/switchAB.css';

const SwitchAB = (props) => {
  const key = {
    A: 'switchABKnobPosA',
    B: 'switchABKnobPosB',
  };
  return (
    <div className="switchABMaster">
      <div className="switchABRounder">
        <div className="swtchABTrack">
          <div className={`switchABKnob ${key[props.position]}`} />
        </div>
      </div>
    </div>
  );
};

export default SwitchAB;
