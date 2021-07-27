import { useState, useEffect } from 'react';
import './styles/envelopes.css';
import SwitchABC from './switchABC';
import Fader from './fader';
import Bulb from './bulb';

const Envelopes = (props) => {
  const { patches, patchNumber, stagingPatch } = props;
  const [eSS, setESS] = useState(patches[patchNumber].envSelectS);
  const [attackFader, setAttackFader] = useState(patches[patchNumber].fader1);
  const [decayFader, setDecayFader] = useState(patches[patchNumber].fader2);
  const [sustainFader, setSustainFader] = useState(patches[patchNumber].fader3);
  const [releaseFader, setReleaseFader] = useState(patches[patchNumber].fader4);
  const [triggeringS, setTriggeringS] = useState(
    patches[patchNumber].triggeringS
  );

  useEffect(() => {
    setESS(patches[patchNumber].envSelectS);
    setAttackFader(patches[patchNumber].fader1);
    setDecayFader(patches[patchNumber].fader2);
    setSustainFader(patches[patchNumber].fader3);
    setReleaseFader(patches[patchNumber].fader4);
    setTriggeringS(patches[patchNumber].triggeringS);
  }, [patches, patchNumber]);

  return (
    <div className="absolute">
      <div id="envSelectS">
        <SwitchABC
          orientation={'Vertical'}
          position={eSS}
          setPosition={setESS}
          setting={'envSelectS'}
          stagingPatch={stagingPatch}
        />
      </div>
      <p id="envSelectL" className="subLabelLarge">
        Env Select
      </p>
      <p id="envSelectL1" className="subLabelLarge">
        Amp Env
      </p>
      <p id="envSelectL2" className="subLabelLarge">
        Mod Env
      </p>
      <p id="envSelectL3" className="subLabelLarge">
        Amp+Mod Env
      </p>
      <div id="fader1">
        <Fader position={attackFader} setPosition={setAttackFader} />
      </div>
      <div id="envelopesLeftLine" />
      <p id="attackL" className="subLabelLarge">
        Attack
      </p>
      <div id="fader2">
        <Fader position={decayFader} setPosition={setDecayFader} />
      </div>
      <p id="decayL" className="subLabelLarge">
        Decay
      </p>
      <div id="fader3">
        <Fader position={sustainFader} setPosition={setSustainFader} />
      </div>
      <p id="sustainL" className="subLabelLarge">
        Sustain
      </p>
      <div id="fader4">
        <Fader position={releaseFader} setPosition={setReleaseFader} />
      </div>
      <p id="releaseL" className="subLabelLarge">
        Release
      </p>
      <div id="triggeringS">
        <SwitchABC
          orientation={'Vertical'}
          position={triggeringS}
          setPosition={setTriggeringS}
          setting={'triggeringS'}
          stagingPatch={stagingPatch}
        />
      </div>
      <p id="triggeringL" className="subLabelLarge">
        Triggering
      </p>
      <div id="triggeringBulb1">
        <Bulb on={triggeringS === 'A'} />
      </div>
      <div id="triggeringBulb2">
        <Bulb on={triggeringS === 'B'} />
      </div>
      <div id="triggeringBulb3">
        <Bulb on={triggeringS === 'C'} />
      </div>
      <p id="triggeringBulbL1" className="subLabelLarge">
        Autoglide
      </p>
      <p id="triggeringBulbL2" className="subLabelLarge">
        Single
      </p>
      <p id="triggeringBulbL3" className="subLabelLarge">
        Multi
      </p>
    </div>
  );
};

export default Envelopes;
