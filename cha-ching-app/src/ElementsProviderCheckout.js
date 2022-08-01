import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import CheckoutForm from './CheckoutForm'
import Error from "./Error";
import Loading from "./Loading";
import { useLocation } from "react-router-dom";

const stripePromise = loadStripe(process.env.REACT_APP_PUBLIC_STRIPE_KEY);
const ElementsProviderCheckout = () => {

    const isEmpty = (object) => Object.keys(object).length === 0;
    const [showError, setShowError] = useState(false);
    const { state: options } = useLocation()

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