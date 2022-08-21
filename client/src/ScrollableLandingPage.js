import "./ScrollableLandingPage.css";
import BambooInkPainting from "./BambooInkPainting";
import Hero from "./Hero";
import SubscriptionPage from "./SubscriptionPage";
import Chevron from "./Chevron";
import SubscriptionSection from "./SubscriptionSection";

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
      <SubscriptionPage />
      <SubscriptionSection />
    </div>
  );
}

export default ScrollableLandingPage;
