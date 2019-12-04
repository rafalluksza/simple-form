import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  wrapper: {
    position: "absolute",
    width: "100%",
    height: "100%"
  }
}));

const WrapperForSteps = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.wrapper}>{children}</div>;
};

export default WrapperForSteps;
