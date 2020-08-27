import React, { Component, Fragment } from "react";

import Footer from "components/Footer/Footer";

class Layout extends Component {
  render() {
    return (
      <Fragment>
        <div>NAV</div>
        <div>MAIN</div>
        <Footer />
      </Fragment>
    );
  }
}

export default Layout;
