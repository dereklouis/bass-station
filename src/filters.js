import './styles/filters.css';
import Knob from './knob';
import KnobBorder from './knobBorder';
import SwitchAB from './switchAB';
import SwitchABC from './switchABC';

const Filters = () => {
  return (
    <div className="absolute">
      <div id="filtersTypeS">
        <SwitchAB position={'A'} />
      </div>
      <div id="filtersSlopeS">
        <SwitchAB position={'B'} />
      </div>
      <div id="filtersShapeS">
        <SwitchABC position={'A'} />
      </div>
    </div>
  );
};

export default Filters;
