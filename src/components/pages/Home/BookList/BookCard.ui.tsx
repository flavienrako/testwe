// Generate automaticaly by dbuilder
import React from "react";

import { Box, ButtonIcon, Icon, Title } from "@billers/library";

const BookCard = (props) => {
  const {
    ROOT,
    card,
    wjntle,
    action,
    ewbgoa,
    rilylh,
    name,
    rskfwx,
    date,
    qnfhtb,
  } = props;
  return (
    <Box {...ROOT} {...card}>
      <ButtonIcon {...wjntle} Icon={<Icon {...ewbgoa} />} {...action} />
      <Box {...qnfhtb}>
        <Title {...rilylh} {...name} />
        <Title {...rskfwx} {...date} />
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
  wjntle: {
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
  ewbgoa: {
    color: "inherit",
    icon: "FaRegBookmark",
    fontSize: "inherit",
    hidden: false,
  },
  rilylh: {
    variant: "h2",
    text: "{{name}}",
    gutterBottom: false,
    noWrap: false,
    css: { fontSize: "32px" },
  },
  rskfwx: {
    variant: "overline",
    text: "Publié le {{date}} <br>par {{publisher}}",
    gutterBottom: false,
    noWrap: false,
    css: { color: "#C8C8C8" },
  },
  qnfhtb: { tag: "div" },
};
