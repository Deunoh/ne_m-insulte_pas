import PropTypes from 'prop-types';
import './Input.scss';

const Input = () => {
  return (
    <form>
      <input
        type="text"
        className="input"
        placeholder="Écrit moi un mot gentil !"
        value=""
      />
    </form>
  );
};

export default Input;
