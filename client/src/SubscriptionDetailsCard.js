import "./SubscriptionDetailsCard.css";
import { useState, useEffect } from "react";

const SubscriptionDetailsCard = ({ id, selectedCardId, subscriptionName="starter" }) => {
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
        </div>
    )
};

export default SubscriptionDetailsCard;