import React, { Component, Fragment } from "react";

import Nav from "components/Nav/Nav";
import Main from "components/Main/Main";
import Footer from "components/Footer/Footer";

import styles from "./Layout.module.scss";

class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Nav />
        <Main>{this.props.children}</Main>
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
