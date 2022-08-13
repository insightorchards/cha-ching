import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import "./CheckoutForm.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";
const production = "https://zen-blossom.herokuapp.com";
const development = "http://localhost:3000";
const CLIENT_BASE_URL =
  process.env.NODE_ENV === "production" ? production : development;

function CheckoutForm() {
  const { state } = useLocation();
  const subscriptionType = state.subscriptionType | "";
  const subscriptionPrice = state.subscriptionPrice;
  const [loading, setLoading] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    await stripe
      .confirmPayment({
        elements,
        confirmParams: {
          return_url: `${CLIENT_BASE_URL}/success`,
        },
      })
      .then((data) => console.log("What am I (data):", loading))
      .catch((err) => {
        setLoading(false);
        console.log("I am an error", err);
      });
  };
  console.log("loading", loading);

  return (
    <div className="checkoutFormBackground">
      <div className="header">
        {`${capitalize(subscriptionType)} Subscription`}
      </div>
      <div className="price">{`$${subscriptionPrice} / mo`}</div>
      <div className="paymentFormContainer">
        <form name="payment-form" className="paymentForm">
          <div className="paymentElementcontainer">
            <div className="nameAndEmailInputsContainer">
              <div className="nameAndEmailInputs">
                <div className="nameInput">
                  <div className="label">Name</div>
                  <input className="stripeStyledInput" />
                </div>
                <div className="emailInput">
                  <div className="label">Email</div>
                  <input className="stripeStyledInput" />
                </div>
              </div>
            </div>
            <PaymentElement />
          </div>
          <button
            // disabled={!stripe || loading}
            onClick={handleSubmit}
            className="submitButton"
          >
            {loading ? "Loading" : "Submit Payment"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default CheckoutForm;
