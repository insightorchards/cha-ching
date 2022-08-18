import { render, screen } from "@testing-library/react";
import SubscriptionDetailsCard from "./SubscriptionDetailsCard";

describe("SubscriptionDetailsCard", () => {
    describe("highlight styling renders correctly", () => {
        it("does not display highlight given 'id' and 'selectedCardId' props are not passed", () => {
            render(<SubscriptionDetailsCard/>)
            expect(screen.getByTestId("subscription-card")).not.toHaveClass("selectedStyling");
        })
        it("displays highlight when selected is true", () => {
            render(<SubscriptionDetailsCard id={0} selectedCardId={0} />)
            expect(screen.getByTestId("subscription-card")).toHaveClass("selectedStyling");
        })
        it("does not display hightlight if card is not selected", () => {
            render(<SubscriptionDetailsCard id={1} selectedCardId={0} />)
            expect(screen.getByTestId("subscription-card")).not.toHaveClass("selectedStyling");
        })
    })
    describe("displays card content correctly", () => {
        it("displays subscription header", () => {
            render(<SubscriptionDetailsCard subscriptionName="starter"/>)
            expect(screen.getByText("Starter")).toBeVisible();
        })
        it("displays bulleted list", () => {
            render(<SubscriptionDetailsCard subscriptionDetails={["daily flower delivery", "scissors", "kenzan"]} />)
            expect(screen.getByText("daily flower delivery")).toBeVisible();
            expect(screen.getByText("scissors")).toBeVisible();
            expect(screen.getByText("kenzan")).toBeVisible();
        })
        it("displays price and interval of subscription", () => {
            render(<SubscriptionDetailsCard price="200" interval="monthly" />)
            expect(screen.getByText("$200 / monthly")).toBeVisible();
        })
    });
});