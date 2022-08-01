import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import CheckoutForm from './CheckoutForm'
import Error from "./Error";
import Loading from "./Loading";

const stripePromise = loadStripe(process.env.REACT_APP_PUBLIC_STRIPE_KEY);

const ElementsProviderCheckout = () => {

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
            <CheckoutForm />
        </Elements>
        ) : showError ? (
            <Error />
        ) : (
            <Loading />
        );
};

export default ElementsProviderCheckout;