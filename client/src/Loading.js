import s from "./Loading.module.css";

function LoadingSpinner() {
  return (
    <div role="alert" aria-live="polite" className={s.ldsEllipsis}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default LoadingSpinner;
