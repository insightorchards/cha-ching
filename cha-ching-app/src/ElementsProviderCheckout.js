import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from './CheckoutForm'
import Error from "./Error";
import Loading from "./Loading";
import { useLocation } from "react-router-dom";

const stripePromise = loadStripe(process.env.REACT_APP_PUBLIC_STRIPE_KEY);
const ElementsProviderCheckout = () => {

    const isEmpty = (object) => Object.keys(object).length === 0;
    const { state: options } = useLocation()

    return !isEmpty(options) ? (
        (options.clientSecret === null) ? (
            <Error />
        ) : (
            <Elements options={options} stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
        )
    ) : (
        <Loading />
    );
};

export default ElementsProviderCheckout;