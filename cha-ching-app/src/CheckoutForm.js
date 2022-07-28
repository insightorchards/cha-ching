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
      .catch((err) =>
        console.log("Something went wrong confirming the payment:", err),
      );
  };

  return (
    <div>
      <div className="header">Cha-ching</div>
      <div className="paymentFormContainer">
        <form id="payment-form">
          <div className="paymentElementcontainer">
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
