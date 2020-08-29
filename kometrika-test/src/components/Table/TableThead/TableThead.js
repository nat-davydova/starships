import React from "react";
import PropTypes from "prop-types";

import TableTr from "components/Table/TableTr/TableTr";
import TableTh from "components/Table/TableTh/TableTh";
import Spaceship from "components/Starship/Starship";

import StarDestroyerImg from "assets/img/starships/star-destroyer.png";
import FalconImg from "assets/img/starships/falcon.png";

const tableThead = ({ theadContent }) => {
  const theadArr = theadContent.map(elem => <TableTh>{elem}</TableTh>);

  return (
    <thead>
      <TableTr>
        <TableTh></TableTh>
        {theadArr}
      </TableTr>
    </thead>
  );
};

tableThead.propTypes = {
  theadContent: PropTypes.array.isRequired
};

export default tableThead;
