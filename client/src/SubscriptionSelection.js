import "./SubscriptionSelection.css";
import ContinueIcon from "./ContinueIcon.js";
import HSpacer from "./HSpacer";
import React, { useState } from "react";

const color = "white";

const SubscriptionSelection = (onClick = () => {}) => {
  const [onHover, setOnHover] = useState(false);
  return (
    <div className="subscriptionSelectionBackground">
      <div className="pageContents">
        <div className="header">Select Your Subscription</div>
        <div className="cards"></div>
        <button
          aria-label="submit a subscription type"
          role="button"
          onMouseEnter={() => setOnHover(true)}
          onMouseLeave={() => setOnHover(false)}
          onClick={onClick}
          className="button"
        >
          Select a Subscription Type
          <HSpacer />
          <ContinueIcon color={onHover ? "#e4987c" : color} />
        </button>
        <div className="footer"></div>
      </div>
    </div>
  );
};

export default SubscriptionSelection;
