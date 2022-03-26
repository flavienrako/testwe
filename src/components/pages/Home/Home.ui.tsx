// Generate automaticaly by dbuilder
import React from "react";

import { Box, Container, Title } from "@billers/library";

const Home = (props) => {
  const { ROOT, vclndk, mvxpnb, List, aktfnw, equwea } = props;
  return (
    <Box {...ROOT}>
      <Box {...aktfnw}>
        <Container {...vclndk}>
          <Title {...equwea} />
          <Box {...mvxpnb} {...List} />
        </Container>
      </Box>
    </Box>
  );
};

export default Home;

Home.defaultProps = {
  ROOT: {
    tag: "div",
    className: "home-page",
    css: {
      paddingTop: "0px",
      paddingRight: "0px",
      paddingBottom: "0px",
      paddingLeft: "0px",
      background: "#121212",
    },
  },
  vclndk: {
    maxWidth: "lg",
    disableGutters: false,
    fixed: false,
    css: { marginTop: "70px", marginBottom: "70px" },
  },
  mvxpnb: { tag: "div", css: { display: "flex", flexWrap: "wrap" } },
  aktfnw: { tag: "div", css: { minHeight: "90vh", paddingBottom: "70px" } },
  equwea: {
    variant: "h1",
    text: "React example 🔥",
    gutterBottom: false,
    noWrap: false,
    css: { textAlign: "center", paddingBottom: "32px" },
  },
};
