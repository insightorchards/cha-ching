import { useEffect, useState } from "react";
import HSpacer from "./HSpacer";
import SubscriptionButton from "./SubscriptionButton";
import "./SubscriptionButton.css";
import "./SubscriptionPage.css";
import { useNavigate } from "react-router-dom";
import VSpacer from "./VSpacer";
import {
  useStripe
} from "@stripe/react-stripe-js";

const SubscriptionPage = () => {
  const navigate = useNavigate();
  const [subscriptionType, setSubscriptionType] = useState("yearly");


  function createProduct(){
    console.log("I'm in post useffect")
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: `${subscriptionType} diy ikebana`,
        amount: subscriptionType === 'monthly' ? 1200 : 10000
      }),
    }; 

    fetch("http://localhost:3001/create-product", requestOptions)
      .then((res) => res.json())
      .then(data => console.log({data}))
      .catch(err => console.log("error creating product:", err))
  }

  return (
    <div className="pageWrapper">
      <VSpacer factor={4} />
      <div className="title">Flower Company Name</div>
      <VSpacer factor={5} />
      <div className="buttonsWrapper">
        <SubscriptionButton
          onClick={() => setSubscriptionType("monthly")}
          selected={subscriptionType === "monthly"}
          text={`$12 per month`}
        />
        <HSpacer factor={4} />
        <SubscriptionButton
          onClick={() => setSubscriptionType("yearly")}
          selected={subscriptionType === "yearly"}
          text={`$100 per year`}
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
      <button
        className="submitButton"
        onClick={() => {
          createProduct()
          // navigate("/")
        }}
      >
        {`I would like to sign up for a ${subscriptionType} subscription`}
      </button>
    </div>
  );
};
export default SubscriptionPage;
