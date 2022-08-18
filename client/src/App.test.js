import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("it renders header", () => {
    render(<App />);
    expect(screen.getByText("Zen Blossom")).toBeVisible();
  });
});
