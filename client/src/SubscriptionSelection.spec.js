import { render } from "@testing-library/react";
import SubscriptionSelection from "./SubscriptionSelection.js";

describe("<SubscriptionSelection />", () => {
  test("renders correctly", () => {
    const component = render(<SubscriptionSelection />);
    expect(component.asFragment()).toMatchSnapshot();
  });
});
