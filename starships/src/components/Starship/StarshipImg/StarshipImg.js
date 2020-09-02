import React from "react";
import PropTypes from "prop-types";

import Img from "components/Misc/Img/Img";

import styles from "./StarshipImg.module.scss";

const starshipImg = ({ imgSrc, imgAlt = "" }) => (
  <Img
    src={imgSrc}
    alt={imgAlt}
    classes={{
      root: styles.img
    }}
  />
);

starshipImg.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string
};

export default starshipImg;
