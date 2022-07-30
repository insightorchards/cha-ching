import { useState } from "react";
import HSpacer from "./HSpacer";
import SubscriptionButton from "./SubscriptionButton";
import "./SubscriptionButton.css";
import "./SubscriptionPage.css";
import { useNavigate } from "react-router-dom";
import VSpacer from "./VSpacer";

const SubscriptionPage = () => {
  const navigate = useNavigate();
  const [subscriptionType, setSubscriptionType] = useState("yearly");
  console.log(subscriptionType);

  return (
    <div className="pageWrapper">
      <VSpacer factor={4} />
      <div className="title">Flower Company Name</div>
      <VSpacer factor={5} />
      <div className="buttonsWrapper">
        <SubscriptionButton
          onClick={() => setSubscriptionType("monthly")}
          selected={subscriptionType === "monthly"}
          text="12.99 per month"
        />
        <HSpacer factor={4} />
        <SubscriptionButton
          onClick={() => setSubscriptionType("yearly")}
          selected={subscriptionType === "yearly"}
          text="$60 per year"
        />
      </div>
      <VSpacer factor={4} />
      <div className="descriptionWrapper">
        <div className="descriptionTitle">
          {`Description of ${subscriptionType} subscription`}
        </div>

        <VSpacer factor={4} />
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
      <VSpacer factor={6} />
      <button className="submitButton" onClick={() => navigate("/")}>
        {`I would like to sign up for a ${subscriptionType} subscription`}
      </button>
    </div>
  );
};
export default SubscriptionPage;
