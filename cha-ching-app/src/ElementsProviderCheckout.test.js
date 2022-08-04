import { render, screen } from "@testing-library/react";
import ElementsProviderCheckout from "./ElementsProviderCheckout";
import { BrowserRouter } from "react-router-dom";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({ pathname: "", search: "", state: {}, hash: "" }),
}));

describe("<ElementsProviderCheckout/>", () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test("renders Loading when options are undefined", async () => {
    const component = render(
      <BrowserRouter>
        <ElementsProviderCheckout />
      </BrowserRouter>,
    );
    expect(await screen.findByRole("alert")).toBeInTheDocument();
    expect(component.asFragment()).toMatchSnapshot();
  });

  test("renders Error", async () => {
    render(
      <BrowserRouter>
        <ElementsProviderCheckout />
      </BrowserRouter>,
    );
    expect(await screen.findByText("error")).toBeInTheDocument();
  });

  test.skip("renders Stripe's Elements provider", async () => {
    const component = render(
      <BrowserRouter>
        <ElementsProviderCheckout />
      </BrowserRouter>,
    );
    expect(await screen.findByRole("alert")).toBeInTheDocument();
    expect(component.asFragment()).toMatchSnapshot();
  });
});
