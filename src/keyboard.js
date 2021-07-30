import './styles/keyboard.css';
import WhiteKey from './whiteKey';
import BlackKey from './blackKey';
const NOTES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const NATURAL_NOTES = NOTES.filter((note) => !note.includes('#'))
const SHARP_NOTES = NOTES.filter((note) => note.includes('#'))
const STARTING_OCTAVE = 3;

const Keyboard = ({ instrument }) => {
  const WHITE_KEY_AMOUNT = 15;
  const BLACK_KEY_AMOUNT = 10;

  return (
    <div id="keyboardMaster">
      <div id="keyboardDownSlope" />
      <div id="keyContainer">
        {Array(WHITE_KEY_AMOUNT).fill(0).map((_, idx) => {
          const note = NATURAL_NOTES[ idx >= NATURAL_NOTES.length ? idx % NATURAL_NOTES.length : idx ];
          const octave = STARTING_OCTAVE + Math.floor(idx / NATURAL_NOTES.length);

          return <WhiteKey key={`whiteKey${idx}`} note={note} octave={octave} instrument={instrument} />
        })}
      </div>
      {
        Array(BLACK_KEY_AMOUNT).fill(0).map((_, idx) => {
          const note = SHARP_NOTES[ idx >= SHARP_NOTES.length ? idx % SHARP_NOTES.length : idx ];
          const octave = STARTING_OCTAVE + Math.floor(idx / SHARP_NOTES.length);

          return <div id={`BK${idx + 1}`} key={`BK${idx + 1}`}>
            <BlackKey note={note} octave={octave} instrument={instrument} />
          </div>
        })
      }
    </div>
  );
};

export default Keyboard;
