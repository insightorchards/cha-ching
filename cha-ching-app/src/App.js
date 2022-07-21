import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { PaymentElement } from "@stripe/react-stripe-js";

import "./App.css";

const stripePromise = loadStripe("");
console.log(process.env.REACT_APP_PUBLIC_STRIPE_KEY);

function App() {
  const options = {
    clientSecret: "",
  };
  return (
    <div>
      <div className="header">This is Cha-ching</div>
      <div className="paymentElementContainer">
        <Elements options={options} stripe={stripePromise}>
          <PaymentElement />
        </Elements>
      </div>
    </div>
  );
}

export default App;
