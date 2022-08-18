import "./SubscriptionPageNew.css";
import SubscriptionDetailsCard from "./SubscriptionDetailsCard";

const SubscriptionPageNew = () => {
    return(
        <div className="mainContainer">
            <SubscriptionDetailsCard subscriptionName="Starter"/>
            <SubscriptionDetailsCard subscriptionName="Intermediate"/>
            <SubscriptionDetailsCard subscriptionName="Master"/>
        </div>
    )
};

export default SubscriptionPageNew;
