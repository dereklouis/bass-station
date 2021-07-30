import './styles/whiteKey.css';
import PropTypes from 'prop-types';

const WhiteKey = ({ note, instrument, octave }) => {
  const urlParams = new URLSearchParams(window.location.search);
  const shouldPlaySound = urlParams.get('playSound');
  const playNote = () =>
    instrument.triggerAttackRelease(`${note}${octave}`, '8n');

  return <div className="whiteKey" onClick={shouldPlaySound && playNote} />;
};

WhiteKey.propTypes = {
  /**
   * The note that will sound
   */
  note: PropTypes.string,
  /**
   * A ToneJS instrument instance
   *
   * @see @link https://tonejs.github.io/docs/14.7.77/Synth
   */
  instrument: PropTypes.object,
  /**
   * The octave of the note
   */
  octave: PropTypes.number,
};

export default WhiteKey;
