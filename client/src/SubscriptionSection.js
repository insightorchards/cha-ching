import "./SubscriptionSection.css";
import ContinueIcon from "./ContinueIcon.js";
import HSpacer from "./HSpacer";
import React, { useState } from "react";

const color = "white";

const SubscriptionSection = () => {
  const [onHover, setOnHover] = useState(false);
  return (
    <div className="subscriptionSectionBackground">
      <div className="pageContents">
        <div className="header">Select Your Subscription</div>
        <div className="cards" />
        <button
          aria-label="submit a subscription type"
          role="button"
          onMouseEnter={() => setOnHover(true)}
          onMouseLeave={() => setOnHover(false)}
          className="button"
        >
          Select a Subscription Type
          <HSpacer />
          <ContinueIcon color={onHover ? "#e4987c" : color} />
        </button>
        <div className="footer" />
      </div>
    </div>
  );
};

export default SubscriptionSection;
