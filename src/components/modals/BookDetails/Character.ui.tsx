// Generate automaticaly by dbuilder
import React from "react";

import { Box, Title } from "@billers/library";

const Character = (props) => {
  const { ROOT, rlggnk, name, xxibms, playedBy } = props;
  return (
    <Box {...ROOT}>
      <Title {...rlggnk} {...name} />
      <Title {...xxibms} {...playedBy} />
    </Box>
  );
};

export default Character;

Character.defaultProps = {
  ROOT: {
    tag: "div",
    css: {
      paddingTop: "8px",
      paddingRight: "8px",
      paddingBottom: "8px",
      paddingLeft: "8px",
    },
  },
  rlggnk: {
    variant: "body1",
    text: "Nom : {{name}}",
    gutterBottom: false,
    noWrap: false,
    css: { fontWeight: 700 },
  },
  xxibms: {
    variant: "body1",
    text: "Joué par {{playedBy}}",
    gutterBottom: false,
    noWrap: false,
  },
};
