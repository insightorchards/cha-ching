import "./SubscriptionSelection.css";
import ContinueIcon from "./ContinueIcon.js";
import HSpacer from "./HSpacer";
import React, { useState } from "react";

const color = "white";

const SubscriptionSelection = (onClick) => {
  const [onHover, setOnHover] = useState(false);
  return (
    <div className="subscriptionSelectionBackground">
      <div classname="pageContents">
        <div className="header">Select Your Subscription</div>
        <div className="cards"></div>
        <button
          onMouseEnter={() => setOnHover(true)}
          onMouseLeave={() => setOnHover(false)}
          onClick={() => {}}
          className="button"
        >
          Select a Subscription Type
          <HSpacer />
          <ContinueIcon color={onHover ? "#e4987c" : "white"} />
        </button>
        <div className="footer"></div>
      </div>
    </div>
  );
};

export default SubscriptionSelection;
