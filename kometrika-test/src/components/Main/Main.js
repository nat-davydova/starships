import React from "react";

import Container from "components/Misc/Container/Container";

import styles from "./Main.module.scss";

const main = ({ children }) => (
  <main className={styles.main}>
    <Container>
      <div className={styles.main_inner}>Main 2{children}</div>
    </Container>
  </main>
);

export default main;
