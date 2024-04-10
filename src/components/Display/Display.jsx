/* eslint-disable prettier/prettier */
import './Display.scss';

const Display = ({ nicole, john }) => {
  return (
    <div>
      <div className="display-left">
        <p>{john}</p>
        <img src="" alt="" />
      </div>
      <div className="display-right">
        <p>{nicole}</p>
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Display;
