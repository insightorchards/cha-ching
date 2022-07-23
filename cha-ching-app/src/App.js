import { Elements, PaymentElement } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import "./App.css";

const stripePromise = loadStripe(
  "pk_test_51K4emKJTWDcODaWbHcExGLMnxkY84sL0HI0oLmLQu5uThh7oVAnKbKSMbYlihkZ0JUSyb5XqUJAk5TB0ABUdewkh00YSfzUf4v",
);
console.log(process.env.REACT_APP_PUBLIC_STRIPE_KEY);

async function App() {
  const options = {
    clientSecret: "pi",
  };
  return (
    <div>
      <div className="header">Cha-ching</div>
      <div className="paymentFormContainer">
        <div className="paymentElementcontainer">
          <Elements options={options} stripe={stripePromise}>
            <PaymentElement />
          </Elements>
        </div>
        <button className="button">Submit</button>
      </div>
    </div>
  );
}

export default App;
