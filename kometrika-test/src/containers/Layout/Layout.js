import React, { Component, Fragment } from "react";

import Footer from "components/Footer/Footer";

import styles from "./Layout.module.scss";

class Layout extends Component {
  render() {
    return (
      <Fragment>
        <div>NAV</div>
        <div>MAIN</div>
        <Footer
          classes={{
            root: styles.footer
          }}
        />
      </Fragment>
    );
  }
}

export default Layout;
