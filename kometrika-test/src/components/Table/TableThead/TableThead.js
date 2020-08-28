import React from "react";

import TableTr from "components/Table/TableTr/TableTr";

import StarDestroyerImg from "assets/img/starships/star-destroyer.png";
import FalconImg from "assets/img/starships/falcon.png";

const tableThead = props => (
  <thead>
    <TableTr>
      <th></th>
      <th>
        <img src={StarDestroyerImg} />
        <p>Star Destroyer</p>
        <p>Imperial I-class Star Destroyer</p>
        <p>(Star Destroyer)</p>
        <p>Kuat Drive Yards</p>
      </th>
      <th>
        <img src={FalconImg} />
        <p>Millennium Falcon</p>
        <p>YT-1300 light freighter</p>
        <p>(Light freighter)</p>
        <p>Corellian Engineering Corporation</p>
      </th>
    </TableTr>
  </thead>
);

export default tableThead;
