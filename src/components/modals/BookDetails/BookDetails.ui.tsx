// Generate automaticaly by dbuilder
import React from "react";

import { Box, Title } from "@billers/library";

const BookDetails = (props) => {
  const { ROOT, vbchig, name, zmmraf, authors, wnzjlj, characters, pfdvml } =
    props;
  return (
    <Box {...ROOT}>
      <Title {...vbchig} {...name} />
      <Title {...zmmraf} {...authors} />
      <Title {...pfdvml} />
      <Box {...wnzjlj} {...characters} />
    </Box>
  );
};

export default BookDetails;

BookDetails.defaultProps = {
  ROOT: {
    tag: "div",
    css: {
      paddingTop: "32px",
      paddingRight: "32px",
      paddingBottom: "32px",
      paddingLeft: "32px",
    },
  },
  vbchig: {
    variant: "h3",
    text: "{{name}}",
    gutterBottom: false,
    noWrap: false,
  },
  zmmraf: {
    variant: "overline",
    text: "Auteurs : {{authors}}",
    gutterBottom: false,
    noWrap: false,
  },
  wnzjlj: { tag: "div" },
  pfdvml: {
    variant: "h4",
    text: "Personnages",
    gutterBottom: false,
    noWrap: false,
  },
};
