import { Elements, PaymentElement } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import "./App.css";

const stripePromise = loadStripe(process.env.REACT_APP_PUBLIC_STRIPE_KEY);

function App() {
  const [options, setOptions] = useState({});

  const isEmpty = (object) => Object.keys(object).length === 0;

  function getClientSecret() {
    fetch("http://localhost:3001/payment-intent")
      .then((res) => res.json())
      .then((data) => {
        setOptions(data);
      });
  }

  return (
    <div>
      <div className="header">Cha-ching</div>
      <div className="paymentFormContainer">
        <div className="paymentElementcontainer">
          {!isEmpty(options) ? (
            <Elements options={options} stripe={stripePromise}>
              <PaymentElement />
            </Elements>
          ) : (
            "loading"
          )}
        </div>
        <button onClick={() => getClientSecret()} className="button">
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
