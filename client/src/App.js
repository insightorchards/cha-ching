import "./Error.css";
import "./App.css";
import "./Loading.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ElementsProviderCheckout from "./ElementsProviderCheckout";
import ScrollableLandingPage from "./ScrollableLandingPage";
import Success from "./Success";
import SubscriptionSelection from "./SubscriptionSelection";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ScrollableLandingPage />} />
        <Route
          path="/subscription-selection"
          element={<SubscriptionSelection />}
        />
        <Route path="/checkout" element={<ElementsProviderCheckout />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
}

export default App;
