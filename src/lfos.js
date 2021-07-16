import { useState } from 'react';
import './styles/lfos.css';
import Knob from './knob';
import KnobBorder from './knobBorder';
import Bulb from './bulb';
import SwitchAB from './switchAB';

const Lfos = () => {
  const [lfo1Wave, setLfo1Wave] = useState(1);
  const [lfo2Wave, setLfo2Wave] = useState(1);
  return (
    <div className="absolute">
      <div
        id="lfosLeftB"
        className="button"
        onClick={() => {
          if (lfo1Wave < 4) {
            setLfo1Wave(lfo1Wave + 1);
          } else {
            setLfo1Wave(1);
          }
        }}
      />
      <div id="lfosLeftBulb1">
        <Bulb blinkClass={lfo1Wave === 1 && 'lfosLeftBlink'} />
      </div>
      <div id="lfosLeftBulb2">
        <Bulb blinkClass={lfo1Wave === 2 && 'lfosLeftBlink'} />
      </div>
      <div id="lfosLeftBulb3">
        <Bulb blinkClass={lfo1Wave === 3 && 'lfosLeftBlink'} />
      </div>
      <div id="lfosLeftBulb4">
        <Bulb blinkClass={lfo1Wave === 4 && 'lfosLeftBlink'} />
      </div>
      <p id="lfosLeftTriL" className="subLabelSmall">
        V
      </p>
      <p id="lfosLeftSawL1" className="subLabelSmall">
        I
      </p>
      <p id="lfosLeftSawL2" className="subLabelSmall">
        I
      </p>
      <div id="lfosLeftSquareL1" />
      <div id="lfosLeftSquareL2" />
      <p id="lfosLeftSAndHL" className="subLabelSmall">
        S+H
      </p>
      <div id="lfosLFO1K" className="knobDiv">
        <KnobBorder highNoon={false} />
        <Knob />
      </div>
      <div id="speedDelayS">
        <SwitchAB position={'B'} />
      </div>
      <div id="lfosLFO2K" className="knobDiv">
        <KnobBorder highNoon={false} />
        <Knob />
      </div>
      <p id="lfosRightTriL" className="subLabelSmall">
        V
      </p>
      <p id="lfosRightSawL1" className="subLabelSmall">
        I
      </p>
      <p id="lfosRightSawL2" className="subLabelSmall">
        I
      </p>
      <div id="lfosRightSquareL1" />
      <div id="lfosRightSquareL2" />
      <p id="lfosRightSAndHL" className="subLabelSmall">
        S+H
      </p>
      <div id="lfosRightBulb1">
        <Bulb blinkClass={lfo2Wave === 1 && 'lfosRightBlink'} />
      </div>
      <div id="lfosRightBulb2">
        <Bulb blinkClass={lfo2Wave === 2 && 'lfosRightBlink'} />
      </div>
      <div id="lfosRightBulb3">
        <Bulb blinkClass={lfo2Wave === 3 && 'lfosRightBlink'} />
      </div>
      <div id="lfosRightBulb4">
        <Bulb blinkClass={lfo2Wave === 4 && 'lfosRightBlink'} />
      </div>
      <div
        id="lfosRightB"
        className="button"
        onClick={() => {
          if (lfo2Wave < 4) {
            setLfo2Wave(lfo2Wave + 1);
          } else {
            setLfo2Wave(1);
          }
        }}
      />
      <div id="lfosLeftBracket" />
      <div id="lfosRightBracket" />
      <p id="lfosDelayL" className="subLabelLarge">
        Delay
      </p>
      <p id="lfosSpeedL" className="subLabelLarge">
        Speed
      </p>
      <p id="lfosLFO1L" className="subLabelLarge">
        LFO 1
      </p>
      <p id="lfosLFO2L" className="subLabelLarge">
        LFO 2
      </p>
    </div>
  );
};

export default Lfos;
