import './styles/bulb.css';

const Bulb = (props) => {
  const { on } = props;
  return <div className={`bulbMaster ${on ? 'bulbOn' : 'bulbOff'}`}></div>;
};

export default Bulb;
