import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import CheckoutForm from "./CheckoutForm";
import Success from "./Success";
import Error from "./Error";
import SubscriptionButtons from "./SubscriptionButtons";
import "./error.css";
import "./App.css";
import "./loading.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const stripePromise = loadStripe(process.env.REACT_APP_PUBLIC_STRIPE_KEY);

function App() {
  const isEmpty = (object) => Object.keys(object).length === 0;
  const [options, setOptions] = useState({});
  const [showError, setShowError] = useState(false);

  async function fetchData() {
    await fetch("http://localhost:3001/payment-intent")
      .then((res) => res.json())
      .then((data) => {
        setOptions(data);
        if (isEmpty(data)) {
          setShowError = true;
        }
      })
      .catch((err) => console.log("err", err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return !isEmpty(options) ? (
    <Elements options={options} stripe={stripePromise}>
      <Router>
        <Routes>
          <Route path="/" element={<CheckoutForm />} />
          <Route path="/success" element={<Success />} />
          <Route path="/subscription" element={<SubscriptionButtons />} />
        </Routes>
      </Router>
    </Elements>
  ) : showError ? (
    <Error />
  ) : (
    <div>Loading</div>
  );
}

export default App;
