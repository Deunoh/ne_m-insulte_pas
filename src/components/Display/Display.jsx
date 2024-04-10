/* eslint-disable prettier/prettier */
import './Display.scss';

const Display = ({ nicole, john }) => {
  return (
    <div>
      <div className="display-left display-container">
        <p className="display-text">{john}</p>
        <img src="/src/assets/bulle2.webp" alt="" />
      </div>
      <div className="display-right display-container">
        <p className="display-text">{nicole}</p>
        <img src="/src/assets/bulle1.webp" alt="" />
      </div>
    </div>
  );
};

export default Display;
