import "./SubscriptionPageNew.css";
import SubscriptionDetailsCard from "./SubscriptionDetailsCard";

const SubscriptionPageNew = () => {
    return(
        <div className="mainContainer">
            <SubscriptionDetailsCard />
            <SubscriptionDetailsCard />
            <SubscriptionDetailsCard />
        </div>
    )
};

export default SubscriptionPageNew;
