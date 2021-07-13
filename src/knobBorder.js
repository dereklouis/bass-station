import './knobBorder.css';

const knobBorderArr = [
  ['knobBorder1', '0deg'],
  ['knobBorder2', '30deg'],
  ['knobBorder3', '60deg'],
  ['knobBorder4', '90deg'],
  ['knobBorder5', '120deg'],
  ['knobBorder6', '150deg'],
  ['knobBorder7', '180deg'],
  ['knobBorder8', '210deg'],
  ['knobBorder9', '240deg'],
  ['knobBorder10', '270deg'],
  ['knobBorder11', '300deg'],
  ['knobBorder12', '330deg'],
];

const KnobBorder = () => {
  return (
    <div className="knobBorder">
      {knobBorderArr.map((dot) => (
        <div
          className={`knobBorderDot ${dot[0]}`}
          style={{ transform: `rotate(${dot[1]})` }}
        >
          <div className="knobBorderDotDot" />
        </div>
      ))}
    </div>
  );
};

export default KnobBorder;
