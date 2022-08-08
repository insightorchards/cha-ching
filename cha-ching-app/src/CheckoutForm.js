import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import "./CheckoutForm.css"
import { useLocation } from 'react-router-dom';

function CheckoutForm() {

  const { state } = useLocation();
  const subscriptionType = state.subscriptionType
  const stripe = useStripe();
  const elements = useElements();

  const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

  const handleSubmit = async (e) => {
    e.preventDefault()
    await stripe
      .confirmPayment({
        elements,
        confirmParams: {
          return_url: "http://localhost:3000/success",
        },
      })
      .then((data) => console.log("What am I (data):", data))
      .catch((err) => console.log("I am an error", err));
  };

  return (
    <div className="checkoutFormBackground">
      <div className="header">{`${capitalize(subscriptionType)} Subscription`}</div>
      <div className="paymentFormContainer">
          <form id="payment-form" className="paymentForm">
            <div className="paymentElementcontainer">
            <div className="nameAndEmailInputsContainer">
              <div className="nameAndEmailInputs">
                <div className="nameInput">
                  <div className="label">Name</div>
                  <input className="stripeStyledInput"/>
                </div>
                <div className="emailInput">
                  <div className="label">Email</div>
                  <input className="stripeStyledInput"/>
                </div>
              </div>
            </div>
              <PaymentElement />
            </div>
            <button onClick={handleSubmit} className="button">
              Submit Payment
            </button>
          </form>
      </div>
    </div>
  );
}

export default CheckoutForm;
