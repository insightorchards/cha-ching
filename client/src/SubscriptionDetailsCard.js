import "./SubscriptionDetailsCard.css";
import { useState, useEffect } from "react";
import CircleCheck from "./CircleCheck";

const SUBSCRIPTION_INTERVALS = {
    month: "monthly",
    year: "yearly",
};

const SubscriptionDetailsCard = ({
    id,
    selectedCardId,
    subscriptionName="Add name here",
    price=0,
    interval=SUBSCRIPTION_INTERVALS.month,
    subscriptionDetails=["Add description details here"]
}) => {
    const [hovered, setHovered] = useState(false);
    const [selected, setSelected] = useState(false);

    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
    const determineCardWasSelected = () => {
        if(id !== undefined && selectedCardId !== undefined){
            if(id === selectedCardId){ setSelected(true) }
        }
    };

    useEffect(() => {
        determineCardWasSelected()
        if(id !== selectedCardId){ setSelected(false) }
    }, [ selected ])

    const determineStylingBasedOnUserAction = () => {
        if(hovered && !selected) { return "hoveredStyling" }
        if(selected) { return "selectedStyling" }
        if(!hovered && !selected) { return ""}
    };

    return(
        <div
            className={`${determineStylingBasedOnUserAction()} container`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            data-testid="subscription-card"
        >
            <div className="subscriptionName">{capitalize(subscriptionName)}</div>
            <div className="subscriptionPricingAndInterval">{`$${price} / ${interval}`}</div>
            <div className="subscriptionDetailsBulletedList">
            {subscriptionDetails.map((item, i) => {
                return (
                    <ul className="bulletedListItem" key={i}>
                        <div className="bulletPointIcon">
                            <CircleCheck/>
                        </div>
                        <li className="bulletPointText" key={i}>{item}</li>
                    </ul>
                )
            })}

            </div>
        </div>
    )
};

export default SubscriptionDetailsCard;
