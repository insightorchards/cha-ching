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
    price=200,
    interval=SUBSCRIPTION_INTERVALS.month,
    subscriptionDetails=[
        "Self discovery in the art of Ikebana",
        "Zoom one-on-one sessions with the Master",
        "Monthly instructional videos, advanced techniques from the Master",
        "Invitations to annual ikebana events and competitions",
        "Weekly flower delivery and seasonal themed vases",
        "Exclusive access to our online community of ikebana enthusiasts",
        "Includes everything from starter and intermediate"
    ]
}) => {
    const [hovered, setHovered] = useState(false);
    const [selected, setSelected] = useState(false);

    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
    const determineCardWasSelected = () => {
        if(id != undefined && selectedCardId != undefined){
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
                    //TODO: find better method for generating a unique key value
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