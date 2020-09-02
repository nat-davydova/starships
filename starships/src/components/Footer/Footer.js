import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import Container from "components/Misc/Container/Container";

import styles from "./Footer.module.scss";

const footer = ({ classes = {} }) => {
  const { root = "" } = classes;

  const footerClassnames = classnames(styles.footer, root);

  return (
    <footer className={footerClassnames}>
      <Container>
        <p>Natalia Davydova, 2020</p>
      </Container>
    </footer>
  );
};

footer.propTypes = {
  classes: PropTypes.object
};

export default footer;
