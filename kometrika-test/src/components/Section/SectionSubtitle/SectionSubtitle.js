import React from "react";

import styles from "./SectionSubtitle.module.scss";

const sectionSubtitle = ({ children }) => (
  <h2 className={styles.subtitle}>{children}</h2>
);

export default sectionSubtitle;
