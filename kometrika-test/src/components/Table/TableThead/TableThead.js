import React from "react";
import PropTypes from "prop-types";

import TableTr from "components/Table/TableTr/TableTr";
import TableTh from "components/Table/TableTh/TableTh";
import Spaceship from "components/Starship/Starship";

import StarDestroyerImg from "assets/img/starships/star-destroyer.png";
import FalconImg from "assets/img/starships/falcon.png";

const tableThead = ({ config }) => (
  <thead>
    <TableTr>
      <TableTh></TableTh>
    </TableTr>
  </thead>
);

tableThead.propTypes = {
  config: PropTypes.array.isRequired
};

export default tableThead;
