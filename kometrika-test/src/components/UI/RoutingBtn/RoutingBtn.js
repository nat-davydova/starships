import React from "react";
import { Link } from "react-router-dom";

import styles from "./RoutingBtn.module.scss";

const routingBtn = ({ children, ...props }) => (
  <Link className={styles.routingBtn} {...props}>
    {children}
  </Link>
);

export default routingBtn;
