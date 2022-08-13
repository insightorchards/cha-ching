import CheckoutForm from "./CheckoutForm";
import { render, screen, waitFor } from "@testing-library/react";
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
          state: { subscriptionType: "Super Deluxe VIP" },
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

test.only("calls stripe.confirmPayment on submit", async () => {
  const mockConfirmPayment = jest.fn();
  const mockStripe = () => ({
    confirmPayment: mockConfirmPayment,
  });

  jest.mock("@stripe/react-stripe-js", () => {
    const stripe = jest.requireActual("@stripe/react-stripe-js");
    return {
      ...stripe,
      useStripe: mockStripe,
    };
  });

  render(
    <MemoryRouter
      initialEntries={[
        {
          pathname: "/checkout",
          state: { subscriptionType: "Super Deluxe VIP" },
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
  ).toBeVisible();
  userEvent.click(
    await screen.findByRole("button", { name: "Submit Payment" }),
  );
  await waitFor(() => {
    expect(mockConfirmPayment).toHaveBeenCalled();
  });
});

// describe("submit button", () => {
//   afterEach(() => jest.clearAllMocks());
test("when stripe is not defined, submit button is disabled", async () => {
  const mockStripe = undefined;

  jest.mock("@stripe/react-stripe-js", () => {
    const stripe = jest.requireActual("@stripe/react-stripe-js");
    return {
      ...stripe,
      useStripe: {
        mockStripe,
      },
    };
  });

  render(
    <MemoryRouter
      initialEntries={[
        {
          pathname: "/checkout",
          state: { subscriptionType: "Super Deluxe VIP" },
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
  ).toBeDisabled();
});
test("while form is submitting, button is disabled and shows loading spinner", async () => {
  const mockConfirmPayment = jest.fn();
  const mockStripe = () => ({
    confirmPayment: mockConfirmPayment,
  });

  jest.mock("@stripe/react-stripe-js", () => {
    const stripe = jest.requireActual("@stripe/react-stripe-js");
    return {
      ...stripe,
      useStripe: {
        mockStripe,
      },
    };
  });

  render(
    <MemoryRouter
      initialEntries={[
        {
          pathname: "/checkout",
          state: { subscriptionType: "Super Deluxe VIP" },
        },
      ]}
    >
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </MemoryRouter>,
  );

  userEvent.click(
    await screen.findByRole("button", { name: "Submit Payment" }),
  );
  await waitFor(() => {
    expect(mockConfirmPayment).toHaveBeenCalled();
  });

  expect(await screen.findByRole("button", { name: "Loading" })).toBeDisabled();
  expect(await screen.findByRole("button", { name: "Loading" })).toBeVisible();
});
// });
