import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import CheckoutForm from "./CheckoutForm";
import Success from "./Success";
import Error from "./Error";
import SubscriptionPage from "./SubscriptionPage";
import "./error.css";
import "./App.css";
import "./Loading.css";
import Loading from "./Loading";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const stripePromise = loadStripe(process.env.REACT_APP_PUBLIC_STRIPE_KEY);

function App() {
  const isEmpty = (object) => Object.keys(object).length === 0;
  const [options, setOptions] = useState({});
  const [showError, setShowError] = useState(false);

  async function fetchSubscriptionData() {
    await fetch("http://localhost:3001/create-incomplete-subscription")
      .then((res) => res.json())
      .then((data) => {
        setOptions({clientSecret: data.incompleteSubscription.latest_invoice.payment_intent.client_secret});
        console.log("options", options)
        if (isEmpty(data)) {
          setShowError(true);
        }
      })
      .catch((err) => console.log("err creating incomeplete subscription", err));
  }

  useEffect(() => {
    fetchSubscriptionData();
  }, []);

  return !isEmpty(options) ? (
    <Elements options={options} stripe={stripePromise}>
      <Router>
        <Routes>
          <Route path="/" element={<CheckoutForm />} />
          <Route path="/success" element={<Success />} />
          <Route path="/subscription-page" element={<SubscriptionPage />} />
          <Route path="/loading" element={<Loading />} />
        </Routes>
      </Router>
    </Elements>
  ) : showError ? (
    <Error />
  ) : (
    <Loading />
  );
}

export default App;
