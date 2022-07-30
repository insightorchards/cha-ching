import React from "react";
import PropTypes from "prop-types";

const VSpacer = ({ factor = 1 }) => (
  <div
    style={{
      minHeight: factor * 8,
      width: "100%",
    }}
  />
);

VSpacer.propTypes = {
  factor: PropTypes.number,
};

export default VSpacer;
