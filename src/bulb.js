import './styles/bulb.css';

const Bulb = (props) => {
  const { on } = props;
  return (
    <div className="absolute">
      {props.blinkClass ? (
        <div className={`bulbMaster ${props.blinkClass}`} />
      ) : (
        <div className={`bulbMaster ${on ? 'bulbOn' : 'bulbOff'}`} />
      )}
    </div>
  );
};

export default Bulb;
