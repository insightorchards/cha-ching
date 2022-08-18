import "./SubscriptionDetailsCard.css";
import { useState, useEffect } from "react";
import CircleCheck from "./CircleCheck";

const SubscriptionDetailsCard = ({ id, selectedCardId, subscriptionName="Add name here", subscriptionDetails=["Add descriptive bullet point text about the subscription here"] }) => {
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

    //TODO: This number is not always unique find better method for generating a unique key value
    const uniqueId = Math.floor(Math.random() * 100)

    return(
        <div
            className={`${determineStylingBasedOnUserAction()} container`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            data-testid="subscription-card"
        >
            <div className="subscriptionName">{capitalize(subscriptionName)}</div>
            <div className="subscriptionDetailsBulletedList">
            {subscriptionDetails.map((item) => {
                return (
                    <ul className="bulletedListItem" key={uniqueId}>
                        <div className="bulletPointIcon">
                            <CircleCheck/>
                        </div>
                        <li className="bulletPointText" key={uniqueId}>{item}</li>
                    </ul>
                )
            })}

            </div>
        </div>
    )
};

export default SubscriptionDetailsCard;