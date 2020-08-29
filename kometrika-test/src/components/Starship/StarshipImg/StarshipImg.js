import React from "react";
import PropTypes from "prop-types";

import Img from "components/Misc/Img/Img";

const starshipImg = ({ imgSrc, imgAlt = "" }) => (
  <Img src={imgSrc} alt={imgAlt} />
);

starshipImg.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string
};

export default starshipImg;
