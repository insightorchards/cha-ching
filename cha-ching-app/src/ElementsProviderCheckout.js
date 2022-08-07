import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import Error from "./Error";
import Loading from "./Loading";
import { useLocation } from "react-router-dom";

const stripeElementStyling = {
  variables: {
    fontFamily: "Sohne, system-ui, sans-serif",
    fontSizeBase: "20px",
    fontWeightNormal: "500",
    borderRadius: "8px",
    colorPrimary: "white",
    colorText: "#8f424b",
    colorTextSecondary: "#8f424b",
    colorTextPlaceholder: "white",
    colorIconTab: "white",
    colorIconTabSelected: "#1A1B25",
    colorLogo: "dark",
  },
  rules: {
    ".Tab": {
      backgroundColor: "transparent",
    },
    ".Tab--selected": {
      backgroundColor: "#FFCE48",
      color: "#1A1B25",
    },
    ".Input": {
      backgroundColor: "transparent",
      border: "1.5px solid #8f424b",
    },
  },
};

const stripePromise = loadStripe(process.env.REACT_APP_PUBLIC_STRIPE_KEY);
const ElementsProviderCheckout = () => {
  const isEmpty = (object) => Object.keys(object).length === 0;
  const { state: options } = useLocation();
  const styledOptions = {clientSecret: options.clientSecret, stripeElementStyling}
  console.log("styledOptions", styledOptions)

  return !isEmpty(options) ? (
    options.clientSecret === null ? (
      <Error />
    ) : (
      <Elements options={styledOptions} stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    )
  ) : (
    <Loading />
  );
};

export default ElementsProviderCheckout;
