import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SubscriptionSelection from "./SubscriptionSelection.js";

describe("<SubscriptionSelection />", () => {
  it("renders correctly", () => {
    const component = render(<SubscriptionSelection onClick={() => {}} />);
    expect(component.asFragment()).toMatchSnapshot();
  });

  it("renders a subscription button", () => {
    render(<SubscriptionSelection />);
    expect(
      screen.getByRole("button", { name: "submit a subscription type" }),
    ).toBeVisible();
  });
  it("renders the text", () => {
    render(<SubscriptionSelection />);
    expect(screen.getByText("Select a Subscription Type")).toBeVisible();
  });

  describe("the submit subscription button", () => {
    it("calls the onClick function when the button has been clicked", () => {
      const mockOnClick = jest.fn();
      render(<SubscriptionSelection onClick={mockOnClick} />);
      expect(mockOnClick).not.toHaveBeenCalled();
      userEvent.click(
        screen.getByRole("button", { name: "submit a subscription type" }),
      );
      expect(mockOnClick).toHaveBeenCalled();
    });
  });
});
