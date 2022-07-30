import React from "react";
import PropTypes from "prop-types";

const HSpacer = ({ factor = 1 }) => (
  <div
    style={{
      minWidth: factor * 8,
      height: "100%",
    }}
  />
);

HSpacer.propTypes = {
  factor: PropTypes.number,
};
export default HSpacer;
