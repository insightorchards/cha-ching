import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import Error from "./Error";
import Loading from "./Loading";
import { useLocation } from "react-router-dom";
import { renderIf } from "./utils";

const stripePromise = loadStripe(process.env.REACT_APP_PUBLIC_STRIPE_KEY);
const ElementsProviderCheckout = () => {
  const isEmpty = (object) => Object.keys(object).length === 0;
  const { state: options = {} } = useLocation();

  return (
    <>
      {renderIf(
        !isEmpty(options) && options.clientSecret,
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>,
      )}
      {renderIf(!isEmpty(options) && !options.clientSecret, <Error />)}
      {renderIf(isEmpty(options), <Loading />)}
    </>
  );
};

export default ElementsProviderCheckout;
