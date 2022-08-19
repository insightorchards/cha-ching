import ContinueIcon from "./ContinueIcon";
import { render } from "@testing-library/react";

describe("<ContinueIcon />", () => {
  it("renders correctly", () => {
    const component = render(<ContinueIcon continue />);
    expect(component.asFragment).toMatchSnapshot();
  });
});
