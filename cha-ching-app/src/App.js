import { Elements, PaymentElement } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import "./App.css";

const stripePromise = loadStripe(process.env.REACT_APP_PUBLIC_STRIPE_KEY);

function App() {
  const options = {
    clientSecret: "insert client secret here please",
  };

  function GetClientSecret() {
    fetch("http://localhost:3001/payment-intent")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  return (
    <div>
      <div className="header">Cha-ching</div>
      <div className="paymentFormContainer">
        <div className="paymentElementcontainer">
          <Elements options={options} stripe={stripePromise}>
            <PaymentElement />
          </Elements>
        </div>
        <button onClick={() => GetClientSecret()} className="button">
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
