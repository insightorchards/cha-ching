import "./ScrollableLandingPage.css";
import BambooInkPainting from "./BambooInkPainting";
import Hero from "./Hero";
// import SubscriptionPage from "./SubscriptionPage";
import SubscriptionPageNew from "./SubscriptionPageNew";
import Chevron from "./Chevron";

function ScrollableLandingPage() {
  return (
    <div className="landingPageWrapper">
      <div className="heroPage">
        <Hero />
        <div className="bambooInkPaintingWrapper">
          <BambooInkPainting />
        </div>
        <div className="chevronWrapper">
          <Chevron />
        </div>
      </div>
      {/* <SubscriptionPage /> */}
      <SubscriptionPageNew/>
    </div>
  );
}

export default ScrollableLandingPage;
