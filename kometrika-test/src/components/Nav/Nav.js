import React from "react";

import Container from "components/Misc/Container/Container";
import Logo from "components/Logo/Logo";

import styles from "./Nav.module.scss";

const nav = props => (
  <nav className={styles.nav}>
    <Container>
      <div className={styles.nav_inner}>
        <Logo />
      </div>
    </Container>
  </nav>
);

export default nav;
