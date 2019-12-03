import React from "react";
import { makeStyles } from "@material-ui/core";
import Logo from "../RightSide/Logo";

const useStyles = makeStyles(() => ({
  inputs: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    marginTop: 20
  },
  par: {
    fontSize: 24,
  }
}));

const ThanksNote = ({ name }) => {
  const classes = useStyles();
  return (
    <div className={classes.inputs}>
      <Logo />
      <p className={classes.par}>Thanks {name} for registering!</p>
    </div>
  );
};

export default ThanksNote;
