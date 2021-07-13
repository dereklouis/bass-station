import './styles/oscillatorsPanel.css';
import Knob from './knob';
import KnobBorder from './knobBorder';
import Bulb from './bulb';

const OscillatorsPanel = (props) => {
  const { setcoarseSelection, coarseSelection } = props;
  return (
    <>
      <div id="coarseK">
        <KnobBorder highNoon={true} />
        <Knob />
        <p id="coarseKL" className="knobLabel">
          Coarse
        </p>
      </div>
      <div id="fineK">
        <KnobBorder highNoon={true} />
        <Knob />
        <p id="fineKL" className="knobLabel">
          Fine
        </p>
      </div>
      <div id="MEDK">
        <KnobBorder highNoon={true} />
        <Knob />
        <p id="MEDKL" className="knobLabel">
          Mod Env depth
        </p>
      </div>
      <div id="LFO1K">
        <KnobBorder highNoon={true} />
        <Knob />
        <p id="LFO1KL" className="knobLabel">
          LFO 1 depth
        </p>
      </div>
      <div id="pulseWidthK">
        <KnobBorder highNoon={true} />
        <Knob />
        <p id="pulseWidthKL" className="knobLabel">
          Pulse Width
        </p>
      </div>
      <div id="picthBox" />
      <div id="picthBoxBlock" />
      <p id="pitch1L" className="subLabelLarge">
        Pitch
      </p>
      <div id="coarse16Bulb">
        <Bulb on={coarseSelection === 1} />
      </div>
      <div id="coarse8Bulb">
        <Bulb on={coarseSelection === 2} />
      </div>
      <div id="coarse4Bulb">
        <Bulb on={coarseSelection === 3} />
      </div>
      <div id="coarse2Bulb">
        <Bulb on={coarseSelection === 4} />
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
        id="coarseB"
        className="button"
        onClick={() => {
          if (coarseSelection < 4) {
            setcoarseSelection(coarseSelection + 1);
          } else {
            setcoarseSelection(1);
          }
        }}
      />
    </>
  );
};

export default OscillatorsPanel;
