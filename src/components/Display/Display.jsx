/* eslint-disable prettier/prettier */
import PropTypes from 'prop-types';
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

Display.propTypes = {
  nicole: PropTypes.string.isRequired,
  john: PropTypes.string.isRequired,
};
export default Display;
