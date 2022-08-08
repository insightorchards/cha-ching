import "./Loading.css";

function LoadingSpinner() {
  return (
    <div className="spinnerWrapper">
      <div role="alert" aria-live="polite" className="spinnerContainer"></div>
    </div>
  );
}

export default LoadingSpinner;
