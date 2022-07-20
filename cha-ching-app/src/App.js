import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { PaymentElement } from "@stripe/react-stripe-js";

import "./App.css";

const stripePromise = loadStripe(process.env.PUBLIC_STRIPE_KEY);
console.log(process.env.PUBLIC_STRIPE_KEY);

function App() {
  return (
    <div>
      <div className="header">This is Cha-ching</div>
      <Elements stripe={stripePromise}>
        <PaymentElement />
      </Elements>
    </div>
  );
}

export default App;
