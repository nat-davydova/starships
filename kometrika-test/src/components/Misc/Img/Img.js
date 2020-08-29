import React from "react";
import PropTypes from "prop-types";

const img = ({ src, alt = "", classes = {} }) => {
  const { root = "" } = classes;

  return <img className={root} src={src} alt={alt} />;
};

img.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  classes: PropTypes.object
};

export default img;
