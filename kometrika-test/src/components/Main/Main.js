import React from "react";

import Container from "components/Misc/Container/Container";

const main = ({ children }) => (
  <main>
    <Container>
      <div className="">Main 2{children}</div>
    </Container>
  </main>
);

export default main;
