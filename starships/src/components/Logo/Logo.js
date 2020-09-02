import React from "react";

import { ReactComponent as LogoImg } from "assets/img/logo.svg";

import styles from "./Logo.module.scss";

const logo = props => (
  <div className={styles.logo}>
    <LogoImg className={styles.logo_img} />
    <span className={styles.logo_txt}>Star Wars Starships Comparison</span>
  </div>
);

export default logo;
