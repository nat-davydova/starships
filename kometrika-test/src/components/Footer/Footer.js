import React from "react";

import Container from "components/Misc/Container/Container";

import styles from "./Footer.module.scss";

const footer = props => (
  <footer className={styles.footer}>
    <Container>
      <p>Natalia Davydova, 2020</p>
    </Container>
  </footer>
);

export default footer;
