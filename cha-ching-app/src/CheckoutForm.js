import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

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
    <div>
      <div className="header">Cha-ching</div>
      <div className="paymentFormContainer">
        <form name="payment-form">
          <div className="emailLabel">Email</div>
          <input className="emailInput"></input>
          <div>
            <PaymentElement />
          </div>
        </form>
        <button onClick={handleSubmit} className="button">
          Submit
        </button>
      </div>
    </div>
  );
}

export default CheckoutForm;
