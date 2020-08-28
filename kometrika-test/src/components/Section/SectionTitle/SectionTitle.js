import React from "react";

import styles from "./SectionTitle.module.scss";

const sectionTitle = ({ children }) => (
  <h1 className={styles.title}>{children}</h1>
);

export default sectionTitle;
