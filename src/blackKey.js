import { useRef } from 'react';
import './styles/blackKey.css';

const BlackKey = ({ note, instrument, octave }) => {
  const backKeyMasterInsetShadow = useRef(null);
  const blackKeyConnector = useRef(null);
  const blackKeyBottom = useRef(null);

  const keyDown = () => {
    backKeyMasterInsetShadow.current.className =
      'backKeyMasterInsetShadowActive';
    blackKeyConnector.current.className = 'blackKeyConnectorDown';
    blackKeyBottom.current.className = 'blackKeyBottomDown';
  };

  const keyUp = () => {
    backKeyMasterInsetShadow.current.className = 'backKeyMasterInsetShadow';
    blackKeyConnector.current.className = 'blackKeyConnectorUp';
    blackKeyBottom.current.className = 'blackKeyBottomUp';
  };

  const playNote = () => instrument.triggerAttackRelease(`${note}${octave}`, '8n');

  return (
    <div className="blackKeyMaster" onMouseDown={keyDown} onMouseUp={keyUp} onClick={playNote}>
      <div className="blackKey">
        <div className="blackKeyTopUp" />
        <div
          className="blackKeyBottomUp"
          style={{ transitionDuration: '1s' }}
          ref={blackKeyBottom}
        />
      </div>
      <div
        className="backKeyMasterInsetShadow"
        ref={backKeyMasterInsetShadow}
      />
      <div className="blackKeyConnectorUp" ref={blackKeyConnector} />
    </div>
  );
};

export default BlackKey;
