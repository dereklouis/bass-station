import './styles/knobBig.css';

let knobBigTicArr = [];

for (let i = 0; i < 40; i++) {
  knobBigTicArr.push(1);
}

const KnobBig = () => {
  return (
    <div className="knobBigMaster">
      {knobBigTicArr.map((tic, idx) => (
        <div
          className={`knobBigTics knobBigTic${idx + 1}`}
          style={{ transform: `rotate(${idx * 9}deg)` }}
        >
          <div className="knobBigTic" />
        </div>
      ))}
      <div className="knobBigRise">
        <div className="knobBigWhite">
          <div className="knobBigTicWhite" />
        </div>
      </div>
    </div>
  );
};

export default KnobBig;
