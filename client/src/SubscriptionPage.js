import VSpacer from "./VSpacer";
import "./SubscriptionButton.css";
import "./SubscriptionPage.css";

const SubscriptionPage = () => {
  return (
    <div className="background">
      <div className="backgroundIkebanaImage" />
      <div className="foregroundWrapper">
        <div className="contentContainer">
          <div className="title">
            Immersive Mindfulness Experience in Flowers, Sound, and Light
          </div>
          <div className="subtitle">
            world class education in traditional ikabana no matter where you
            are!
          </div>
          <div className="description">
            We believe interaction with flowers is very important to experience
            a whole and calm mind. The Japanese Art of Ikebana means to
            animate flowers into life. It’s a 600 year old tradition about the
            art of flower arrangements. We want to bring this mindful practice
            to the greater world by making it accessible through online training
            that feels just like you're with a master in Japan. Pick your
            Ikebana box subscription, receive guided ikebana sessions,
            accompanied musical arrangements, and virtual demonstrations
            composed and arranged by our own artists.
          </div>
          <button className="submitButtonSubscriptionPage" onClick={() => {}}>
            Free Ikebana Handbook
          </button>
        </div>
      </div>
    </div>
  );
};
export default SubscriptionPage;
