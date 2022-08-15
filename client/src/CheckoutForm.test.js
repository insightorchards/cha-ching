import CheckoutForm from "./CheckoutForm";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.REACT_APP_PUBLIC_STRIPE_KEY);

afterEach(() => jest.clearAllMocks());

test("renders", async () => {
  const component = render(
    <MemoryRouter
      initialEntries={[
        {
          pathname: "/checkout",
          state: {
            subscriptionType: "Super Deluxe VIP",
            subscriptionPrice: 66,
          },
        },
      ]}
    >
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </MemoryRouter>,
  );
  expect(
    await screen.findByRole("button", { name: "Submit Payment" }),
  ).toBeInTheDocument();
  expect(
    await screen.findByText("Super Deluxe VIP Subscription"),
  ).toBeInTheDocument();
  expect(component.asFragment()).toMatchSnapshot();
});

test("shows loading spinner on submit", async () => {
  render(
    <MemoryRouter
      initialEntries={[
        {
          pathname: "/checkout",
          state: {
            subscriptionType: "Super Deluxe VIP",
            subscriptionPrice: 66,
          },
        },
      ]}
    >
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </MemoryRouter>,
  );

  expect(
    await screen.findByRole("button", { name: "Submit Payment" }),
  ).not.toBeDisabled();
  userEvent.click(
    await screen.findByRole("button", { name: "Submit Payment" }),
  );
  expect(await screen.findByRole("alert")).toBeVisible();
  expect(await screen.findByRole("button")).toBeDisabled();
});
