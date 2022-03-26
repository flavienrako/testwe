// Generate automaticaly by dbuilder
import React from "react";

import { Box, ButtonIcon, Icon, Title } from "@billers/library";

const BookCard = (props) => {
  const { ROOT, gwogxu, action, smkmgo, fxmvju, name, hbirkj, date, yhhcei } =
    props;
  return (
    <Box {...ROOT}>
      <ButtonIcon {...gwogxu} Icon={<Icon {...smkmgo} />} {...action} />
      <Box {...yhhcei}>
        <Title {...fxmvju} {...name} />
        <Title {...hbirkj} {...date} />
      </Box>
    </Box>
  );
};

export default BookCard;

BookCard.defaultProps = {
  ROOT: {
    tag: "div",
    className: "card",
    css: {
      width: "25%",
      position: "relative",
      textAlign: "center",
      minHeight: "350px",
      marginTop: "16px",
      paddingTop: "8px",
      paddingRight: "8px",
      paddingBottom: "12px",
      paddingLeft: "8px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
  },
  gwogxu: {
    type: "button",
    disabled: false,
    disableFocusRipple: false,
    disableRipple: false,
    color: "inherit",
    css: {
      position: "absolute",
      right: "12px",
      top: "12px",
      background: "#252675",
      zIndex: "10",
      "&:hover": { color: "#252675", background: "#FFFFFFCC" },
    },
  },
  smkmgo: {
    color: "inherit",
    icon: "FaRegBookmark",
    fontSize: "inherit",
    hidden: false,
  },
  fxmvju: {
    variant: "h2",
    text: "{{name}}",
    gutterBottom: false,
    noWrap: false,
    css: { fontSize: "32px" },
  },
  hbirkj: {
    variant: "overline",
    text: "Publié le {{date}} <br>par {{publisher}}",
    gutterBottom: false,
    noWrap: false,
    css: { color: "#C8C8C8" },
  },
  yhhcei: { tag: "div" },
};
