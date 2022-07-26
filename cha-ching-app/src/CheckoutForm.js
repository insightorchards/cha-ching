import { PaymentElement } from "@stripe/react-stripe-js";
import { useEffect } from "react";

function CheckoutForm() {
  
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