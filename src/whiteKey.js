import './styles/whiteKey.css';

const WhiteKey = ({ note, instrument, octave }) => {
  const playNote = () => instrument.triggerAttackRelease(`${note}${octave}`, '8n');

  return <div className="whiteKey" onClick={playNote} />;
};

export default WhiteKey;
