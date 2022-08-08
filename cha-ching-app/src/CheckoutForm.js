import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import "./CheckoutForm.css"

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async () => {
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
      <div className="header">Cha-ching</div>
      <div className="paymentFormContainer">
        <div className="paymentForm">
          {/* <form id="payment-form"> */}
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
          {/* <div className="paymentElementcontainer"> */}
            <PaymentElement />
          </div>
          {/* </form> */}
          <button onClick={handleSubmit} className="button">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutForm;
