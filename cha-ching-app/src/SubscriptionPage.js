import { useState } from "react";
import HSpacer from "./HSpacer";
import SubscriptionButton from "./SubscriptionButton";
import "./SubscriptionButton.css";
import "./SubscriptionPage.css";

const SubscriptionPage = () => {
  const [subscriptionType, setSubscriptionType] = useState("yearly");
  console.log(subscriptionType);
  return (
    <div className="pageWrapper">
      <div className="title">Flower Company Name</div>
      <div className="buttonsWrapper">
        <SubscriptionButton
          selected={subscriptionType === "monthly"}
          text="12.99 per month"
          onClick={() => setSubscriptionType("monthly")}
        />
        <HSpacer factor={4} />
        <SubscriptionButton
          selected={subscriptionType === "yearly"}
          text="$60 per year"
          onClick={() => setSubscriptionType("yearly")}
        />
      </div>
      <div className="descriptionWrapper">
        <div className="descriptionTitle">
          {`Description of ${subscriptionType} subscription`}
        </div>

        {subscriptionType === "monthly" ? (
          <div className="monthlyInfo">
            <ul>
              <li>This is the monthly info</li>
              <li>inspiration boxes</li>
              <li>fly me to the moon</li>
            </ul>
          </div>
        ) : null}

        {subscriptionType === "yearly" ? (
          <div className="yearlyInfo">
            <li>this is the yearly info</li>
            <li>inspiration boxes</li>
            <li>fly me to the moon</li>
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default SubscriptionPage;
