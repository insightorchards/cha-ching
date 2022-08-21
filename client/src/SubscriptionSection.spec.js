import { render, screen } from "@testing-library/react";
import SubscriptionSection from "./SubscriptionSection.js";

describe("<SubscriptionSection />", () => {
  it("renders correctly", () => {
    const component = render(<SubscriptionSection onClick={() => {}} />);
    expect(component.asFragment()).toMatchSnapshot();
  });

  it("renders a subscription button", () => {
    render(<SubscriptionSection />);
    expect(
      screen.getByRole("button", { name: "submit a subscription type" }),
    ).toBeVisible();
    expect(screen.getByText("Select a Subscription Type")).toBeVisible();
  });
});
