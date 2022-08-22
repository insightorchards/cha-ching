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
          <VSpacer factor={5} />
          <div className="subtitle">
            world class education in traditional ikabana no matter where you
            are!
          </div>
          <VSpacer factor={5} />
          <div className="description">
            We believe interaction with flowers is very important to experience
            a whole and calm mind. A flowers temporal nature reflects our own,
            and through the appreciation of its beauty, it mirrors ones own
            inner nature… Though the flower is ephemeral, its beauty goes on
            forever inside of the mind. The Japanese Art of Ikebana means to
            animate flowers into life. It’s a 600 year old tradition about the
            art of flower arrangements. We want to bring this mindful practice
            to the greater world by making it accessible through online training
            that feels just like you're with a master in Japan. Pick your
            Ikebana box subscription, receive guided ikebana sessions,
            accompanied musical arrangements, and virtual demonstrations
            composed and arranged by our own artists. An ancient tradition in
            mindfulness meets a full media experience in beautitude.
          </div>
          <VSpacer factor={7} />
          <button className="submitButtonSubscriptionPage" onClick={() => {}}>
            Free Ikebana Handbook
          </button>
        </div>
      </div>
    </div>
  );
};
export default SubscriptionPage;
