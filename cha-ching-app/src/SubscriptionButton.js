import "./SubscriptionButton.css";
import PropTypes from "prop-types";

const SubscriptionButton = ({ text, onClick = () => {}, selected = false }) => {
  return (
      <button
        onClick={onClick}
        className={`SubscriptionButton ${selected ? "highlightedButton" : ""}`}
      >
        {text}
      </button>
  );
};

SubscriptionButton.propTypes = {
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  text: PropTypes.string,
};

export default SubscriptionButton;
