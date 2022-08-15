import "./SubscriptionSelection.css";
import ContinueIcon from "./ContinueIcon.js";
import HSpacer from "./HSpacer";

const SubscriptionSelection = (onClick) => {
  return (
    <div className="subscriptionSelectionBackground">
      <div classname="pageContents">
        <div className="header">Select Your Subscription</div>
        <div className="cards"></div>
        <button onClick={() => {}} className="button">
          Select a Subscription Type
          <HSpacer />
          <ContinueIcon color="#e4987c" />
        </button>
        <div className="footer"></div>
      </div>
    </div>
  );
};

export default SubscriptionSelection;
