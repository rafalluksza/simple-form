import React from "react";
import { makeStyles } from "@material-ui/core";
import { COLOR_TEXT_LIGHT } from "../../Constants/colors";

const useStyles = makeStyles(() => ({
  header: {
    textAlign: "left",
    paddingTop: 70
  },
  line: {
    borderTop: "2px solid rgba(255,146,10,1)",
    width: 70,
    height: 5,
    display: "inline-block"
  },
  siteData: {
    fontSize: 16
  },
  content: {},
  contentTitle: {
    fontFamily: "Montserrat",
    fontSize: 24
  },
  contentSubtitle: {
    color: `rgba(${COLOR_TEXT_LIGHT})`,
    fontSize: 16
  }
}));

const Header = ({ index }) => {
  const classes = useStyles();

  // const transitions = useTransition(index, p => p, {
  //   from: { opacity: 0, transform: "translate3d(100%,0,0)" },
  //   enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
  //   leave: { opacity: 0, transform: "translate3d(-25%,0,0)" }
  // });

  return (
    <header className={classes.header}>
      {/*{transitions.map(({ item, props, key }) => {*/}
      {/*  return (*/}
            <div className={classes.siteData}>
              <span> {index} </span>
              <div className={classes.line}> </div>
              {index === 1 && <span> Personal Details </span>}
              {index === 2 && <span> Credit Card Data </span>}
              {index === 3 && <span> Summary </span>}
              {index === 4 && <span> Thank you! </span>}
            </div>
      {/*  );*/}
      {/*})}*/}

      <div className={classes.content}>
        <h1 className={classes.contentTitle}>Get started absolutely free</h1>
        <span className={classes.contentSubtitle}>
          Free forever, but please pay!
        </span>
      </div>
    </header>
  );
};

export default Header;
