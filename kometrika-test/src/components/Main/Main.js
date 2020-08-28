import React from "react";
import PropTypes from "prop-types";

import Container from "components/Misc/Container/Container";

import styles from "./Main.module.scss";

const main = ({ children }) => (
  <main className={styles.main}>
    <Container>
      <div className={styles.main_inner}>{children}</div>
    </Container>
  </main>
);

main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element.isRequired,
    PropTypes.node.isRequired
  ])
};

export default main;
