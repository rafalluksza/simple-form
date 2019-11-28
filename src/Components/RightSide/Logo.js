import React from "react";

import { makeStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { FlashOn } from "@material-ui/icons";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "180px",
    height: "180px",
    borderRadius: "20%"
  },
  icon: {
    fontSize: "7rem",
    color: "rgba(255,146,10,1)"
  }
}));

const Logo = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.container}>
      <FlashOn className={classes.icon} />
    </Paper>
  );
};

export default Logo;
