/* eslint-disable prettier/prettier */
import PropTypes from 'prop-types';
import './Input.scss';

const Input = ({ injure, handleSweetWord, handleSubmit }) => {
  return (
    <form
      className="form"
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit();
      }}
    >
      <input
        type="text"
        className="input"
        placeholder="Écrit moi un mot gentil !"
        value={injure}
        onChange={(event) => {
          handleSweetWord(event.target.value);
        }}
      />
    </form>
  );
};

export default Input;
