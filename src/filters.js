import { useState, useEffect } from 'react';
import './styles/filters.css';
import Knob from './knob';
import KnobBig from './knobBig';
import KnobBorder from './knobBorder';
import KnobBigBorder from './knobBigBorder';
import Bulb from './bulb';
import SwitchAB from './switchAB';
import SwitchABC from './switchABC';

const Filters = (props) => {
  const { patch } = props;
  const [filtersTypeS, setFiltersTypeS] = useState(patch.filtersTypeS);
  const [overdriveKnob, setOverdriveKnob] = useState(patch.overdriveK);
  const [resonanceKnob, setResonanceKnob] = useState(patch.resonanceK);
  const [filtersSlopeS, setFiltersSlopeS] = useState(patch.filtersSlopeS);
  const [frequencyKnob, setFrequencyKnob] = useState(patch.frequencyK);
  const [filtersShapeS, setFiltersShapeS] = useState(patch.filtersShapeS);
  const [filterMEDKnob, setFilterMEDKnob] = useState(patch.filtersMEDK);
  const [filterLFOKnob, setFilterLFOKnob] = useState(patch.filtersLFO2K);

  useEffect(() => {
    setFiltersTypeS(patch.filtersTypeS);
    setOverdriveKnob(patch.overdriveK);
    setResonanceKnob(patch.resonanceK);
    setFiltersSlopeS(patch.filtersSlopeS);
    setFrequencyKnob(patch.frequencyK);
    setFiltersShapeS(patch.filtersShapeS);
    setFilterMEDKnob(patch.filtersMEDK);
    setFilterLFOKnob(patch.filtersLFO2K);
  }, [patch]);

  return (
    <div className="absolute">
      <div id="filtersTypeS">
        <SwitchAB
          orientation={'Horizontal'}
          position={filtersTypeS}
          setPosition={setFiltersTypeS}
        />
      </div>
      <p id="filtersTypeL" className="subLabelLarge">
        Type
      </p>
      <div id="filtersType1Bulb">
        <Bulb on={filtersTypeS === 'A'} />
      </div>
      <p id="filtersClassicL" className="subLabelXSmall">
        Classic
      </p>
      <div id="filtersType2Bulb">
        <Bulb on={filtersTypeS === 'B'} />
      </div>
      <p id="filtersAcidL" className="subLabelXSmall">
        Acid
      </p>
      <div id="filtersSlopeS">
        <SwitchAB
          orientation={'Horizontal'}
          position={filtersSlopeS}
          setPosition={setFiltersSlopeS}
        />
      </div>
      <p id="filtersSlopeL" className="subLabelLarge">
        Slope
      </p>
      <div id="filtersSlope1Bulb">
        <Bulb on={filtersSlopeS === 'A'} />
      </div>
      <p id="filters12DBL" className="subLabelXSmall">
        12dB
      </p>
      <div id="filtersSlope2Bulb">
        <Bulb on={filtersSlopeS === 'B'} />
      </div>
      <p id="filters24DBL" className="subLabelXSmall">
        24dB
      </p>
      <div id="filtersShapeS">
        <SwitchABC
          orientation={'Horizontal'}
          position={filtersShapeS}
          setPosition={setFiltersShapeS}
        />
      </div>
      <p id="filtersShapeL" className="subLabelLarge">
        Shape
      </p>
      <div id="filtersShape1Bulb">
        <Bulb on={filtersShapeS === 'A'} />
      </div>
      <div id="filtersShape2Bulb">
        <Bulb on={filtersShapeS === 'B'} />
      </div>
      <div id="filtersShape3Bulb">
        <Bulb on={filtersShapeS === 'C'} />
      </div>
      <p id="filtersLPL" className="subLabelLarge">
        LP
      </p>
      <p id="filtersBPL" className="subLabelLarge">
        BP
      </p>
      <p id="filtersHPL" className="subLabelLarge">
        HP
      </p>
      <div id="filtersBulbsArm1" />
      <div id="filtersBulbsArm2" />
      <div id="filtersBulbsArm3" />
      <div id="filtersBulbsArm4" />
      <div id="overdriveK" className="knobDiv">
        <KnobBorder highNoon={false} />
        <Knob rotation={overdriveKnob} setRotation={setOverdriveKnob} />
        <p id="overdriveKL" className="knobLabel">
          Overdrive
        </p>
      </div>
      <div id="resonanceK" className="knobDiv">
        <KnobBorder highNoon={false} />
        <Knob rotation={resonanceKnob} setRotation={setResonanceKnob} />
        <p id="resonanceKL" className="knobLabel">
          Resonance
        </p>
      </div>
      <div id="filtersMEDK" className="knobDiv">
        <KnobBorder highNoon={true} />
        <Knob rotation={filterMEDKnob} setRotation={setFilterMEDKnob} />
        <p id="filtersMEDKL" className="knobLabel">
          Mod Env depth
        </p>
      </div>
      <div id="filtersLFO2K" className="knobDiv">
        <KnobBorder highNoon={true} />
        <Knob rotation={filterLFOKnob} setRotation={setFilterLFOKnob} />
        <p id="filtersLFO2KL" className="knobLabel">
          LFO 2 depth
        </p>
      </div>
      <div id="filtersBracketLeft" />
      <div id="filtersBracketRight" />
      <div id="filtersLineOne" />
      <div id="filtersLineTwo" />
      <div id="frequencyK" className="knobDiv">
        <KnobBigBorder />
        <KnobBig rotation={frequencyKnob} setRotation={setFrequencyKnob} />
        <p id="filtersFrequencyKL" className="knobLabel">
          Frequency
        </p>
      </div>
    </div>
  );
};

export default Filters;
