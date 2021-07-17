import './styles/wheel.css';

const Wheel = (props) => {
  return (
    <div className="wheelMaster">
      <div className="wheel">
        <div
          className="wheelNotch"
          style={{ transform: `translateY(${props.position}rem)` }}
        />
        <div className="wheelShadow" />
      </div>
    </div>
  );
};

export default Wheel;
