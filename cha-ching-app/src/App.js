import { Elements, PaymentElement } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import "./App.css";

const stripePromise = loadStripe(process.env.REACT_APP_PUBLIC_STRIPE_KEY);

function App() {
  const [options, setOptions] = useState({});

  const isEmpty = (object) => Object.keys(object).length === 0;

  useEffect(() => {
    fetch("http://localhost:3001/payment-intent")
      .then((res) => res.json())
      .then((data) => {
        setOptions(data);
      });
  }, []);

  return !isEmpty(options) ? (
    <div>
      <div className="header">Cha-ching</div>
      <div className="paymentFormContainer">
        <div className="paymentElementcontainer">
          <Elements options={options} stripe={stripePromise}>
            <PaymentElement />
          </Elements>
        </div>
        <button onClick={() => {}} className="button">
          Submit
        </button>
      </div>
    </div>
  ) : (
    "loading"
  );
}

export default App;
