import { useState } from "react";
import SubscriptionButton from "./SubscriptionButton";
import { useNavigate } from "react-router-dom";
import "./SubscriptionButton.css";
import "./SubscriptionPage.css";

const SubscriptionPage = () => {
  const navigate = useNavigate();
  const [subscriptionType, setSubscriptionType] = useState("starter");

  const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

  function handleSubmit() {
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
        navigate("/checkout", { state:  { clientSecret: data.latest_invoice.payment_intent.client_secret } })
      })
      .catch(err => console.log("error creating product:", err))
  }

  return (
    <div>
      <div className="background">
        <div className="backgroundIkebanaImage"/>
      </div>
      <div className="pageTopLayerContainer">
        <div className="subscriptionButtonsContainer">
          <div className="subscriptionButtons">
            <SubscriptionButton
              onClick={() => setSubscriptionType("starter")}
              selected={subscriptionType === "starter"}
              text={`Starter`}
            />
            <SubscriptionButton
              onClick={() => setSubscriptionType("intermediate")}
              selected={subscriptionType === "intermediate"}
              text={`Intermediate`}
            />
            <SubscriptionButton
              onClick={() => setSubscriptionType("master")}
              selected={subscriptionType === "master"}
              text={`Master`}
            />
          </div>
        </div>
        <div className="descriptionAndImageContainer">
          <div className="leftSection">
            <div className="descriptionContainer">
              <div className="descriptionTitle">
                {`${capitalize(subscriptionType)} Subscription`}
              </div>
              {subscriptionType === "starter" ? (
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
              ) : null}

              {subscriptionType === "intermediate" ? (
                <div>
                  Semper risus in hendrerit gravida rutrum quisque non tellus orci. Vulputate ut pharetra sit amet aliquam id diam maecenas. Nibh tortor id aliquet lectus. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Amet est placerat in egestas erat imperdiet sed euismod. Pharetra sit amet aliquam id diam maecenas ultricies mi. Venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam. Sagittis orci a scelerisque purus semper eget duis. Dolor sit amet consectetur adipiscing elit ut aliquam. Tellus mauris a diam maecenas sed enim ut sem viverra. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas. Ut venenatis tellus in metus vulputate eu scelerisque felis. Vitae semper quis lectus nulla at volutpat diam ut venenatis.
                </div>
              ) : null}

              {subscriptionType === "master" ? (
                <div>
                  Consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis. Adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum. Porttitor eget dolor morbi non. Pharetra magna ac placerat vestibulum lectus mauris. Diam quis enim lobortis scelerisque. Mus mauris vitae ultricies leo integer malesuada nunc vel. Arcu dictum varius duis at. Libero justo laoreet sit amet cursus sit amet dictum. Urna condimentum mattis pellentesque id nibh tortor. Amet purus gravida quis blandit turpis cursus in hac. Urna et pharetra pharetra massa massa ultricies mi. Posuere ac ut consequat semper. Odio aenean sed adipiscing diam donec adipiscing. Morbi leo urna molestie at elementum eu facilisis sed. Malesuada proin libero nunc consequat interdum varius sit amet.
                </div>
              ) : null}
            </div>
            <button
              className="submitButton"
              onClick={handleSubmit}
            >
              Sign Me Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SubscriptionPage;
