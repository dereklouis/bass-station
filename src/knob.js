import './styles/knob.css';

const knobTicArr = [
  ['knobTic1', '0deg'],
  ['knobTic2', '20deg'],
  ['knobTic3', '40deg'],
  ['knobTic4', '60deg'],
  ['knobTic5', '80deg'],
  ['knobTic6', '100deg'],
  ['knobTic7', '120deg'],
  ['knobTic8', '140deg'],
  ['knobTic9', '160deg'],
  ['knobTic10', '180deg'],
  ['knobTic11', '200deg'],
  ['knobTic12', '220deg'],
  ['knobTic13', '240deg'],
  ['knobTic14', '260deg'],
  ['knobTic15', '280deg'],
  ['knobTic16', '300deg'],
  ['knobTic17', '320deg'],
  ['knobTic18', '340deg'],
];

const Knob = () => {
  return (
    <div className="knobMaster">
      {knobTicArr.map((tic) => (
        <div
          className={`knobTics ${tic[0]}`}
          style={{ transform: `rotate(${tic[1]})` }}
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
