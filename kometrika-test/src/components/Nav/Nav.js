import React from "react";

import Container from "components/Misc/Container/Container";

import styles from "./Nav.module.scss";

const nav = props => (
  <nav className={styles.nav}>
    <Container>
      <div className={styles.nav_inner}>Nav</div>
    </Container>
  </nav>
);

export default nav;
