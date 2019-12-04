import React from "react";
import { makeStyles } from "@material-ui/core";
import Logo from "../RightSide/Logo";
import WrapperForSteps from "./WrapperForSteps";

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
    fontSize: 24
  }
}));

const ThanksNote = ({ name }) => {
  const classes = useStyles();
  return (
    <WrapperForSteps>
      <div className={classes.inputs}>
        <Logo />
        <p className={classes.par}>Thanks {name} for registering!</p>
      </div>
    </WrapperForSteps>
  );
};

export default ThanksNote;
