import "./error.css";

const Error = (message, code, type) => {
  return (
    <div className="errorWrapper">
      <div className="errorContainer">
        <div className="errorText">error</div>
      </div>
    </div>
  );
};

export default Error;
