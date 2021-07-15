import './styles/knob.css';

let knobTicArr = [];

for (let i = 0; i < 18; i++) {
  knobTicArr.push(1);
}

const Knob = () => {
  return (
    <div className="knobMaster">
      {knobTicArr.map((tic, idx) => (
        <div
          className={`knobTics KnobTic${idx + 1}`}
          style={{ transform: `rotate(${idx * 20}deg)` }}
        >
          <div className="knobTic" />
        </div>
      ))}
      <div className="knobRise">
        <div className="knobWhite">
          <div className="knobTicWhite" />
        </div>
      </div>
    </div>
  );
};

export default Knob;
