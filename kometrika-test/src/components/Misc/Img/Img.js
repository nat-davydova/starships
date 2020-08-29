import React from "react";
import PropTypes from "prop-types";

const img = ({ src, alt = "" }) => <img src={src} alt={alt} />;

img.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string
};

export default img;
