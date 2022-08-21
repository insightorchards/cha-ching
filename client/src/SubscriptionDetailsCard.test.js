import { render, screen } from "@testing-library/react";
import SubscriptionDetailsCard from "./SubscriptionDetailsCard";

describe("SubscriptionDetailsCard", () => {
    describe("highlight styling renders correctly", () => {
        it("does not display highlight given 'id' and 'selectedCardId' props are not passed", () => {
            render(<SubscriptionDetailsCard/>)
            expect(screen.getByRole("subscription-card")).not.toHaveClass("selected");
        })
        it("displays highlight when selected is true", () => {
            render(<SubscriptionDetailsCard id={0} selectedCardId={0} />)
            expect(screen.getByRole("subscription-card")).toHaveClass("selected");
        })
        it("does not display hightlight if card is not selected", () => {
            render(<SubscriptionDetailsCard id={1} selectedCardId={0} />)
            expect(screen.getByRole("subscription-card")).not.toHaveClass("selected");
        })
    })
    describe("displays card content correctly", () => {
        it("renders correctly", () => {
            const component = render(
                <SubscriptionDetailsCard
                    subscriptionName="starter"
                    subscriptionDetails={["daily flower delivery", "scissors", "kenzan"]}
                    price="200"
                    interval="monthly"
                />
            )
            expect(component.asFragment()).toMatchSnapshot()
        })
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
