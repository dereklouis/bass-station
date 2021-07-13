import './styles/oscillatorsPanel.css';
import Knob from './knob';
import KnobBorder from './knobBorder';

const OscillatorsPanel = () => {
  return (
    <>
      <div id="coarseK">
        <KnobBorder />
        <Knob />
        <p id="coarseKL" className="knobLabel">
          Coarse
        </p>
      </div>
    </>
  );
};

export default OscillatorsPanel;
