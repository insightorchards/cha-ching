import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import "./CheckoutForm.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import LoadingSpinner from "./Loading";

function CheckoutForm() {
  const { state } = useLocation();
  const subscriptionType = state.subscriptionType || "";
  const subscriptionPrice = state.subscriptionPrice;
  const [loading, setLoading] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      return;
    }
    await stripe
      .confirmPayment({
        elements,
        confirmParams: {
          return_url: `${process.env.REACT_APP_CLIENT_BASE_URL}/success`,
        },
      })
      .then((data) => {
        if (data.error) {
          setLoading(false);
        }
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  return (
    <div className="checkoutFormBackground">
      <div className="checkoutFormHeader">
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
            disabled={loading}
            onClick={handleSubmit}
            className="submitButton"
          >
            {loading ? <LoadingSpinner /> : "Submit Payment"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default CheckoutForm;
