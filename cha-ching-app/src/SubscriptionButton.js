import "./SubscriptionButton.css";
import PropTypes from "prop-types";

const SubscriptionButton = ({ text, onClick = () => {}, selected = false }) => {
  return (
    <div className="buttonWrapper">
      <button
        onClick={onClick}
        className="SubscriptionButton"
        style={{ backgroundColor: selected ? "#d7f8be" : "#d9d9d9" }}
      >
        {text}
      </button>
    </div>
  );
};

SubscriptionButton.propTypes = {
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  text: PropTypes.string,
};

export default SubscriptionButton;
