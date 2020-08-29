import React from "react";

import TableTr from "components/Table/TableTr/TableTr";
import TableTh from "components/Table/TableTh/TableTh";
import Spaceship from "components/Starship/Starship";

import Img from "components/Misc/Img/Img";

import StarDestroyerImg from "assets/img/starships/star-destroyer.png";
import FalconImg from "assets/img/starships/falcon.png";

const tableThead = props => (
  <thead>
    <TableTr>
      <TableTh></TableTh>
      <TableTh>
        <Spaceship
          name="Star Destroyer"
          model="Imperial I-class Star Destroyer"
          starshipClass="Star Destroyer"
          manufactured="Kuat Drive Yards"
        />
        <Img src={StarDestroyerImg} alt={`Star Destroyer`} />
      </TableTh>
      <TableTh>
        <Spaceship
          name="Millennium Falcon"
          model="YT-1300 light freighter"
          starshipClass="Light freighter"
          manufactured="Corellian Engineering Corporation"
        />
        <Img src={FalconImg} alt={`Millennium Falcon`} />
      </TableTh>
    </TableTr>
  </thead>
);

export default tableThead;
