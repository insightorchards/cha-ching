import "./SubscriptionSection.css";
import ContinueIcon from "./ContinueIcon.js";
import HSpacer from "./HSpacer";
import React, { useState } from "react";
import SubscriptionDetailsCard from "./SubscriptionDetailsCard";
import { useNavigate } from "react-router-dom";

const color = "white";
const SubscriptionSection = () => {
  const [onHover, setOnHover] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState(false);
  const [subscriptionType, setSubscriptionType] = useState("starter");
  const [subscriptionPrice, setSubscriptionPrice] = useState(55);

  const navigate = useNavigate();

  const handleSubmit = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: `${subscriptionType} diy ikebana`,
        amount: subscriptionPrice,
      }),
    };

    fetch(
      `${process.env.REACT_APP_API_BASE_URL}/create-incomplete-subscription`,
      requestOptions,
    )
      .then((res) => res.json())
      .then((data) => {
        navigate("/checkout", {
          state: {
            clientSecret: data.latest_invoice.payment_intent.client_secret,
            subscriptionType: subscriptionType,
            subscriptionPrice: subscriptionPrice,
          },
        });
      })
      .catch((err) => console.log("error creating product:", err));
  }

  return (
    <div className="subscriptionSectionBackground">
      <div className="pageContents">
        <div className="header">Select Your Subscription</div>
        <div className="cards">
          <SubscriptionDetailsCard
            id={"starter"}
            selectedCardId={selectedCardId}
            subscriptionName="Starter"
            price={55}
            subscriptionDetails={[
              "Group classes with apprentice and intermediate instructors",
              "Weekly instructional videos",
              "Exclusive access to our online community of ikebana enthusiastsr",
              "Bi-weekly flower delivery",
              "Includes initial starter kit (kenzan, vase, scissors)",
              "Small group sessions with other advancing peers"
            ]}
            onClick={() => {
              setSelectedCardId("starter")
              setSubscriptionType("starter")
              setSubscriptionPrice(55)
            }}
          />
          <SubscriptionDetailsCard
            id={"intermediate"}
            selectedCardId={selectedCardId}
            subscriptionName="Intermediate"
            price={115}
            subscriptionDetails={[
              "Exclusive access to our online community of ikebana enthusiasts",
              "Weekly step-by-step video tutorials and instructional pamphlets",
              "Ikebana maintenance tips",
              "Includes initial starter kit (kenzen, vase, scissors)",
              "Syllabus of recommended readings",
            ]}
            onClick={() => {
              setSelectedCardId("intermediate")
              setSubscriptionType("intermediate")
              setSubscriptionPrice(115)
            }}
          />
          <SubscriptionDetailsCard
            id={"master"}
            selectedCardId={selectedCardId}
            subscriptionName="Master"
            price={205}
            subscriptionDetails={[
              "Self discovery in the art of Ikebana",
              "Zoom one-on-one sessions with the Master",
              "Monthly instructional videos, advanced techniques from the Master",
              "Invitations to annual ikebana events and competitions",
              "Weekly flower delivery and Seasonal themed vases",
              "Exclusive access to our online community of ikebana enthusiasts",
              "Includes everything from starter and intermediate"
            ]}
            onClick={() => {
              setSelectedCardId("master")
              setSubscriptionType("master")
              setSubscriptionPrice(205)
            }}
          />
        </div>
        <button
          aria-label="submit a subscription type"
          role="button"
          onMouseEnter={() => setOnHover(true)}
          onMouseLeave={() => setOnHover(false)}
          className="button"
          onClick={() => handleSubmit()}
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
