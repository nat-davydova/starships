import React from "react";

import StarDestroyerImg from "assets/img/starships/star-destroyer.png";
import FalconImg from "assets/img/starships/falcon.png";

const tableThead = props => (
  <thead>
    <tr>
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
    </tr>
  </thead>
);

export default tableThead;
