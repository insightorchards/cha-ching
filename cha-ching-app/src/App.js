import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { PaymentElement } from "@stripe/react-stripe-js";

import "./App.css";

const stripePromise = loadStripe(
  "pk_test_51LN2YSDXZ2nrCEJAoQsVYTK57pNjgCcaXzd3SQKlI41uKS0C5l4IDZXPMd4auY5dJuJFChCQzEMUliwD82kpBv1x00C1E0BuBJ",
);
console.log(stripePromise);

function App() {
  const options = {
    // passing the client secret obtained from the server
    clientSecret: "{{'hallo'}}",
  };
  return (
    <div>
      <div className="header">This is Cha-ching</div>
      <Elements options={options} stripe={stripePromise}>
        <PaymentElement />
      </Elements>
    </div>
  );
}

export default App;
