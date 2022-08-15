import "./SubscriptionSelection.css";
import ContinueIcon from "./ContinueIcon.js";
import HSpacer from "./HSpacer";

const SubscriptionSelection = (onClick) => {
  return (
    <div className="subscriptionSelectionBackground">
      <div classname="pageContents">
        <div className="header">Select Your Subscription</div>
        <div className="cards"></div>
        <div onClick={() => {}} className="submitBar">
          Select a Subscription Type
          <HSpacer />
          <ContinueIcon />
        </div>
        <div className="footer"></div>
      </div>
    </div>
  );
};

export default SubscriptionSelection;
