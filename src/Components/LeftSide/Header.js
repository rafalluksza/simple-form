import React from "react";
import { makeStyles } from "@material-ui/core";
import { COLOR_TEXT_LIGHT } from "../../Constants/colors";

const useStyles = makeStyles(() => ({
  header: {
    width: "70%",
    textAlign: "left",
    paddingTop: 70
  },
  line: {
    borderTop: "2px solid rgba(255,146,10,1)",
    width: 70,
    height: 5,
    display: "inline-block"
  },
  content: {},
  contentTitle: {
    fontFamily: "Montserrat"
  },
  contentSubtitle: {
    color: `rgba(${COLOR_TEXT_LIGHT})`
  }
}));

const Header = ({ index }) => {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <div>
        <span> {index} </span>
        <div className={classes.line}> </div>
        {index === 1 && <span> Personal Details </span>}
        {index === 2 && <span> Credit Card Data </span>}
        {index === 3 && <span> Summary </span>}
      </div>

      <div className={classes.content}>
        <h1 className={classes.contentTitle}>Get started absolutely free</h1>
        <span className={classes.contentSubtitle}>Free forever.</span>
      </div>
    </header>
  );
};

export default Header;
