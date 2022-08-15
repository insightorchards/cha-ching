import "./SubscriptionDetailsCard.css";
import { useState, useEffect } from "react";

const SubscriptionDetailsCard = ({ id, selectedCardId }) => {
    const [hovered, setHovered] = useState(false);
    const [selected, setSelected] = useState(false);

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
    };

    return(
        <div
            className={`${determineStylingBasedOnUserAction()} container`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        />
    )
};

export default SubscriptionDetailsCard;