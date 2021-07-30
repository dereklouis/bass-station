import './styles/whiteKey.css';

const WhiteKey = ({ note, instrument, octave }) => {
  const urlParams = new URLSearchParams(window.location.search);
  const shouldPlaySound = urlParams.get('playSound')
  const playNote = () => instrument.triggerAttackRelease(`${note}${octave}`, '8n');

  return <div className="whiteKey" onClick={shouldPlaySound && playNote} />;
};

export default WhiteKey;
