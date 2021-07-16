import './styles/fader.css';

const Fader = (props) => {
  let faderLineArr = [];
  for (let i = 0; i < 11; i++) {
    faderLineArr.push(1);
  }
  const bigLines = [1, 6, 11];

  const position = props.position || 0;

  return (
    <div className="faderMaster">
      <div className="faderLineBox">
        {faderLineArr.map((line, idx) => {
          if (bigLines.includes(idx + 1)) {
            return <div className="faderLineBig" />;
          } else {
            return <div className="faderLineSmall" />;
          }
        })}
      </div>
      <div className="faderTrack">
        <div className="faderTrackSplit" />
        <div
          className="faderNub"
          style={{ transform: `translateY(${position}rem)` }}
        >
          <div className="faderNubTop">
            <div className="faderNubTopLine" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fader;
