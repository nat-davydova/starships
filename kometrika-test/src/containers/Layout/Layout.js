import React, { Component, Fragment } from "react";

import Nav from "components/Nav/Nav";
import Footer from "components/Footer/Footer";

import styles from "./Layout.module.scss";

class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Nav />
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
