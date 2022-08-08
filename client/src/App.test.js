import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import App from "./App";

describe("App", () => {
  test("it renders header", () => {
    render(<App />);
    expect(screen.getByText("This is Cha-ching")).toBeVisible();
    expect(screen.getByRole("input", { name: "First Name" })).toBeVisible();
    expect(screen.getByRole("input", { name: "Last Name" })).toBeVisible();
    expect(
      screen.getByRole("input", { name: "Credit Card Number" }),
    ).toBeVisible();
    expect(screen.getByRole("input", { name: "Zip Code" })).toBeVisible();
    expect(screen.getByRole("input", { name: "CVC" })).toBeVisible();
    expect(
      screen.queryByText("payment submitted successfully"),
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Submit Payment" }),
    ).toBeVisible();
    userEvent.click(screen.getByRole("button", { name: "Submit Payment" }));
    expect(screen.getByText("payment submitted successfully")).toBeVisible();
  });
});
