import PropTypes from "prop-types";

const Error = ({ error }) => (
  <div className="error">Something went wrong: {error}</div>
);

export default Error;

Error.propTypes = {
  error: PropTypes.string.isRequired,
};
