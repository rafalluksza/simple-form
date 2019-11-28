import React from "react";
import { makeStyles } from "@material-ui/core";
import background from "../../Images/right-side-bkg.jpg";
import Logo from "./Logo";
import Note from "./Note";

const useStyles = makeStyles(() => ({
  background: {
    backgroundImage: `url(${background})`,
    width: "100%",
    height: "100%",
    minHeight: "630px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    position: "relative"
  }
}));

const RightSide = () => {
  const classes = useStyles();
  return (
      <div className={classes.background} >
        <Logo/>
        <Note/>
      </div>
    )
};

export default RightSide;
