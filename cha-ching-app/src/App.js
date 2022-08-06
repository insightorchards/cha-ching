import Success from "./Success";
import "./error.css";
import "./App.css";
import "./Loading.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ElementsProviderCheckout from "./ElementsProviderCheckout";
import ScrollableLandingPage from "./ScrollableLandingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ScrollableLandingPage />} />
        <Route path="/checkout" element={<ElementsProviderCheckout />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
}

export default App;
