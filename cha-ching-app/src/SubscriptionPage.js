import { useState } from "react";
import HSpacer from "./HSpacer";
import SubscriptionButton from "./SubscriptionButton";
import "./SubscriptionButton.css";
import "./SubscriptionPage.css";
import { useNavigate } from "react-router-dom";
import VSpacer from "./VSpacer";

const SubscriptionPage = () => {
  const navigate = useNavigate();
  const [subscriptionType, setSubscriptionType] = useState("starter");

  function handleSubmit(){
    console.log("I'm in post useffect")
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: `${subscriptionType} diy ikebana`,
        amount: subscriptionType === 'monthly' ? 1200 : 10000
      }),
    }; 

    fetch("http://localhost:3001/create-incomplete-subscription", requestOptions)
      .then((res) => res.json())
      .then(data => {
        console.log("client secret", data.latest_invoice.payment_intent.client_secret)
        navigate("/checkout", { state:  { clientSecret: data.latest_invoice.payment_intent.client_secret } })
      })
      .catch(err => console.log("error creating product:", err))
  }

  return (
    <div className="pageWrapper">
      <div className="buttonsWrapper">
        <SubscriptionButton
          onClick={() => setSubscriptionType("starter")}
          selected={subscriptionType === "starter"}
          text={`Starter`}
        />
        <HSpacer factor={4} />
        <SubscriptionButton
          onClick={() => setSubscriptionType("intermediate")}
          selected={subscriptionType === "intermediate"}
          text={`Intermediate`}
        />
        <HSpacer factor={4} />
        <SubscriptionButton
          onClick={() => setSubscriptionType("master")}
          selected={subscriptionType === "master"}
          text={`Master`}
        />
      </div>
      <VSpacer factor={4} />
      <div className="descriptionWrapper">
        <div className="descriptionTitle">
          {`${subscriptionType} Subscription`}
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
      <button
        className="submitButton"
        onClick={handleSubmit}
      >
        {`Sign Me Up`}
      </button>
    </div>
  );
};
export default SubscriptionPage;
