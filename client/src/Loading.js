import "./Loading.css";

function LoadingSpinner() {
  return (
    <div role="alert" aria-live="polite" className="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default LoadingSpinner;
