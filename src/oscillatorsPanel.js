import { useState } from 'react';
import './styles/oscillatorsPanel.css';
import Knob from './knob';
import KnobBorder from './knobBorder';
import Bulb from './bulb';
import SwitchAB from './switchAB';
import SwitchABC from './switchABC';

const Oscillators = (props) => {
  const [rangeSelection, setRangeSelection] = useState(2);
  const [waveformSelection, setwaveformSelection] = useState(3);
  const [subOscOctave, setSubOscOctave] = useState(1);
  const [subOscWave, setSubOscWave] = useState(3);

  return (
    <div className="absolute">
      <div id="coarseK" className="knobDiv">
        <KnobBorder highNoon={true} />
        <Knob />
        <p id="coarseKL" className="knobLabel">
          Coarse
        </p>
      </div>
      <div id="fineK" className="knobDiv">
        <KnobBorder highNoon={true} />
        <Knob />
        <p id="fineKL" className="knobLabel">
          Fine
        </p>
      </div>
      <div id="MEDK" className="knobDiv">
        <KnobBorder highNoon={true} />
        <Knob />
        <p id="MEDKL" className="knobLabel">
          Mod Env depth
        </p>
      </div>
      <div id="LFO1K" className="knobDiv">
        <KnobBorder highNoon={true} />
        <Knob />
        <p id="LFO1KL" className="knobLabel">
          LFO 1 depth
        </p>
      </div>
      <div id="pulseWidthK" className="knobDiv">
        <KnobBorder highNoon={true} />
        <Knob />
        <p id="pulseWidthKL" className="knobLabel">
          Pulse Width
        </p>
      </div>
      <div id="picthBox" />
      <div id="pitchBoxBlock" />
      <p id="pitch1L" className="subLabelLarge">
        Pitch
      </p>
      <div id="coarse16Bulb">
        <Bulb on={rangeSelection === 1} />
      </div>
      <div id="coarse8Bulb">
        <Bulb on={rangeSelection === 2} />
      </div>
      <div id="coarse4Bulb">
        <Bulb on={rangeSelection === 3} />
      </div>
      <div id="coarse2Bulb">
        <Bulb on={rangeSelection === 4} />
      </div>
      <p id="coarse16L" className="subLabelSmall">
        16'
      </p>
      <p id="coarse8L" className="subLabelSmall">
        8'
      </p>
      <p id="coarse4L" className="subLabelSmall">
        4'
      </p>
      <p id="coarse2L" className="subLabelSmall">
        2'
      </p>
      <p id="rangeL" className="subLabelSmall">
        Range
      </p>
      <div
        id="rangeB"
        className="button"
        onClick={() => {
          if (rangeSelection < 4) {
            setRangeSelection(rangeSelection + 1);
          } else {
            setRangeSelection(1);
          }
        }}
      />
      <div id="fineSineBulb">
        <Bulb on={waveformSelection === 1} />
      </div>
      <div id="fineTriBulb">
        <Bulb on={waveformSelection === 2} />
      </div>
      <div id="fineSawBulb">
        <Bulb on={waveformSelection === 3} />
      </div>
      <div id="fineSquareBulb">
        <Bulb on={waveformSelection === 4} />
      </div>
      <p id="fineSineL" className="subLabelSmall">
        S
      </p>
      <p id="fineTriL" className="subLabelSmall">
        V
      </p>
      <p id="fineSawL1" className="subLabelSmall">
        I
      </p>
      <p id="fineSawL2" className="subLabelSmall">
        I
      </p>
      <div id="fineSquareL1" />
      <div id="fineSquareL2" />
      <div id="fineSquareL3" />
      <p id="waveformL" className="subLabelSmall">
        Waveform
      </p>
      <div
        id="waveformB"
        className="button"
        onClick={() => {
          if (waveformSelection < 4) {
            setwaveformSelection(waveformSelection + 1);
          } else {
            setwaveformSelection(1);
          }
        }}
      />
      <p id="oscSelectL1" className="subLabelLarge">
        1
      </p>
      <p id="oscSelectL2" className="subLabelLarge">
        2
      </p>
      <p id="oscSelectL3" className="subLabelLarge">
        Osc Select
      </p>
      <div id="oscSelectS">
        <SwitchAB />
      </div>
      <p id="sync12L" className="subLabelLarge">
        Sync 1 - 2
      </p>
      <div id="sync12Bulb">
        <Bulb on={false} />
      </div>
      <p id="pulseWidthL1" className="subLabelLarge">
        Mod Env
      </p>
      <p id="pulseWidthL2" className="subLabelLarge">
        Manual
      </p>
      <div id="pulseWidthLineSplit" />
      <p id="pulseWidthL3" className="subLabelLarge">
        LFO 2
      </p>
      <div id="pulseWidthS">
        <SwitchABC />
      </div>
      <p id="sync12OnL" className="subLabelLarge">
        On
      </p>
      <div id="subOscBar" />
      <div id="subOscVBar" className="VBarBreak" />
      <p id="subOscL" className="boldLabel2">
        Sub Osc
      </p>
      <div id="subOscOctaveS">
        <SwitchAB position={'A'} />
      </div>
      <div id="subOscWaveS">
        <SwitchABC position={'C'} />
      </div>
      <p id="subOscOctaveL" className="subLabelLarge">
        Octave
      </p>
      <div id="subOscOctave1B">
        <Bulb on={subOscOctave === 1} />
      </div>
      <div id="subOscOctave2B">
        <Bulb on={subOscOctave === 2} />
      </div>
      <div id="subOscWave1B">
        <Bulb on={subOscWave === 1} />
      </div>
      <div id="subOscWave2B">
        <Bulb on={subOscWave === 2} />
      </div>
      <div id="subOscWave3B">
        <Bulb on={subOscWave === 3} />
      </div>
      <p id="subOscOctave1L" className="subLabelSmall">
        - 1
      </p>
      <p id="subOscOctave2L" className="subLabelSmall">
        - 2
      </p>
      <p id="subOscSineL" className="subLabelSmall">
        S
      </p>
      <div id="subOscNarrow1L" />
      <div id="subOscNarrow2L" />
      <div id="subOscSquare1L" />
      <div id="subOscSquare2L" />
      <div />
    </div>
  );
};

export default Oscillators;
