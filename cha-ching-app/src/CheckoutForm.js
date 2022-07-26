import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useEffect } from "react";

function CheckoutForm() {
    const stripe = useStripe()
    const elements = useElements()
    useEffect(() => {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ postName: "React updates " }),
      };
  
      fetch("http://localhost:3001/", requestOptions)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }, []);

    async function confirmPayment() {
        console.log("we are in confirmPayment function")
        await stripe.confirmPayment({
             elements,
             confirmParams: {
                 return_url: "https://localhost:3000/success",
             },
         }).then(data => console.log("What am I (data):", data))
     }

    useEffect(() => {
        console.log("we are in confirmPayment useEffect")
        confirmPayment()
    }, []);
  
    return (
      <div>
        <div className="header">Cha-ching</div>
        <div className="paymentFormContainer">
          <form id="payment-form">
            <div className="paymentElementcontainer">
                <PaymentElement />
            </div>
            <button onClick={() => {}} className="button">
              Submit
            </button>
          </form>
        </div>
      </div>
    )
}

export default CheckoutForm;