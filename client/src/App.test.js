import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test.skip("it renders header", () => {
    render(<App />);
    expect(screen.getByText("Flora Denbo")).toBeVisible();
  });
});
