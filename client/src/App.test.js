import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import App from "./App";

describe("App", () => {
  test.skip("it renders header", () => {
    render(<App />);
    expect(screen.getByText("Zen Blossom")).toBeVisible();
  });
});
