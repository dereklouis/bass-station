import { useState } from 'react';
import './styles/arpeggiator.css';
import Knob from './knob';
import KnobBorder from './knobBorder';
import Bulb from './bulb';

const Arpeggiator = () => {
  const [legatoStatus, setLegatoStatus] = useState(false);
  const [latchStatus, setLatchStatus] = useState(false);
  return (
    <div className="absolute">
      <div id="tempoK" className="knobDiv">
        <KnobBorder highNoon={false} />
        <Knob />
        <p id="tempoKL" className="knobLabel">
          Tempo
        </p>
      </div>
      <p id="arp40L" className="subLabelLarge">
        40
      </p>
      <p id="arp240L" className="subLabelLarge">
        240
      </p>
      <div id="arpTempoBulb">
        <Bulb blinkClass={'tempoBlink'} />
      </div>
      <div id="arpLegatoBulb">
        <Bulb on={legatoStatus} />
      </div>
      <div
        id="arpOnB"
        className="button"
        onClick={() => {
          setLegatoStatus(!legatoStatus);
        }}
      >
        <p id="arpOnL">On</p>
      </div>
      <p id="arpLegatoL" className="whiteBoxL">
        Legato
      </p>
      <div
        id="arpLatchB"
        className="button"
        onClick={() => {
          setLatchStatus(!latchStatus);
        }}
      >
        <p id="arpLatchL">Latch</p>
      </div>
      <p id="arpRestL" className="whiteBoxL">
        Rest
      </p>
      <div id="arpLatchBulb">
        <Bulb on={latchStatus} />
      </div>
      <div id="rhythmK" className="knobDiv">
        <KnobBorder highNoon={false} />
        <Knob />
        <p id="rhythmKL" className="knobLabel">
          Rhythm
        </p>
      </div>
      <p id="arp1L" className="subLabelLarge">
        1
      </p>
      <p id="arp32L" className="subLabelLarge">
        32
      </p>
      <div id="rhythm2K" className="knobDiv">
        <KnobBorder highNoon={false} remove={[5, 6, 7, 8]} />
        <Knob />
      </div>
      <p id="arpUpL" className="subLabelLarge">
        Up
      </p>
      <p id="arpDnL" className="subLabelLarge">
        Dn
      </p>
      <p id="arpUpDn1L" className="subLabelLarge">
        UpDn 1
      </p>
      <p id="arpUpDn2L" className="subLabelLarge">
        UpDn 2
      </p>
      <p id="arpPlayedL" className="subLabelLarge">
        Played
      </p>
      <p id="arpRandomL" className="subLabelLarge">
        Random
      </p>
      <p id="arpPlayL" className="whiteBoxL">
        Play
      </p>
      <p id="arpRecordL" className="whiteBoxL">
        Record
      </p>
      <div id="arpOctavesK" className="knobDiv">
        <KnobBorder highNoon={false} remove={[1, 2, 3, 4, 5, 6, 7, 8]} />
        <Knob />
      </div>
      <p id="AO1L" className="subLabelLarge">
        1
      </p>
      <p id="AO2L" className="subLabelLarge">
        2
      </p>
      <p id="AO3L" className="subLabelLarge">
        3
      </p>
      <p id="AO4L" className="subLabelLarge">
        4
      </p>
      <p id="arpArpL" className="subLabelLarge">
        Arp
      </p>
      <p id="arpOctavesL" className="subLabelLarge">
        Octaves
      </p>
      <p id="arpSeqL" className="whiteBoxL">
        Seq
      </p>
    </div>
  );
};

export default Arpeggiator;