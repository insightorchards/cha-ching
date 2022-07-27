import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import CheckoutForm from "./CheckoutForm";
import "./App.css";

const stripePromise = loadStripe(process.env.REACT_APP_PUBLIC_STRIPE_KEY);

function App() {

  const isEmpty = (object) => Object.keys(object).length === 0;
  const [options, setOptions] = useState({});

  async function fetchData() {
    await fetch("http://localhost:3001/payment-intent")
      .then((res) => res.json())
      .then((data) => {
        setOptions(data);
      });
  }

  useEffect(() => {
    fetchData()
  }, []);

  return (
    !isEmpty(options) ? (
      <Elements options={options} stripe={stripePromise}>
        <CheckoutForm/>
      </Elements>
    ) : (
      "loading"
    )
  )
}

export default App;
