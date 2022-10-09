import PropTypes from "prop-types";

const Button = ({ fetchQuote }) => {
  return (
    <button onClick={() => fetchQuote()} className="dice-bg">
      <img className="dice" src="./icon-dice.svg" alt="dice" />
    </button>
  );
};

export default Button;

Button.propTypes = {
  fetchQuote: PropTypes.func.isRequired,
};
